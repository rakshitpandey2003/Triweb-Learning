let map = new Map();
map.set("name","Rick");
map.set("aadress" , "hell");
map.set(1,"this");
console.log(map , map.size ,map.get("name") , map.get(1));//length wont work

//weak object
let name1 = {name : "rick"};
let map1 = {[name1]: "hlo"};
name1 = "my";
name2 = {n : "y"};
let name54 = {n : "y"};
let v= '12';
name54.v = "123";
name54[v] = '123';
console.log(name54);
console.log(name2.n , name2['n']);
console.log(map1 , map1[name1]); // gives undefined
console.log(map1 , map1[name2]); //a different can access value also

name1 = {name : "rick"};
map.set(name1 , "hii");
map.set(name2 , "hiii");
console.log(map , map.get(name1));

let a = new Set();
a.add(12);
a.add(13);
a.add(14);
a.add(15);
a.delete(15);
console.log(a , a.has(14));
for (const iterator of a) console.log(iterator);

let arr = [1,2,3,4,5,2,3,4,5];
console.log( a = new Set(arr)); 
a.delete(5);
arr = Array.from(a); // can also do arr = [...a]
arr.push(5);
console.log(arr);

for(let key in name54) console.log(key , name54[key]);

function emp(name  , des){
    this.name = name;
    this.des = des;
}
let obj = new emp("rick" , "manager");
console.log(obj);
//object.create
let ojb = {
    age :'30',
    get a(){return this.age;},
    set b(ag){this.age = ag;}
}
console.log(ojb.a);
obj.b = 40;
console.log(ojb.a);

delete name54.v;
console.log(name54);