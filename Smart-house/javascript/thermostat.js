import { onsideCollection } from "./main.js";

const cardThermostat = $(".card-thermostat-onside"); // on side card
const cardThermostatMain = $(".card-thermostat.main");
let cardThermostatText = cardThermostat.find(".card-text");
let thermostatValue = 0;

// displaying on side thermostat card
export const handleDisplayingThermostat = () => {
  onsideCollection();
  cardThermostat.removeClass("hidden");
};

cardThermostatMain.on("click", handleDisplayingThermostat);

// moving slider of thermostat
let slider = $("#slider-lamp input");
let progressBar = $("#slider-lamp progress");
let output = $(".slider-lamp-value");
output.html(slider.val()); //innerHTML = slider.value;
cardThermostatText.html(slider.val());

slider.on("input", function () {
  thermostatValue = this.value;
  progressBar.val(thermostatValue);
  output.html(thermostatValue);
  cardThermostatText.html(thermostatValue);
});

// class Thermostat {

//   constructor() {

//   }
// }
