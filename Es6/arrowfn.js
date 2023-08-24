const xyz = ()=> {
    console.log('xyz',this);
}

console.log('outer',this);
xyz();

let arr=[1,2,3,4];
const mp=arr.map(e=>e*2);
console.log(mp);


const retObj =(uname, age)=>({uname:uname, age:age})
console.log(retObj('aastha',20));

const sum = (num1,num2)=>(num1+num2);
console.log(sum(3,4));

arr.forEach((e)=> console.log(e,' '));