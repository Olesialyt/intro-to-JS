/////////////////////// track

let slider = document.querySelector("#slider-lamp input");
let progressBar = document.querySelector("#slider-lamp progress");
let output = document.querySelector(".slider-lamp-value");
output.innerHTML = slider.value;

slider.oninput = function () {
  progressBar.value = this.value;
  output.innerHTML = this.value;
};




