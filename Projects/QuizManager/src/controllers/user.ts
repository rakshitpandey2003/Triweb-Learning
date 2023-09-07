import { Request, Response } from "express";
import User from '../models/user';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{}
}

const registerUser = async (req: Request, res: Response) => {
    let resp:ReturnResponse;
    try {
        const user = new User(req.body);
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

export {registerUser, getUser};