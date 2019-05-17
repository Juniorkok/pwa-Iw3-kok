import { openDB } from '/node_modules/idb/build/esm/index.js';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)


const db = await openDB('app-store', 1, {
    upgrade(db) {
        db.createObjectStore('todolist');
    }
});

function addTodoElement() {
    var element = document.createElement("li");
    var inputValue = document.getElementById("textField").value;
    var inputText = document.createTextNode(inputValue);

    element.appendChild(inputText);
    if (inputValue != '') {
      document.getElementById("todo_list").appendChild(element);
    }
    document.getElementById("textField").value = "";
  
    var spanDelete = document.createElement("SPAN");
    var textDelete = document.createTextNode("delete");

    spanDelete.className = "delete";
    spanDelete.appendChild(textDelete);
    element.appendChild(spanDelete);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    /*

    db.get('todo')
    .push({ id: 5, title: ''})
    .write();

    */
}