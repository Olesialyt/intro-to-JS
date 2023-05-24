const form = $("form");
export class ToDoList {
  static tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  static addTasks(taskInstance) {
    //push to array instance
    ToDoList.tasks.push(taskInstance);
  }

  constructor(title, task, dueDate) {
    this.title = title;
    this.task = task;
    this.isChecked = false;
    this.dueDate = dueDate;
    this.id = new Date().getTime();
    ToDoList.addTasks(this); //instance to push
    ToDoList.createTaskDom(this);
  }

  static getFromLocalStorage() {
    ToDoList.tasks.forEach(el => {
      ToDoList.createTaskDom(el);
    });
  }

  static createTaskDom({ title, dueDate, task, id, isChecked }) {
    $("#list-group")
      .append(`<a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${title}</h5>
      <small>due ${dueDate}</small>
    </div>
    <div class="d-flex w-100 justify-content-between"> 
      <label class="mb-1">${task}</label>
      <div>
      <i class="delete-task bi bi-x-lg" id="${id}"></i>
      <input class="me-1" type="checkbox" value="" data-id="${id}" ${
      isChecked ? "checked" : ""
    } />
      </div>
    </div>
  </a>`);
    $("#theLastTask").html("");
    $("#theLastTask").html(
      `${title}: <small>${task}</small> <br> <i>due ${dueDate}</i>`
    );
  }
}

form.on("submit", e => {
  e.preventDefault();

  const title = form.find("#inputTitle").val();
  const task = form.find("#inputTask").val();
  const dueDate = form.find("#inputDue").val();

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

/// тут видаляэться =>

const handleDelete = e => {
  const taskId = parseInt(e.target.id);
  //порiвнюэ id з element id на який клiкнули
  ToDoList.tasks = ToDoList.tasks.filter(el => el.id !== taskId);
  // видаляэ тег элемент з классом list-group-item до якого крiпляться всi таски
  $(".list-group-item").remove();

  //loop через них i вивод на сторiнку
  ToDoList.tasks.forEach(el => {
    ToDoList.createTaskDom(el);
  });

  // видалити в localStorage минулi таски
  localStorage.removeItem("tasks");
  //додати новi
  localStorage.setItem("tasks", JSON.stringify(ToDoList.tasks));
};

if ($(".delete-task")) {
  $(".delete-task").on("click", handleDelete);
}

// let checkboxes = $("input[type='checkbox']");

//????????????
// checkboxes.on("change", function () {
//   if ($(this).is(":checked")) {
//     const taskId = $(this).data("id");
//     ToDoList.tasks.forEach(task => {
//       if (task.id === taskId) {
//         task.isChecked = true;
//       }
//     });
//   } else {
//     const taskId = $(this).data("id");
//     ToDoList.tasks.forEach(task => {
//       if (task.id === taskId) {
//         task.isChecked = false;
//       }
//     });
//   }

//   localStorage.setItem("tasks", JSON.stringify(ToDoList.tasks));
// });

// ищу в локал сторадж и по id меняю
