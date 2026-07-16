console.log("Conected with javaScript")

   let totalStudent = 0;

function validateForm(){
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const sId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const creCom= document.getElementById("creditCompleted").value;
    const dept = document.getElementById("department").value;

let isValid = true;


console.log(fName,lName,sId,email,creCom,dept);
if(!fName){
    document.getElementById("fNameError").innerHTML="Enter your first name.";
    isValid = false;
}else if(fName.length<4){
    document.getElementById("fNameError").innerHTML="First name have to at least 4 character.";
    isValid = false;
}else{
    document.getElementById("fNameError").innerHTML="";
}


if(!lName){
    document.getElementById("lNameError").innerHTML="Enter your last name.";
    isValid = false;
}else{
    document.getElementById("lNameError").innerHTML="";
    
}


if(!sId){
    document.getElementById("studentIdError").innerHTML="Enter your student id.";
    isValid = false;
}else if(!sId.includes("-")){
    document.getElementById("studentIdError").innerHTML="Student id must contain a hypen(-).";
    isValid = false;
 }else{
    document.getElementById("studentIdError").innerHTML="";
}


 if(!email){
    document.getElementById("emailError").innerHTML="Enter your student email.";
    isValid = false;
 }else if(!email.includes("@student.aiub.edu")){
   document.getElementById("emailError").innerHTML="Incorrect! Your email have to @student.aiub.edu";
   isValid = false;
 }else{
    document.getElementById("emailError").innerHTML="";
 }


 if(!creCom){
    document.getElementById("creditCompletedError").innerHTML="Enter your completed credit amount.";
    isValid = false;
 }else if(Number(creCom)>148){
    document.getElementById("creditCompletedError").innerHTML="Incorrect! Credit can't be more than 148.";
    isValid = false;
 }else{
    document.getElementById("creditCompletedError").innerHTML="";
 }

 if(!dept){
 document.getElementById("departmentError").innerHTML="Select your department.";
 isValid = false;

 }else{
   document.getElementById("departmentError").innerHTML="";
 }

 if(isValid){
const table = document.getElementById("studentTable");

const row = table.insertRow();

   row.insertCell(0).innerHTML=fName;
   row.insertCell(1).innerHTML=lName;
   row.insertCell(2).innerHTML = sId;
   row.insertCell(3).innerHTML = email;
   row.insertCell(4).innerHTML = creCom;
   row.insertCell(5).innerHTML = dept;

      totalStudent++;

      document.getElementById("studentCount").innerHTML=totalStudent;

document.querySelector("form").reset();
 }

return false;
}