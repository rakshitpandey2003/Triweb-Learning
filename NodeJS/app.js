const express = require('express');
const calculatorRouter = require('./router/calculator');
const app = express();

app.use(express.json());

app.get('/' ,(req , res)=>{
    res.send("this is try");
});

app.use('/calculator',calculatorRouter);
app.listen(3000);