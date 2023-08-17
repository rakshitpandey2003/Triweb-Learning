let x = 12;
let y = x-10;
if(x>2 && y==2){
    console.log(x,y);
}
let z = x = y;
console.log(z);

//destructing
arr = [1,2,3,4];
const [a,b,c,d] = arr;
console.log(a,b,c,d);

z = y > x;
console.log(z);

console.log(3**3);

if(x<=12) z = x+y;
else z=x-y;
console.log(z);
console.log(x<=12 ? x+y: x-y);
x=(1,2,3,4);
console.log(x);

let obj = {name : "ricky" , mobile : "19"};
delete obj.mobile;
console.log(obj , typeof(obj));

function Get(){
    this.x = 4;
}
let v = new Get();
console.log(v);
v.x=12;
console.log(v);

if(5&1) console.log("last bit is 1");
else console.log("last bit aint 1");

