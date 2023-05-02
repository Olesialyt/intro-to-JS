//********************************* 5. *********************************
/*
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут??
*/
//1)
const circle = document.getElementsByClassName("circle");
//2)
for (let i = 0; i < circle.length; ++i) {
  let newClass = circle[i].getAttribute("data-anim");
  console.log(newClass);
  //3)
  circle[i].classList.add(`${newClass}`);
}

