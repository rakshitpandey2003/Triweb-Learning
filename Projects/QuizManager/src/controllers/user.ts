import { NextFunction, Request, Response } from "express";
import User from '../models/user';
import ProjectError from "../helper/error";
import { ReturnResponse } from "../utils/interfaces";
import jwt from "jsonwebtoken";

const getUser=async (req:Request,res:Response , next:NextFunction)=>{
    let resp:ReturnResponse;
    try {
        // if(req.userId != req.params.userId){
        //     const err=new ProjectError("You are not authorized");
        //     err.statusCode=401;
        //     err.data={hi:"it's error"};
        //     throw err;
        if(req.headers.authorization){
        const token=req.headers.authorization.split(' ')[1];
        const decoded=<any>jwt.verify(token, 'myverysecretkey');
        const userId=decoded.userId
        const user= await User.findById(userId, {name:1, email:1 });
        if(!user){
            const err=new ProjectError("User Not Found");
            err.statusCode=401;
            throw err;
        }
        else{
            resp={status:"success", message:"User Found", data:{user:user}};
            res.status(200).send(resp);
        }
        }
        
    } catch (error) {
        next(error);
    }
}

const updateUser=async (req:Request, res:Response , next:NextFunction)=>{
    let resp:ReturnResponse;
    try {
        if(req.userId != req.body._id){
            const err=new ProjectError("You are not authorized");
            err.statusCode=401;
            throw err;
        }
        const userId=req.body._id;
        const user=await User.findById(userId);
        if(!user){
            const err=new ProjectError("User Not Found");
            err.statusCode=401;
            throw err;
        }
        else{
            user.name=req.body.name;
            await user.save();
            resp={status:"success",message:"User Updated",data:{}};
            res.send(resp);
        }
    } catch (error) {
        next(error);
    }
}

export {getUser, updateUser};