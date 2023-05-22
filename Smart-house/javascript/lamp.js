import { Appliances } from "./main.js";

const handleSwitch = () => {
  $("body").toggleClass("color");
};

$("[role='switch']").on("change", handleSwitch);

class Lamp extends Appliances {
  static light = JSON.parse(localStorage.getItem("light")) || [];

  static addLightLevel(instanceLight) {
    Lamp.light.push(instanceLight);
  }
  static displayLastLight() {
    $("#lamp-state").html(Lamp.light[Lamp.light.length - 1]._level);
  }
  constructor(name, level) {
    super(name, level);
    this._time = new Date().getTime();
    Lamp.addLightLevel(this);
  }
  set level(percentage) {
    super.level = percentage;
  }
  get level() {
    return this._level;
  }
  static countPowerUsage() {
    const lampPower = 60;
    let totalPowerUsage = 0;

    for (let i = 0; i < Lamp.light.length; i++) {
      const currentLight = Lamp.light[i];
      const nextLight = Lamp.light[i + 1];
      let difference = 0;

      if (nextLight) {
        difference = nextLight._time - currentLight._time;
      } else {
        difference = new Date().getTime() - currentLight._time;
      }

      const usageInHours = difference / (1000 * 3600); // Convert milliseconds to hours
      const percentage = parseFloat(currentLight._level) / 100; // Convert level to decimal
      const usageIntensity = lampPower * percentage;
      const powerUsage = usageIntensity * usageInHours;

      totalPowerUsage += powerUsage;
    }

    $("#lamp-power").html(`${totalPowerUsage.toFixed(2)} Watt`);
  }
}

const handleLampState = e => {
  let newInstance = new Lamp("Lamp");
  newInstance.level = e.currentTarget.attributes["data-state"].value;
  $("#lamp-state").html(newInstance.level);
  localStorage.setItem("light", JSON.stringify(Lamp.light));
};

if (localStorage.getItem("light")) {
  Lamp.displayLastLight();
}

$(".lamp-state").on("click", handleLampState);

$("#power-usage").on("click", () => {
  Lamp.countPowerUsage();
});
Lamp.countPowerUsage();
Lamp.light.forEach(el => {
  console.table(el);
});
