const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  text.innerHTML += `<p>I was pressed!</p>`;
});

btn.addEventListener("mouseover", function () {
  text.innerHTML += `<p>Mouse on me!</p>`;
});
btn.addEventListener("mouseout", function () {
  text.innerHTML += `<p>Mouse is not on me!</p>`;
});
