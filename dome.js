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
var listItem=document.querySelectorAll('.list-group-item');
listItem[1].getElementsByClassName.color="green";
var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0; i<oddItems.length;i++){
    oddItems[i].style.backgroundColor='green';
}







