const size = document.getElementById("size");
size.innerHTML = `Height: ${window.innerHeight}, Width: ${window.innerWidth}`;

window.addEventListener("resize", () => {
  size.innerHTML = `Height: ${window.innerHeight}, Width: ${window.innerWidth}`;
});
