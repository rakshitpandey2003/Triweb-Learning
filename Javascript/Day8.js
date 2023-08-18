let str = "'hello' this is \"it\"";
let str2 = '"hello" this is \'it\'';
console.log(str);
console.log(str2);

str = "\u007A";
str2 = '\x7A';
console.log(str);
console.log(str2);
if(str == str2) console.log("yes");

str = new String("this is str");
console.log(str , str.charAt(5));
console.log(str.indexOf("i"));//give first index
console.log(str.lastIndexOf("i"));
if(str.includes("i"))console.log("yes");

str = String("  a,b,c,x,d,f  ");
let arr = str.split(",");
console.log(arr);
console.log(str.slice(0,3));
console.log(str.substring(0,3));
str = str.replace("d","z");
str = str.trim();
console.log(str);

str = `this is good
${str2}`;
console.log(str);