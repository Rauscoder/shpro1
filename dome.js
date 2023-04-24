// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10].textcontent);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
//Get element by Id//
//console.log(document.getElementById('header-title'));
 //var headert=document.getElementById('header-title');
 //var header =document.getElementById('main-header');
//  console.log(headert.innerText);
//   //headert.textContent="hello";
//   //headert.innerText="goodbye";
//   //headert.innerHTML='<h3>hello</h3>';
//   header.style.borderBottom="solid 3px #000 ";
//   var addItems=document.getElementsByClassName("title");
//   addItems[0].style.fontWeight="bold";
//   addItems[0].style.color="green";
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor="yellow";
//items.style.backgroundColor="#f4f4f4";
// for(var i=0; i<items.length;i++){
//   items[i].style.backgroundColor="#f4f4f4";
//   items[i].style.fontWeight='bold';  
// }
// items[2].style.backgroundColor="green";
//Get element by tagname//
// var li=document.getElementsByTagName('li');
//  console.log(li);
//  console.log(li[1]);
//  li[4].textContent='Hello 2';
//  li[4].style.fontWeight='bold';
//  li[4].style.backgroundColor="yellow";
// //li.style.backgroundColor="#f4f4f4";
//  for(var i=0; i<li.length;i++){
//   li[i].style.backgroundColor="#f4f4f4";
//   li[i].style.fontWeight='bold';  
//  }
//querySelector and querySelectorAll//
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello world';
// var submit=document.querySelector('input[type="submit"]');
// submit.value='send';
// var item=document.querySelector('.list-group-item');
// item.style.color="red";
// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';
// secondItem.style.backgroundColor='green';
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';
// var listItem=document.querySelectorAll('.list-group-item');
// listItem[1].getElementsByClassName.color="green";
// var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(var i=0; i<oddItems.length;i++){
//     oddItems[i].style.backgroundColor='green';
// }
//Trasversing the parentnode,childnode and siblingnode//
// var itemList=document.querySelector('#items');
// parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="yellow";
// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// firstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello 1";
// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);
// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// createElement
// create a div
// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','Hello Div');
// create textnode
// var newDivText=document.createTextNode('Hello World');
// Add text to div
// newDiv.appendChild(newDivText);
// add Hello world before itemlister
// var container=document.querySelector('header .container');
// console.log(container);
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize='30px';
// console.log(newDiv);
// add Hello world before item 1
// var ulList=document.querySelector('ul ');
// console.log(ulList);
// var item1=document.querySelector('ul li:nth-child(1)');
// console.log(item1);
// ulList.insertBefore(newDiv,item1);
//Delete and Edit button functionality
var forms=document.getElementById('addForm');

forms.addEventListener('submit',addItem);
var itemList=document.getElementById('items');
console.log(itemList);
function addItem(e){
    e.preventDefault();
    console.log(e.target);
    var input=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    var text=document.createTextNode(input);
    li.appendChild(text);
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right delete ';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    console.log(li);
     var delBtn=document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete mr-2';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    itemList.appendChild(li);
    }
    itemList.addEventListener('click',removeItem);
    
    function removeItem(e){
        console.log(e.target);
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
              var list=e.target.parentElement;
              itemList.removeChild(list);  
            }
        }
    }









