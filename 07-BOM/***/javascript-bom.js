const dino = document.getElementById("dino");

window.addEventListener("load", () => {
  dino.style.position = "absolute";
  dino.style.top = `40%`;
  dino.style.left = `50%`;
});

window.addEventListener("keyup", e => {
  switch (e.key) {
    case "ArrowLeft":
      dino.style.left = `${parseInt(dino.style.left) - 10}px`;
      break;
    case "ArrowRight":
      dino.style.left = `${parseInt(dino.style.left) + 10}px`;
      break;
    case "ArrowUp":
      dino.style.top = `${parseInt(dino.style.top) - 10}px`;
      break;
    case "ArrowDown":
      dino.style.top = `${parseInt(dino.style.top) + 10}px`;
      break;
  }
});
