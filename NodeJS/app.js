const express = require('express');
const app = express();
app.use(express.json());

app.get('/' ,(req , res)=>{
    res.send("this is try");
});

app.get('/add' ,(req , res)=>{
    res.send("this is add");
});
app.post('/add' , (req , res)=>{
    res.send(`sum is ${req.body.num1 + req.body.num2}`);
});
app.listen(3000);