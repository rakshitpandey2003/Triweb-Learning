"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const connectionstring = "mongodb+srv://Myuser:raklovaas@mycluster.ywsim2g.mongodb.net/quizdb?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.use("/user", user_1.default);
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(connectionstring, mongooseOptions)
    .then(() => {
    app.listen(3000, () => {
        console.log('Server Connected');
    });
})
    .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
