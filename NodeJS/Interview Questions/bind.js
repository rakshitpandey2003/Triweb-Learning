let student2 = {
    sname: "Aastha",
    mobile: 124111
}
let student = {
    sname: "Rakshit",
    mobile: 8973546,

    getName: function(){
        console.log(this.sname);
    }
}
let sn =  student.getName.bind(student);
setTimeout(sn,1000) 
let st2 = student.getName.bind(student2);
setTimeout(st2,1000);