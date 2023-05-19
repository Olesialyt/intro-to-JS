// The to-do list should allow users to create tasks with a title, description, and due date.

// The to-do list should allow users to set priorities for tasks and sort tasks by priority or due date.
// The to-do list should allow users to mark tasks as completed and remove completed tasks from the list.

const search = `<div class="input-group mb-3">
<button class="btn btn-outline-secondary" type="button" id="button-addon1">ok</button>
<input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>`;
const cardToDo = document.querySelector(".card-to-do");
const button = document.querySelector(".btn-add");
const cardToDoMain = document.querySelector(".card-to-do-main");

const handleDisplaying = () => {
  cardToDo.classList.remove("hidden");
};
cardToDoMain.addEventListener("click", handleDisplaying);

const handleAdding = () => {
  const toDoTitle = document.getElementById("to-do-title");
  toDoTitle.insertAdjacentHTML("afterend", search);
};
button.addEventListener("click", handleAdding);

class toDoList {
  constructor() {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
  add() {}
  sortByPriority() {}
  remove() {}
}
