import { Request, Response } from 'express';

import {addUserToDb,updateUserData} from '../models/user';

const registerUser=(req:Request,res:Response)=>{
    const userName:string="Aastha";
    const password:string="password";
    const age:number=18;

    const result=addUserToDb(userName,password,age);
    res.send(result);
}

const checkTypesAndInterface=(req:Request,res:Response)=>{
    interface Point{
        x:number,
        y:number
    }

    let x:Point={x:1, y:4};
    console.log(x);

    //type status=true|false;
    type lockedState="locked"|"unlocked";
    let xstate:lockedState="locked";

    const myUser={
        id:1,
        uname:"Rick",
        password:"pass",
        age:20,
        is_active:false,
        accountStatus:4
    }
    const result=updateUserData(myUser);
    res.send(result);
}

interface Student{
    name:String,
    age:Number
}

interface Student{
    level:String
}

const mergeInterface=(req:Request,res:Response)=>{
    const aastha:Student={name:"Rick", age:22, level:"BTech"};
}

class Employee{
    ename:String;
    salary:Number;
    constructor(name:String,salary:Number){
        this.ename=name;
        this.salary=salary;
    }
}

class EmployeeWithAge extends Employee{
    age:Number=0;
}

const relatedToClass=(req:Request,res:Response)=>{
    const agrim=new EmployeeWithAge("Agrim",200000);
    agrim.salary=300000;
    agrim.age=28;
}

export {registerUser,checkTypesAndInterface};