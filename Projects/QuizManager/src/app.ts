import mongoose from 'mongoose';
import express from "express";
import UserRoute from "./routes/user";
const app = express();

const connectionstring = "mongodb+srv://Myuser:raklovaas@mycluster.ywsim2g.mongodb.net/quizdb?retryWrites=true&w=majority";

app.use(express.json());

app.get("/",(req , res)=>{
    res.send("hello");
});

app.use("/user" , UserRoute);
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(connectionstring, mongooseOptions as mongoose.ConnectOptions)
    .then(() => {
        app.listen(3000, () => {
            console.log('Server Connected');
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });