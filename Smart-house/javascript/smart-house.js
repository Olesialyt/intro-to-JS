window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!("SpeechRecognition" in window)) {
    console.log("Speech recognition is not supported");
    return;
  }

  console.log("Speech recognition is supported");

  const recognition = new window.SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = handleResult;
  recognition.start();
}
start();

///////////////////////// get current location
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  let latitude = crd.latitude;
  let longitude = crd.longitude;
  let apiKey = "d9bbc324b2ef346c87b95c66d9c2de05";

  /////////////////////////// getting weather
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={hourly, minutely}&units=metric&appid=${apiKey}`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function handleResult(e) {
  try {
    // console.log(e.results[e.results.length - 1][0].transcript);
    let command = e.results[e.results.length - 1][0].transcript;

    if (/turn\soff/i.test(command)) {
      document.body.style.backgroundColor = "Black";
    } else if (/turn\son/i.test(command)) {
      document.body.style.backgroundColor = "Yellow";
    }
    // if(command = )
  } catch (e) {
    console.log(e.error);
  }
}
class Appliances {
  constructor() {
    this._power = false; //on/off
  }
  powerOn() {
    this._power = true;
    document.body.style.backgroundColor = "Yellow";
    document.documentElement.style.setProperty("--brightness", "100%");
  }
  powerOff() {
    this._power = false;
    document.documentElement.style.setProperty("--brightness", "0%");
  }
}

const instance = new Appliances();

// document.addEventListener(/*"click"*/, function () {
//   instance.powerOn();
// });
const opacity = progressBar.value / 100;
const brightness = `${progressBar.value}` + "%";
document.documentElement.style.setProperty("--opacity", opacity);
document.documentElement.style.setProperty("--brightness", brightness);

let currentTime = "";

document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let abbr = "AM";
    hours > 12 ? (abbr = "PM") : abbr;
    currentTime = `${hours}:${minutes} <span id="abbr">${abbr}</span>`;
    document.getElementById("time").innerHTML = currentTime;
  }, 1000);
});


