//1.
// Результат виводу: 1, 5, 2, 4, 3
const ul = document.querySelector("ul");
console.log(ul.firstElementChild.textContent); //1
console.log(ul.children[4].textContent); //5
console.log(ul.children[1].textContent); //2
console.log(ul.children[3].textContent); //4
console.log(ul.children[2].textContent); //3
