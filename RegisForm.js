let forms=document.getElementById('my-forms');



forms.addEventListener('submit',userInput);
var i=0;
function userInput(e){
    e.preventDefault();
  var name=document.getElementById('name').value;
  var email=document.getElementById('mail').value;
  var phone=document.getElementById('phone').value;
  var date=document.querySelector('.datee').value;
  var time=document.querySelector('.timee').value;
    console.log(document.typeOf);
   if(name===''||email===''||phone==''||date===''||time===''){
    alert("please enter all fields values");
   }
   else{
    //local storage for storing object of user detais
  var userDetails={
    Name:document.getElementById('name').value,
    Email:document.getElementById('mail').value,
    Phone:document.getElementById('phone').value,
    dates:document.querySelector('.datee').value,
    Time:time,
    }
    i=i+1;
    let obj=JSON.stringify(userDetails);

        localStorage.setItem('userDetails'+i,obj);
        
        
       
   }
   
}