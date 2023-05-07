const size = document.getElementById("size");
size.innerHTML = `Height: ${window.innerHeight}, Width: ${window.innerWidth}`;

window.addEventListener("resize", () => {
  size.innerHTML = `Height: ${window.innerHeight}, Width: ${window.innerWidth}`;
});


// Придумайте просту гру з використанням цих спрайтів. 
// На 2-3 дії користувача. (кліки миші, натискання клавіш).
// Наприклад:
// - вибір персонажа
// - стрибок