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

const classToCheckFind = e => {
  const classes = ["thermostat", "lamp", "to-do", "default", "music"];
  classes.forEach(el => {
    if ($(e.target).hasClass(el) || $(e.currentTarget).hasClass(el)) {
      classToCheck = el;
    }
  });
  // each el in onside => add class hidden  so that no element is diplayed onside
};

function removeHiddenClass(classToCheck) {
  onside.addClass("hidden");
  $(".onside").each(function () {
    if ($(this).hasClass(classToCheck)) {
      $(this).removeClass("hidden");
    }
  });
}

const handleOnside1 = e => {
  navLink.removeClass("active");
  $(e.target).addClass("active");
  classToCheckFind(e);
  removeHiddenClass(classToCheck);
};
const handleOnside2 = e => {
  classToCheckFind(e);
  navLink.removeClass("active");
  navLink.each(function () {
    if ($(this).hasClass(classToCheck)) {
      $(this).addClass("active");
    }
  });
  removeHiddenClass(classToCheck);
};
navLink.on("click", handleOnside1);
main.on("click", handleOnside2);

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




// class MusicPlayer extends Appliances {
//   static music = JSON.parse(localStorage.getItem("tasks")) || [];
//   constructor(name) {
//     super(name, level);
//     ///
//     this.currentSong = currentSong;
//     this.isPlaying = isPlaying;
//   }
//   play() {
//     audio.play();
//   }
//   stop() {
//     audio.stop();
//   }
//   skipToNextSong() {}
//   volume() {}
// }

//////////////////////////

// localStorage.setItem("light", JSON.stringify(Lamp.light));
