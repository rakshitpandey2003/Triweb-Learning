"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    const userName = "Rick";
    const password = "password";
    const age = 18;
    const result = (0, user_1.addUserToDb)(userName, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const updateUser = (req, res) => {
    let xstate = "locked";
    const myUser = {
        id: 1,
        uname: "Rick",
        password: "pass",
        age: 20,
        is_active: false,
        accountStatus: 4
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.updateUser = updateUser;
