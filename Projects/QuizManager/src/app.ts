import mongoose from 'mongoose';
import express from "express";
import UserRoute from "./routes/user";
import authRoute from './routes/auth';
const app = express();

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