for(let i=1;i<10;i++) console.log(i);

console.log("next loop now ");
let i=1;
while(i<10) console.log(i++);

console.log("next loop now ");
i=0
do {
    console.log(i++);
} while (i>0 && i<10);

i=0;
console.log("next loop now ");
while(true){
    i++;
    if(i <= 5)continue;
    console.log(i);
    if(i==10) break;
}

console.log("next loop now ");
outer:
for(let i=2;i<=8;i+=3){
    console.log("table of" , i, "is :");
    for(let j=1;j<=10;j++){console.log(i , " * " , j ," = ",i*j); if(i==5 && j==10) break outer;}
}

obj = {
    name:"Bharat",
    Dharam:"Sanatan"
}
for(const key in obj) console.log(`${key} of Country is ${obj[key]}`);

let arr = [10,20,21,34];
for(let i of arr) console.log(i);

console.log("next loop now ");
arr.forEach((i)=>{console.log(i)});