function sum(...num){
    let sum=0;
    num.forEach((e)=>{
        sum=sum+e;
    })
    return sum;
}

console.log(sum(3,4));
console.log(sum(3));
console.log(sum(3,4,5,6,7));