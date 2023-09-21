const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("running");
})

app.post('/product',(req,res)=>{
    console.log(req.body);
    res.send({});
})

mongoose.connect(process.env.connectionString)
    .then(() => {
        app.listen(3002);
        console.log('Server Connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });