import mongoose, { mongo } from 'mongoose';
import express from "express";
import UserRoute from "./routes/user";

const app = express();

const connectionstring = "mongodb+srv://Myuser:1234@mycluster.ywsim2g.mongodb.net/quizdata?retryWrites=true&w=majority";

app.use(express.json());

app.get("/",(req , res)=>{
    res.send("hello");
});

app.use("/user" , UserRoute);

mongoose.connect(connectionstring);

app.listen(3000);