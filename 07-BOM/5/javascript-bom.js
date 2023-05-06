const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  alert("I was pressed!");
});

btn.addEventListener("mouseover", function () {
  alert("Mouse on me!");
});
btn.addEventListener("mouseout", function () {
  alert("Mouse is not on me!");
});
