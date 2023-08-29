class animal{
    legs(){
        console.log("I have 4 legs!");
    }

    face(){
        console.log("I am cute!")
    }
}

class cat extends animal{
    sound(){
        console.log("MEOWW...")
    }
}

const c=new cat(); 
c.sound();  
c.face();
c.legs();