import { Appliances } from "./main.js";
const cardThermostat = $(".onside.thermostat"); // on side card
let cardThermostatText = cardThermostat.find(".card-text");
let thermostatValue = 0;

// moving slider of thermostat
let slider = $("#slider-thermostat input");
let progressBar = $("#slider-thermostat progress");
let output = $(".slider-thermostat-value");
output.html(slider.val()); //innerHTML = slider.value;
cardThermostatText.html(slider.val());

let mes = "";
class Thermostat extends Appliances {
  static temperature = JSON.parse(localStorage.getItem("temp")) || [];

  static displayTemp() {
    let lastTemp = Thermostat.temperature[0]._level;
    output.html(lastTemp);
    cardThermostatText.html(lastTemp);
  }
  static addTemp(instance) {
    Thermostat.temperature[0] = instance;
  }
  constructor(name, level, message) {
    super(name, level);
    this._message = message;
  }
  set level(level) {
    this._level = level;
  }
  get level() {
    return this._level;
  }
  set message(mes) {
    this._message = mes;
  }
  displayMessage() {
    cardThermostatText.append(
      `<p class="border border-success-subtle mx-5 p-2 mb-2">${this._message}</p>`
    );
  }
}

slider.on("input", function () {
  thermostatValue = this.value;
  progressBar.val(thermostatValue);
  output.html(thermostatValue);
  cardThermostatText.html(thermostatValue);
  // Save the value to Thermostat class and localStorage

  const newInstance = new Thermostat("Thermostat", thermostatValue);
  Thermostat.addTemp(newInstance);

  if (newInstance.level < 22) {
    newInstance.message = "Temperature is below recommended level";
  } else if (newInstance.level > 30) {
    newInstance.message = "Temperature is to high";
  } else {
    newInstance.message = "Temperature is on a normal level";
  }
  newInstance.displayMessage();
  localStorage.setItem("temp", JSON.stringify(Thermostat.temperature));
});
if (localStorage.getItem("light")) {
  Thermostat.displayTemp();
}
