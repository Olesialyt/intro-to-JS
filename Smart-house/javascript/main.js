export class Appliances {
  constructor(name, level, id) {
    this._name = name;
    this._level = level;
  }

  set level(percentage) {
    switch (percentage) {
      case "off":
        this._level = "0%";
        break;
      case "low":
        this._level = "25%";
        break;
      case "avg":
        this._level = "50%";
        break;
      case "high":
        this._level = "100%";
        break;
      default:
        this._level = "0%";
    }
  }

  get level() {
    return this._level;
  }

}
//handling displaying card onside 
const navLink = $(".nav-link");
const onside = $(".onside");
const main = $(".card.main");
let classToCheck = 0;


//displaying cards ...
const classToCheckFind = e => {
  const classes = ["thermostat", "lamp", "to-do", "default", "music"];
  classes.forEach(el => {
    if ($(e.target).hasClass(el) || $(e.currentTarget).hasClass(el)) {
      classToCheck = el;
    }
  });
  // each el in onside => add class hidden  so that no element is diplayed onside
};

const handleOnside = (e) => {
  navLink.removeClass("active");
  classToCheckFind(e);
  navLink.each(function () {
    if ($(this).hasClass(classToCheck)) {
      $(this).addClass("active");
    }
  });
  onside.removeClass("visible").addClass("hidden");
  onside.filter(`.${classToCheck}`).removeClass("hidden").addClass("visible");
};

navLink.on("click", handleOnside);
main.on("click", handleOnside);



// displaying time
let currentTime = "";

$(document).ready(() => {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let abbr = "AM";
    hours > 12 ? (abbr = "PM") : abbr;
    currentTime = `${hours}:${minutes} <span id="abbr">${abbr}</span>`;
    $("#time").html(currentTime);
  }, 1000);
});

