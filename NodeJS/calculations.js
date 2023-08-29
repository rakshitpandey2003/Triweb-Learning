let calc=4;
let num1=10,num2=5,res;

if(calc==1){
    res=num1+num2;
}else if(calc==2){
    res=num1-num2;
}else if(calc==3){
    res=num1*num2;
}else if(calc==4){
    if(num2!=0){
        res=num1/num2;
    }else{
        throw new Error("Divide by zero not allowed!");
    }
}
console.log("result = ",res)