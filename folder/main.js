const form = document.querySelector("form");
const list = document.querySelector(".list-group");
///checkbox ?????????????????????????
let checkboxes = document.querySelectorAll("input[type='checkbox']");

console.log(checkboxes);

checkboxes.forEach(el => {
  el.addEventListener("change", function () {
    if (this.checked) {
      console.log("Checkbox is checked..");
    } else {
      console.log("Checkbox is not checked..");
    }
  });
});
///checkbox ?????????????????????????
class ToDoList {
  static count = 0;
  static tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // dynamical creating array
  static addTasks(instance) {
    ToDoList.tasks.push(instance); ///this?
  }
  constructor(title, task, isChecked /* = false*/, dueDate) {
    this._title = title;
    this._task = task;
    this._isChecked = isChecked; ///false??
    this._dueDate = dueDate;
    this._id = new Date().getTime(); //генерируем для каждой task новый id => время в milliseconds
    ToDoList.addTasks(this);
  }

  static getFromLocalStorage() {
    //looping through each object in static array tasks and with destructuring passing each parameter of an object to class
    ToDoList.tasks.map(({ title, task, isChecked, dueDate }) => {
      new ToDoList(title, task, isChecked, dueDate).createTaskDom();
    });
  }
  set isChecked(value) {
    this._isChecked = value;
  }
  createTaskDom() {
    const el = `<a href="#"
    class="list-group-item list-group-item-action" id="item-${ToDoList.count}"
    aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${this._title}</h5>
      <small>due ${this._dueDate}</small>
    </div>
    <div class="d-flex w-100 justify-content-between">
      <label class="mb-1" for="checkbox-${ToDoList.count}"
        >${this._task}</label>
      <input
        class="me-1"
        type="checkbox"
        value=""
        id="checkbox-${ToDoList.count}" ${this._isChecked ? "checked" : ""} />
    </div>
  </a>`; /////?/////?/////?/////?/////?
    list.insertAdjacentHTML("beforeend", el);
    ToDoList.count++; ///увеличить static id на один
  }
}

if (localStorage.getItem("tasks")) {
  ToDoList.getFromLocalStorage();
}

//checkbox

form.addEventListener("submit", e => {
  e.preventDefault();

  const title = form.elements["inputTitle"].value;
  const task = form.elements["inputTask"].value;
  const due = form.elements["inputDue"].value;

  //check if any of inputs is empty or if date input is before today => return if any is true
  if (
    !(title && task && due) ||
    new Date(form.elements["inputDue"].value) < Date.now()
  ) {
    return;
  } else if (!(/^.{0,100}$/.test(task) || /^.{0,10}$/.test(title))) {
    document.getElementById("input-warning").innerHTML =
      "* The input is too long.";
    return;
  }
  const newTask = new ToDoList(title, task, false, due);

  localStorage.setItem("tasks", JSON.stringify(ToDoList.tasks));
  newTask.createTaskDom();
});
