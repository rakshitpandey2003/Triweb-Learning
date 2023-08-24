//array matching
let arr=[1,2,3,4];
let [a,b]=arr;
console.log('1',a);
console.log('2',b);
[b,a]=[a,b];
console.log(arr);
console.log('1',a);
console.log('2',b);

//Object matching
function get(){
    let student={
        sname:'Rick',
        age:20
    }
    return student;
}
var {sname,age} =get();
console.log({sname,age});

//deep matching
function getdata(){
    let obj={
        ename:'Raman',
        eage:17,
        location:{
            city:'Hell'
        }
    }
    return obj;
}
let{ename:myname,eage:myage,location:location}=getdata();
console.log({myname,myage,location});