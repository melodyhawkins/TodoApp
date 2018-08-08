let data = {
  todo: [],
  completed: []
};


//Remove, complete, and edit icons in font awesome format

let removeSVG = '<svg aria-hidden="true" data-prefix="fal" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M336 64l-33.6-44.8C293.3 7.1 279.1 0 264 0h-80c-15.1 0-29.3 7.1-38.4 19.2L112 64H24C10.7 64 0 74.7 0 88v2c0 3.3 2.7 6 6 6h26v368c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V96h26c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24h-88zM184 32h80c5 0 9.8 2.4 12.8 6.4L296 64H152l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm200 432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V96h320v368zm-176-44V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm-80 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm160 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12z"></path></svg>';

let completeSVG = '<svg aria-hidden="true" data-prefix="fal" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z"></path></svg>';

let editSVG = '<svg aria-hidden="true" data-prefix="fal" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z"></path></svg>';

//User clicked on add button
//If there is any text inside item field, add that text to the todo list.
document.getElementById('add').addEventListener('click', function(){
  let value = document.getElementById('item').value;
  // console.log(value);
  if(value) {
    addItemTodo(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
  }
});

function removeItem(){
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = item.innerText;

  if(id === 'todo'){ 
    data.todo.splice(data.todo.indexOf(value), 1);
  } else{
     data.completed.splice(data.todo.indexOf(value), 1);
  }

  parent.removeChild(item);
};

function completeItem(){
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = item.innerText;

 if(id === 'todo'){ 
  data.todo.splice(data.todo.indexOf(value), 1);
  data.completed.push(value);
 }else{
   data.completed.splice(data.todo.indexOf(value), 1);
   data.todo.push(value);
 }

//check if item should be added to completed or readded to todo
  let target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
  
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
};

//Functions to Edit Todo List Items
function refreshArray() {
  //clear array
  let tab = [], index;
  tab.length = 0;
  let items = document.querySelectorAll(".list-item");
  //fill array
  for(let i=0; i<items.length; i++){
    tab.push(items[i].innerHTML);
  }
};

function editItem(){
  let tab = [], index;
  let items = document.querySelectorAll(".list-item");
  index = tab.indexOf(this.innerHTML);
  let inputText = document.getElementById("item");

  if('contentEditable' === true){
    edit.addEventListener('click', editItem);
  }
    refreshArray();
};

//Adds new items to the todo list
function addItemTodo(text) {
  let list = document.getElementById('todo');

  let item = document.createElement('li');
  item.classList.add('list-item', 'mt-5');
  item.setAttribute('contentEditable', true);
  item.innerText = text;

  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG

  //Add click event for removing item 
  remove.addEventListener('click', removeItem);

  let complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  //Add click event for completing items
  complete.addEventListener('click', completeItem);

  let edit = document.createElement ('button');
  edit.classList.add('edit');
  edit.innerHTML = editSVG;

  //Add click event for editing items
  edit.addEventListener('click', editItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  buttons.appendChild(edit);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
};