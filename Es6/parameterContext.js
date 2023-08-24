function print([name, age]) {
    console.log('name', name);
    console.log('age', age);
}
print(['Rick', 20]);

function print1({ name, age }) {
    console.log('name', name);
    console.log('age', age);
}
print1({ name: 'Raman', age: 17 });

function print2({ name: ename, age: eage }) {
    console.log('name', ename);
    console.log('age', eage);
}
print2({ name: 'Rohit', age: 7 });