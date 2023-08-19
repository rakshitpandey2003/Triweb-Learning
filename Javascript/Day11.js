function emp(mobile){
    this.department = "None";
    this.mobile = mobile;
}

function manager(name){
    emp.call(this);
    this.name = name;
}
manager.prototype = Object.create(emp.prototype);
manager.prototype.constructor = manager;


let a;
console.log( a = new manager("abc"));
console.log(a.__proto__);

function validate(name){
    return new Promise((resolve , reject)=>{
        if(name == "abcd") resolve({result : "yes"});
        else reject("not");
    });
}
validate("abcd")
.then((result)=>{return result.result;})
.then((result)=>{console.log(result);})
.catch((err)=>{console.log(err)});