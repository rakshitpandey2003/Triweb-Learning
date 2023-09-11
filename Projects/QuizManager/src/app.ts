import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import express from "express";
import UserRoute from "./routes/user";
import authRoute from './routes/auth';
import quizRoute from './routes/quiz';
import examRoute from './routes/exam';
import reportRoute from './routes/report';
import ProjectError from './helper/error';
const app = express();

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{} | []
}

const connectionstring = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global{
    namespace Express{
        interface Request{
            userId:String;
        }
    }
}

app.get("/",(req , res)=>{
    res.send("hello");
});

app.use("/user" , UserRoute);

app.use('/auth',authRoute);

app.use('/quiz',quizRoute);

app.use('/exam',examRoute);

app.use('/report', reportRoute);

app.use((err:ProjectError, req:Request, res:Response, next:NextFunction)=>{
    let message:String;
    let statusCode:number;

    if(!!err.statusCode && err.statusCode<500){
        message=err.message;
        statusCode=err.statusCode;
    }
    else{
        message="Something went wrong !";
        statusCode=500;
    }

    let resp:ReturnResponse={status:"error", message,data:{}};
    if(!!err.data){
        resp.data=err.data;
    }

    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
})
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(connectionstring, mongooseOptions as mongoose.ConnectOptions)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server Connected');
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });