//********************************* 2. *********************************

// const h1 = document.createElement("h1");
// h1.innerHTML = "I'am a big header!!!";

// document.body.appendChild(h1);

// const div = document.createElement("div");
// div.id = "myDiv";
// h1.after(div);

// const p1 = document.createElement("p");
// p1.innerHTML = "First paragraph";
// div.prepend(p1);

// const p2 = document.createElement("p");
// p2.innerHTML = "Second paragraph";
// div.append(p2);

// const p3 = document.createElement("p");
// p3.innerHTML = "Third paragraph";
// div.append(p3);

// const p4 = document.createElement("p");
// p4.innerHTML = "Fourth paragraph";
// div.append(p4);

// const ul = document.createElement("ul");
// ul.id = "myList";
// div.after(ul);

// const li1 = document.createElement("li");
// li1.innerHTML = "Make";
// ul.prepend(li1);

// const li2 = document.createElement("li");
// ul.append(li2);
// li2.innerHTML = "me";

// const li3 = document.createElement("li");
// li3.innerHTML = "horizontal!";
// ul.append(li3);

// ul.style.display = "flex";
// li1.style.marginRight = "20px";
// li2.style.marginRight = "20px";
// li3.style.marginRight = "20px";

// const span = document.createElement("span");
// span.innerHTML = "Make me invisible, please!";
// ul.append(span);
// span.style.display = "none";

// ********************************* 3.  *********************************

const main = document.createElement("main");
document.body.appendChild(main);

main.className = "mainClass";
main.classList.add("check");
main.classList.add("item");

const div1 = document.createElement("div");
div1.id = "myDiv";
main.append(div1);

const paragraph = document.createElement("p");
paragraph.innerHTML = "First paragraph";
div1.append(paragraph);

