//********************************* 5. *********************************

//1)
const circle = document.getElementsByClassName("circle");
//2)
for (let i = 0; i < circle.length; ++i) {
  let newClass = circle[i].getAttribute("data-anim");
  console.log(newClass);
  //3)
  circle[i].classList.add(`${newClass}`);
}

