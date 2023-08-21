let x = 0o124;
let y = 0xA3;
let z = 0b101;
console.log(x,y,z);

x= 1e6;
console.log(x);

x=76;
if(isNaN(x)) console.log("not number");

console.log(Math.random());
console.log(Math.round(Math.random()*10,1));
console.log(Math.round(Math.random()*100,1));
num1 = 2323000012;
console.log(num1.toExponential());
console.log(Number(1.3334).toFixed(2));

let obj = new Date("2023 07 25 12:13:56");
console.log(obj.getMonth());
console.log(obj.getFullYear());
console.log(obj.getTime());
console.log(obj.getHours());

obj.setMonth(5);
console.log(obj.getMonth());

function getDigitalTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return hours + ':' + minutes + ':' +seconds;

}

console.log(getDigitalTime());