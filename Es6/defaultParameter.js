//default parameter
function sum(num1,num2=1){
    return num1+num2;
}
console.log(sum(3,4));
//console.log(sum(3));   //NaN error without deafault para
console.log(sum(3));