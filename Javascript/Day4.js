let a = 7;
console.log(sum);
sum(a);
function sum(num){
    console.log(`sum is ${++num}`);
}
console.log(a);

function sum2(obj){
    obj.name = "hi" + obj.name;
}
let obj = {name : "Akhil"}
sum2(obj);
console.log(obj.name);

function AddOne(arr){
    for(let i=0;i<arr.length;i++) arr[i] = arr[i]+1;
}
let arr1 = [0,1,2,3,4];
AddOne(arr1);
console.log(arr1);

const sum3 = function(num){
    console.log(21 + num);
}
sum3(56);

let decide = 0;
let result;
if(decide == 0) result = function(num1 , num2){
    console.log(num1 + num2);
}
else
result = function(num1 , num2){
    console.log(num1 - num2);
}
result(1,3);

// console.log(ads); //error when const;
const ads = function(){
    return 1;
}
console.log(ads); 
// console.log(ads()); //error because ad is undefined here
console.log(ads());

let ad;
console.log(ad); 
ad = function(){
    return 1;
}
console.log(ad); 
console.log(ads());

function sum4(n){
    if(n == 0) return;
    console.log(n);
    sum4(--n);
}
sum4(10);

const sum5 = function(n){
    if(n==0) return;
    console.log(n);
    arguments.callee(--n);
}
sum5(10);

function sq(n){
    sqe(n);
    function sqe(n){
        console.log(n*n);
    }
    sqe(n);
}
sq(5);