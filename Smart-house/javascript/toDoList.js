import { onsideCollection } from "./main.js";

const cardToDo = $(".card-to-do-onside");
const cardToDoMain = $(".card-to-do.main");
const form = $("form");
const list = $(".list-group");

export const handleDisplayingToDo = () => {
  onsideCollection();
  cardToDo.removeClass("hidden");
};
cardToDoMain.on("click", handleDisplayingToDo);

class ToDoList {
  static tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  static addTasks(taskInstance) {
    ToDoList.tasks.push(taskInstance);
  }

  constructor(title, task, dueDate) {
    this.title = title;
    this.task = task;
    this.isChecked = false;
    this.dueDate = dueDate;
    this.id = new Date().getTime();
    ToDoList.addTasks(this);
    ToDoList.createTaskDom(this);
  }

  static getFromLocalStorage() {
    ToDoList.tasks.forEach(el => {
      ToDoList.createTaskDom(el);
    });
  }

  static createTaskDom({ title, dueDate, task, id, isChecked }) {
    list.append(`<a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${title}</h5>
      <small>due ${dueDate}</small>
    </div>
    <div class="d-flex w-100 justify-content-between"> 
      <label class="mb-1">${task}</label>
      <input class="me-1" type="checkbox" value="" data-id="${id}" ${
      isChecked ? "checked" : ""
    } />
    </div>
  </a>`);
    $("#theLastTask").html("");
    $("#theLastTask").html(`${title}: <small>${task}</small>`);
  }
}

form.on("submit", e => {
  e.preventDefault();

  const title = form.find("input[name='inputTitle']").val();
  const task = form.find("input[name='inputTask']").val();
  const dueDate = form.find("input[name='inputDue']").val();

  if (!(title && task && dueDate) || new Date(dueDate) < Date.now()) {
    return;
  } else if (!(/^.{0,100}$/.test(task) || /^.{0,10}$/.test(title))) {
    $("#input-warning").html("* The input is too long.");
    return;
  }
  new ToDoList(title, task, dueDate);

  localStorage.setItem("tasks", JSON.stringify(ToDoList.tasks));
});

if (localStorage.getItem("tasks")) {
  ToDoList.getFromLocalStorage();
}

let checkboxes = $("input[type='checkbox']");

//????????????
checkboxes.on("change", function () {
  if ($(this).is(":checked")) {
    const taskId = $(this).data("id");
    ToDoList.tasks.forEach(task => {
      if (task.id === taskId) {
        task.isChecked = true;
      }
    });
  } else {
    const taskId = $(this).data("id");
    ToDoList.tasks.forEach(task => {
      if (task.id === taskId) {
        task.isChecked = false;
      }
    });
  }

  localStorage.setItem("tasks", JSON.stringify(ToDoList.tasks));
});

// ищу в локал сторадж и по id меняю
