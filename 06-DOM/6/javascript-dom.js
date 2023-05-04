//********************************* 5. *********************************

// Придумати ще 2 варіації, від яких буде залежати ціна товару.???
const color = document.querySelectorAll(".color");
const shoe = document.querySelectorAll(".shoe");
const gradient = document.querySelectorAll(".gradient");
let price = "";
console.log(shoe);
const changeColor = e => {
  if (e.target) {
    const styleColor = e.target.getAttribute("color");

    color.forEach(el => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    shoe.forEach(s => {
      if (s.getAttribute("color") === styleColor) {
        s.classList.add("show");
      } else {
        s.classList.remove("show");
      }
    });

    gradient.forEach(x => {
      if (x.getAttribute("color") === styleColor) {
        x.classList.add("second");
        price = x.getAttribute("data-price");
        console.log(price);
      } else {
        x.classList.remove("second");
      }
    });
    document.getElementById("outprice").innerHTML = `${price}`;
  }
};

color.forEach(el => {
  el.addEventListener("click", changeColor);
});
