let arr=[1,2,3,4,5];
let arr1=[6,7];

let arr2=[...arr,...arr1];
console.log(arr);
console.log(arr1);
console.log(arr2);

let obj={name:'Rakshit' ,age:20};
let obj1={...obj,id:1};
console.log("obj",obj);
console.log("obj1",obj1);

obj1.name='Agrim';
console.log('obj after',obj);
console.log('obj1 after',obj1);