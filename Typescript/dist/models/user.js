"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDb = void 0;
const addUserToDb = (userName, password, age) => {
    console.log(userName, password, age);
    return "Registration Done";
};
exports.addUserToDb = addUserToDb;
const updateUserData = (objUser) => {
    console.log(objUser.uname);
    return "Update Done";
};
exports.updateUserData = updateUserData;
