import { Request, Response } from "express";
import User from '../models/user';
import bcrypt from 'bcryptjs';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{}
}

const registerUser = async (req: Request, res: Response) => {
    let resp:ReturnResponse;
    try {;
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
        } else {
            resp = {
                status:"success" , 
                message:"Registration Done",
                data:{userId:result._id}
            }
        }
        res.send(resp);
    } catch (error) {
        resp = {
            status:"error" , 
            message:"something went wrong",
            data:{}
        }
        res.status(500).send(resp);
    }
    res.send("Done");
}

const getUser=async (req:Request,res:Response)=>{
    let resp:ReturnResponse;
    try {
        const userId=req.params.userId;
        const user= await User.findById(userId, {name:1, email:1 });
        if(!user){
            resp={status:"error",message:"No user found",data:{}};
            res.send(resp);
        }
        else{
            resp={status:"success", message:"User Found", data:{user:user}};
            res.send(resp);
        }
    } catch (error) {
        resp={status:"error",message:"Something went wrong",data:{}};
        res.status(500).send(resp);
    }
}

const updateUser=async (req:Request, res:Response)=>{
    let resp:ReturnResponse;
    try {
        const userId=req.body._id;
        const user=await User.findById(userId);
        if(!user){
            resp={status:"error",message:"No user found",data:{}};
            res.send(resp);
        }
        else{
            user.name=req.body.name;
            await user.save();
            resp={status:"success",message:"User Updated",data:{}};
            res.send(resp);
        }
    } catch (error) {
        resp={status:"error",message:"Something went wrong",data:{}};
        res.status(500).send(resp);
    }
}

const loginUser=async (req:Request,res:Response)=>{
    let resp:ReturnResponse;
    try {
        const email=req.body.email;
        const password=req.body.password;

        const user=await User.findOne({email});

        if(!user){
            resp={status:"error", message:"User Not Found", data:{}};
            res.status(401).send(resp);
        }
        else{
            const status=await bcrypt.compare(password,user.password);
            if(status){
                resp={status:"success", message:"Logged In", data:{}};
                res.status(200).send(resp);
            }
            else{
                resp={status:"error", message:"Wrong Credentials", data:{}};
                res.status(401).send(resp);
            }
            res.send(resp);
        }

    } catch (error) {
        console.log(error);
        resp={status:"error",message:"Something went wrong",data:{}};
        res.status(500).send(resp);
    }
}
export {registerUser, getUser, updateUser, loginUser};