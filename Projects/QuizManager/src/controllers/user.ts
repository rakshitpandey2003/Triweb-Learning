import { Request , Response } from "express";

const registerUser = (req:Request , res:Response)=>{
    console.log(req.body);
    res.send("Done");
}

export {registerUser};