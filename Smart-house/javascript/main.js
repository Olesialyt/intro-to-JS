import { handleDisplayingToDo } from "./toDoList.js";
import { handleDisplayingThermostat } from "./thermostat.js";
import { handleDisplayingDefault } from "./default.js";

// navBar
export const onsideCollection = () => {
  $(".onside").each(function () {
    if (!$(this).hasClass("hidden")) {
      $(this).addClass("hidden");
    }
  });
};

const navLink = $(".nav-link");
const handleNavLink = e => {
  navLink.removeClass("active"); //remove active from each el
  $(e.target).addClass("active");

  let text = $(e.target).text();
  switch (text) {
    case "Smart House":
      handleDisplayingDefault();
      break;
    case "Thermostat":
      handleDisplayingThermostat();
      break;
    case "To do list":
      handleDisplayingToDo();
      break;
    case "Lamp":
      handleDisplayingLamp();
      break;
    default:
      handleDisplayingDefault();
      break;
  }
};
navLink.on("click", handleNavLink);

// displaying time
let currentTime = "";

$(document).ready(function () {
  setInterval(function () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let abbr = "AM";
    hours > 12 ? (abbr = "PM") : abbr;
    currentTime = `${hours}:${minutes} <span id="abbr">${abbr}</span>`;
    $("#time").html(currentTime);
  }, 1000);
});

// main class for all appliances
export class Appliances {
  constructor() {
    this.power = false; //on/off
  }
  powerOn() {
    this.power = true;
    $(body).css("backgroundColor", "White");
  }
  powerOff() {
    this.power = false;
    $(body).css("backgroundColor", "Black");
  }
}
