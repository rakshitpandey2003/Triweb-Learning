const express = require('express');
const userRoute = require("./router/user");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("this is try");
});
app.use('/user',userRoute);
app.listen(3001);