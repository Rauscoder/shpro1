let forms=document.getElementById('my-forms');



forms.addEventListener('submit',userInput);
function userInput(e){
    e.preventDefault();
    let Name=document.getElementById('name').value;
    let email=document.getElementById('mail').value;
    let phone=document.getElementById('phone').value;
    let date=document.querySelector('.datee').value;
    let time=document.querySelector('.timee').value;
    console.log(document.typeOf);
   if(Name===''||email===''||phone==''||date===''||time===''){
    alert("please enter all fields values");
   }
   else{
        localStorage.setItem('Name',Name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Phone',phone);
        localStorage.setItem('Date',date);
        localStorage.setItem('Time',time);
   }
   
}