//********************************* 5. *********************************

const color = document.querySelectorAll(".color");
const shoe = document.querySelectorAll(".shoe");
const gradient = document.querySelectorAll(".gradient");
const h1 = document.getElementById("outprice");
let hasSale = true;
let timeLeft = "";
let price = "";

const timeLeftTag = document.createElement("h4");
timeLeftTag.id = "time-left";
timeLeftTag.textContent = "";

//Countdown
const countDownDate = new Date("May 6, 2023 15:00:00").getTime();
const tomorrow = new Date();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the time
  timeLeftTag.textContent = `${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    hasSale = false;
  }
}, 1000);

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

    if (hasSale) {
      let priceWithSale = price * 0.5;
      const div = document.createElement("div");
      div.id = "sale";
      h1.innerHTML = `${priceWithSale}`;
      h1.style.color = "red";
      h1.appendChild(div);

      div.innerHTML = `<strike><h4>${price}</h4></strike><br>
          <h4 style="font-style: italic;">SALE!</h4><br>`;
      div.appendChild(timeLeftTag);
    } else {
      h1.innerHTML = `${price}`;
    }
  }
};

color.forEach(el => {
  el.addEventListener("click", changeColor);
});
