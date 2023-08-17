function sq(n){
    sqe(n);
    function sqe(n){
        console.log(n*n);
    }
    sqe(n);
}
sq(5);

function sum1(m){
    return function(n){
        return m+n;
    }
}
let x = sum1(67);
console.log(x(33));
//in case of local and global having same name 
// ,local gets preference

function sum(){
    let sum =0;
    //for(let i=0;i<arguments.length;i++) sum+= arguments[i];
    let arr = Array.from(arguments);
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8));
console.log(sum(1,2,345));

const sqr = num => num*num; //arrow represent function , 
//here it tells what will be returned
console.log(sqr(43));

let a = "((1+2*65)/2)+35*572/31";
console.log(eval(a));
a = "1.1";
console.log(parseFloat(a)+2);

function add(num1 , num2=43){
    console.log(num1+num2);
}
add(21);
add(21,4);