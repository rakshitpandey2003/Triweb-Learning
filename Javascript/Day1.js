var text=document.getElementById('MyText');
var btn1=document.getElementById('Toggle');
var btn2=document.getElementById('AddName');
var btn3=document.getElementById('ImageChange');
 
btn1.onclick = function(){
    var c = text.textContent;
    if(c == "I am Practising Day 1 of Javascript") text.textContent = "I am a Web Developer";
    else text.textContent = "I am Practising Day 1 of Javascript";
}

btn2.onclick = function(){
    var name = prompt("Namae wa?");
    if(name.length != 0)
        document.getElementById("MyName").textContent = "Watashino Namaeha " + name;
    else alert("Fakkuofu!!");
}

btn3.onclick = function(){
    var img = document.getElementById("Image");
    if(img.getAttribute("src") === "Blue.jpeg") img.setAttribute("src","Red.jpeg");
    else img.setAttribute("src","Blue.jpeg");
}