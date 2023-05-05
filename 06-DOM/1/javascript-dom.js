//1.
// Результат виводу: 1, 5, 2, 4, 3
const ul = document.querySelector("ul");
alert(ul.firstElementChild.textContent);
alert(ul.children[4].textContent);
alert(ul.children[1].textContent);
alert(ul.children[3].textContent);
alert(ul.children[2].textContent);
