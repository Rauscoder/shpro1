let forms=document.getElementById('my-forms');


var div=document.getElementById('li-item');
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
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(`${name} ${email} ${phone} ${date} ${time}`));
    var btn=document.createElement('button');
    
    btn.id='btn1';
    btn.className="btn btn-danger btn-sm float-right delete ml-2";
    btn.appendChild(document.createTextNode('Delete'));
    li.appendChild(btn);
    //Adding Edit Button
    var btn2=document.createElement('button');
    
    btn2.id='btn2';
    btn2.className="btn btn-sm float-right btn-danger mr-2";
    btn2.appendChild(document.createTextNode('Edit'));
    li.appendChild(btn2);
    
    div.appendChild(li);

    i=localStorage.length+1;
    let obj=JSON.stringify(userDetails);

        localStorage.setItem('userDetails'+i,obj);
        
        console.log(localStorage.length);
       
   }
   li.addEventListener('click',removeEditItem);
   function removeEditItem(e){
    if(e.target.id==='btn1'){
   localStorage.removeItem('userDetails'+localStorage.length);
   div.removeChild(e.target.parentElement);
   console.log(e.target.id);
   }
   else if(e.target.id==='btn2'){
   var myobj=JSON.parse(localStorage.getItem('userDetails'+localStorage.length));
  document.getElementById('name').value=myobj.Name;
  document.getElementById('mail').value=myobj.Email;
  document.getElementById('phone').value=myobj.Phone;
  document.querySelector('.datee').value=myobj.dates;
  document.querySelector('.timee').value=myobj.Time;
  localStorage.removeItem('userDetails'+localStorage.length);
   div.removeChild(e.target.parentElement);
   }
  }

   
}