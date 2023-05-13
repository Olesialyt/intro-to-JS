const dino = document.getElementById("dino");
let step = 0;

window.addEventListener("load", () => {
  dino.style.position = "absolute";
  dino.style.top = `300px`;
  dino.style.left = `400px`;
});

window.addEventListener("keyup", e => {
  step++;
  switch (e.key) {
    case "ArrowLeft":
      if (step % 2 == 0) {
        document.getElementById("dino_photo").src = "images/dino_run1.png";
      } else {
        document.getElementById("dino_photo").src = "images/dino_run2.png";
      }
      dino.style.left = `${parseInt(dino.style.left) - 30}px`;
      break;
    case "ArrowRight":
      if (step % 2 == 0) {
        document.getElementById("dino_photo").src = "images/dino_run1.png";
      } else {
        document.getElementById("dino_photo").src = "images/dino_run2.png";
      }
      dino.style.left = `${parseInt(dino.style.left) + 30}px`;
      break;
    case "ArrowUp":
      if (step % 2 == 0) {
        document.getElementById("dino_photo").src = "images/dino_run1.png";
      } else {
        document.getElementById("dino_photo").src = "images/dino_run2.png";
      }
      dino.style.top = `${parseInt(dino.style.top) - 30}px`;
      break;
    case "ArrowDown":
      if (step % 2 == 0) {
        document.getElementById("dino_photo").src = "images/dino_run1.png";
      } else {
        document.getElementById("dino_photo").src = "images/dino_run2.png";
      }
      dino.style.top = `${parseInt(dino.style.top) + 30}px`;
      break;
  }
});
