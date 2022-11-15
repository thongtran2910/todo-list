var addBtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delBtn = document.getElementById("delBtn");
var taskList = document.querySelectorAll("ul div");

function createListElement() {
  var div = document.createElement("div");
  var li = document.createElement("li");
  var btn = document.createElement("button");
  ul.appendChild(div);
  div.setAttribute("id", "taskContent");
  div.append(li, btn);
  li.classList.add("task");
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  btn.appendChild(document.createTextNode("x"));
  btn.setAttribute("id", "delBtn");
  btn.addEventListener("click", removeParent);
  li.onclick = function (e) {
    var target = e.target;
    target.classList.toggle("done");
  };
}

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

addBtn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
delBtn.addEventListener("click", removeParent);

var li = document.querySelector("li");
li.onclick = function (event) {
  var target = event.target;
  target.classList.toggle("done");
};

function removeParent(event) {
  event.target.parentNode.remove();
}
