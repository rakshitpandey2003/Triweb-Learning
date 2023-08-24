const obj = { name: 'Rick', age: 20 };
console.log("before", obj);

//obj={name:'Raman', age:17};  //error

obj.name = 'Raman';
obj.age = 17;
console.log('After', obj);