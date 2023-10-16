let student = {
    sname: "Rakshit",
    friend: "Aastha",
    class: "Btech",
    mobile: 1234
}
console.log(student);

// Convert object to string
let stringFromObject = JSON.stringify(student);

console.log(stringFromObject);
console.log(stringFromObject.sname);

//Convert string to object
let objectFromString = JSON.parse(stringFromObject);
console.log(objectFromString);
console.log(objectFromString.sname);