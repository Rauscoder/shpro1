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
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor="yellow";
//items.style.backgroundColor="#f4f4f4";
for(var i=0; i<items.length;i++){
  items[i].style.backgroundColor="#f4f4f4";
  items[i].style.fontWeight='bold';  
}
items[2].style.backgroundColor="green";

