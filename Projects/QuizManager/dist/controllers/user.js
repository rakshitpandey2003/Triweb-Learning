"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res) => {
    console.log(req.body);
    res.send("Done");
};
exports.registerUser = registerUser;
