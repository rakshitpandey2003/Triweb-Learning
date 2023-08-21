function Validate(){
    let Fname = document.forms['MyForm']['fname'].value;
    let Lname = document.forms['MyForm']['lname'].value;
    let Email = document.forms['MyForm']['email'].value;
    let Contact = document.forms['MyForm']['contact'].value;
    let Age = document.forms['MyForm']['age'].value;   
    let Gender = document.forms['MyForm']['gender'].value; 
    let Date = document.forms['MyForm']['date'].value;
    if(Fname == "" || Lname == "") {alert("Name can't be empty"); return false;}
    for (const i of Fname) {
        if(!isNaN(i)) {alert("Name can't contain number"); return false;}
    }
    for (const i of Lname) {
        if(!isNaN(i)) {alert("Name can't contain number"); return false;}
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!Email.match(mailformat)) {alert("Wrong email"); return false;}
    if(Contact.length != 10) {alert("Contact number is invalid"); return false;}
    if(Age < 18){alert("Age is less than 18"); return false;}
    if(Gender == ""){alert("Gender can't be empty"); return false;}
    if(Date == ""){
        alert("Date of Birth can't be empty");
        return false;
    }
}