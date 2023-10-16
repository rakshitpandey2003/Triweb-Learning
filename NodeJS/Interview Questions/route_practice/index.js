const express = require("express");
const userRoutes=require("./routers/user");
const app = express();

app.use('/user', userRoutes);

app.listen (3000);