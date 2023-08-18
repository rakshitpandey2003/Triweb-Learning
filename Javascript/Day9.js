let str = 'hii!!'
let reg = new RegExp("hi")
console.log(reg.test(str))

reg = /\w/g
console.log(str.search(reg))

reg = /i/g;
console.log(str.replace(reg,"hi"));

let arr = [1,2,3,4,5,6,7,8];
arr.length = 5;// we can increase also that will result in empty elements;
console.log(arr);
let arr2 = [6,7,8,9];
console.log(arr.concat(arr2));//we can do same in strings also 
console.log(arr.join(" "));
console.log(arr.push(6));
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.slice(2,4));
// console.log(arr.splice(2,3));
// console.log(arr);

console.log(arr = arr.map(element=>element*element));
console.log(arr = arr.filter(element => element%2==0));
console.log(arr.every(e=>e%2==0));
console.log(arr.some(e=>e%2!==0));
console.log(arr.reduce((a,c)=>a*c,1));
arr2 = [2,3];
let arr3 = [2,1];
let arr4 = [arr,arr2,arr3];
console.log(arr4);
console.log(arr4[0] , arr4[1][1]);



