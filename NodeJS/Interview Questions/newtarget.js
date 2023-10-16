function demoNewTarget(x){
    if(new.target == undefined){
    console.log("No");
    }else{
    this.x = x;
    console.log("Creating an object")
    }
    console.log("Inside the function");
}
    demoNewTarget (5);