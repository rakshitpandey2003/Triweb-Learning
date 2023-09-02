import express from 'express';
import userRoute from './routes/user';
import { Request, Response } from 'express';

const app =express();

app.get('/', (req:Request,res:Response)=>{
    res.send("hello");
});

app.use('/user',userRoute);

app.listen(process.env.PORT);