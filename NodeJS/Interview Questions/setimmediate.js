let a = 1;
let b = 2;
function addTwoNumer(n1,n2){
    console.log(n1+n2)
}

setImmediate(()=>{
    addTwoNumer(a,b)
});
console.log("Inside event loop 1");
