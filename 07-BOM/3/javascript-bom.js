const changeToBrownElement = document.getElementById("changeToBrown");

changeToBrownElement.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});
changeToBrownElement.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});

const changeToBlue = () => {
  document.body.style.backgroundColor = "blue";
};
const changeToPink = () => {
  document.body.style.backgroundColor = "pink";
};

const changeToYellow = color => {
  document.body.style.backgroundColor = color;
};
