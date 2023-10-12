let arr=[1,2,3,4,5,6,7,8];
let newArr2 = []
for(let i=0; i<arr.length; i++){
newArr2.push(arr[i]*2);
}
console.log(newArr2);
console.log("using map()");
let newArrM = arr.map((element)=> element*2);
console.log(newArrM);