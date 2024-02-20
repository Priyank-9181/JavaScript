let taskArr = [];

window.onload = function () {
  const temp = localStorage.getItem("task");
  const value = JSON.parse(temp);
  console.log(value);
  value.forEach(function (v) {
    addTask(v);
  });
};

function localStorageUtility() {
  const stringObj = JSON.stringify(taskArr);
  localStorage.setItem("task", stringObj);
}

function Obj(id, taskName, isComplete) {
  this.id = id;
  this.taskName = taskName;
  this.isComplete = isComplete;
}

function createElement(node, child) {
  //   debugger;
  const element = document.createElement(node);

  if (child instanceof Array) {
    child.forEach(function (value) {
      element.appendChild(value);
    });
  } else if (typeof child === "string") {
    element.appendChild(child);
  }

  return element;
}

function addTask(value) {
  const taskDiv = document.getElementById("inner-container");
  const inputElement = document.getElementById("newTask");

  const newTask = inputElement.value;

  const para = document.createElement("p");
  const paraText = document.createTextNode(newTask.trim() || value.taskName);
  para.appendChild(paraText);

  const checkBox = createElement("input");
  checkBox.setAttribute("type", "checkbox");

  const button = createElement("button");
  button.innerHTML = "Delete";

  console.log(value);

  const taskList = createElement("div", [checkBox, para, button]);
  button.onclick = function () {
    // const ok = localStorage.getItem("task");
    // const local = JSON.parse(ok);
    // taskArr = taskArr.filter(function (v) {
    //   if (v.id !== value.id) {
    //     return taskArr.remove(v);
    //   }
    // });
    // console.log(taskArr);
    // localStorageUtility();
    taskDiv.removeChild(taskList);
  };

  taskArr.push(new Obj(new Date(), para.innerHTML, false));
  taskDiv.appendChild(taskList);
  localStorageUtility();
}
