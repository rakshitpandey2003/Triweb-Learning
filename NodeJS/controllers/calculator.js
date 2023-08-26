module.exports.add = (req , res)=>{
    res.send(`sum is ${req.body.num1 + req.body.num2}`);
};

module.exports.sub = (req , res)=>{
    res.send(`minus is ${req.body.num1 - req.body.num2}`);
};

module.exports.mul = (req , res)=>{
    res.send(`multiply is ${req.body.num1 * req.body.num2}`);
};

module.exports.div = (req , res)=>{
    res.send(`divide is ${req.body.num1 / req.body.num2}`);
};