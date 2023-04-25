let forms=document.getElementById('my-forms');


var div=document.getElementById('li-item');
forms.addEventListener('submit',userInput);
var i=0;
var x;
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
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(`${name} ${email} ${phone} ${date} ${time}`));
    var btn=document.createElement('button');
    
    btn.id='btn1';
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('Delete'));
    x=btn;
    li.appendChild(btn);
    div.appendChild(li);

    i=localStorage.length+1;
    let obj=JSON.stringify(userDetails);

        localStorage.setItem('userDetails'+i,obj);
        
        console.log(localStorage.length);
       
   }
   btn.addEventListener('click',removeItem);
   function removeItem(e){
   localStorage.removeItem('userDetails'+localStorage.length);
   div.removeChild(e.target.parentElement);
   }
   
}