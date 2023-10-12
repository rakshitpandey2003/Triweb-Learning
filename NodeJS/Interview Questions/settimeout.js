function add(callby,n1,n2){
    console.log(callby,":",n1+n2);
}
setImmediate(()=>{
    add("SetImmediate",2,3);
})
setTimeout(() => {
    add("SetTimeout",3,4);
}, 0);
add("Direct",1,2);