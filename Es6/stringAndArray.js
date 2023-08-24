let str='Datte kimi yowai mo!!!';
console.log(str.includes('Datte'));
console.log(str.startsWith('i'));
console.log(str.endsWith('!'));


let s="watashi saeko";
let arr= Array.from(s);
console.log(arr);

function check(){
    console.log(arguments);
    let a= Array.from(arguments);
    console.log(a);
}
check(1,2,3,4,5);

let b=['a','b','c','d'];
let keys=b.keys();
console.log(keys);

for(let e of keys){
   console.log(b[e]);
}

let arr1=[1,2,3,4,5];
let firstOdd=arr1.find(getOdd);
let idx=arr1.findIndex((value,i,ar)=>{
    return value%2!=0;
})

function getOdd(val,i,ar){
    return val%2==0;
}
console.log(firstOdd);
console.log(idx);