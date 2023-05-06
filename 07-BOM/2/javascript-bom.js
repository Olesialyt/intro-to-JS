const text = document.getElementById("text");

const object = {
  color: "orage",
  fontSize: "20px",
  fontFamily: "Comic Sans MS",
};

const changeCSS = () => {
  let arr = Object.keys(object);
  arr.forEach(x => {
    text.style[x] = object[x];
  });
};
