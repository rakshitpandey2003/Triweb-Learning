let key="key";

function ret(){
    return 'true';
}

let obj={
    name:'Rick',
    age:20,
    [key+2+ret()]:'yes'
}

console.log(obj);