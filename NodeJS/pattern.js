let rows=5;
let pattern='';
for(let i=1;i<=5;i++){
    let j=i;
    while(j--){
        pattern+='* ';
    }
    pattern+='\n';
}
console.log(pattern);

console.log('---------------');

pattern='';
for(let i=5;i>=1;i--){
    let j=i;
    while(j--){
        pattern+='* ';
    }
    pattern+='\n';
}
console.log(pattern);

console.log('---------------');

pattern='';
for(let i=1;i<=5;i++){
    let j=i;
    while(j--){
        pattern+='* ';
    }
    pattern+='\n';
}
for(let i=4;i>=1;i--){
    let j=i;
    while(j--){
        pattern+='* ';
    }
    pattern+='\n';
}
console.log(pattern);

console.log('---------------');

pattern='';
let isInc=true;
for(let i=1;i<=10;){
    let j=i;
    while(j--){
        pattern+='* ';
    }
    if(isInc){
        i+=3;
        isInc=false;
    }else{
        i--;
        isInc=true;
    }
    pattern+='\n';
}
console.log(pattern);