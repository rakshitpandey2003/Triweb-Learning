const addUserToDb=(userName:string,password:string,age:number)=>{
    console.log(userName,password,age);
    return "Registration Done";
}

//type lockedState="locked"|"unlocked";
interface User{
    id:number,
    uname:string,
    password:string,
    age:number,
    is_active:true|false,
    accountStatus:string | number
}

const updateUserData=(objUser:User):String=>{
    console.log(objUser.uname);
    return "Update Done";
}

export {addUserToDb,updateUserData};