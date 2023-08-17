const { parse } = require("@fortawesome/fontawesome-svg-core");

let nullvariable = null;
let undefinedvariable;
let str = "hello";
let obj = {};
let num = 352;

console.log(nullvariable , " " , typeof(nullvariable));
console.log(undefinedvariable , " " , typeof(undefinedvariable));
console.log(str , " " , typeof(str));
console.log(obj , " " , typeof(obj));
console.log(num , " " , typeof(num));
console.log(num + str);
console.log(num + parseInt("89"));
console.log(num - +("89"));
console.log(num - "89"); // same for multiply and divide also as minus 

str = 101;
console.log(parseInt(str,2));
str = "101";
console.log(parseInt(str,2));

obj = {name : "hello" , class : "2"};
console.log(obj);
console.log(obj.class);

obj = {" ": "HELLO" , "$" : "2"};
console.log(obj[" "]);
console.log(obj["$"]);

if(false || undefinedvariable || null || 0 || NaN || "" || NaN === false || NaN == false || 0 === false)
console.log("in true");
else console.log("in else");

let pick = 4;

switch(pick){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
    case 4:
        console.log(pick);
        break;
    default:
        console.log("number aint 1 to 4");
        break;
}

try{
// console.log(asdf);
if(str == "101"){ throw new Error("error hogya hh");}
console.log(str);
}catch(error){
console.log("error occured " + error);
}finally{
    console.log("this will run always");
}


