import { NextFunction, Request, Response } from "express";
import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import ProjectError from "../helper/error";

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{} | []
}

const registerUser = async (req: Request, res: Response , next:NextFunction) => {
    let resp:ReturnResponse;
    try {
        const name=req.body.name;
        const email=req.body.email;
        const password=await bcrypt.hash(req.body.password,12); 

        const user=new User({name,email,password});
        const result = await user.save();
        if (!result) {
            resp = {
                status:"error" , 
                message:"No result found",
                data:{}
            }
            res.send(resp);
        } else{
            resp = {
                status:"success" , 
                message:"Registration Done",
                data:{userId:result._id}
            }
            res.send(resp);
        }
    } catch (error) {
       next(error);
    }
}
const loginUser=async (req:Request,res:Response , next:NextFunction)=>{
    let resp:ReturnResponse;
    try {
        const email=req.body.email;
        const password=req.body.password;

        const user=await User.findOne({email});

        if(!user){
            const err=new ProjectError("User Not Found");
            err.statusCode=401;
            throw err;
        }
        else{
            const status=await bcrypt.compare(password,user.password);
            if(status){
                const token = jwt.sign({userId:user._id} , "myverysecretkey" , {expiresIn:'1h'});
                resp={status:"success", message:"Logged In", data:{token}};
                res.status(200).send(resp);
            }
            else{
                const err=new ProjectError("Wrong Credentials");
                err.statusCode=401;
                throw err;
            }
        }

    } catch (error) {
        next(error);
    }
}

export {registerUser , loginUser};