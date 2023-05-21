const defaultCard = $(".default.onside");
const cardTitle = defaultCard.find(".card-title");
const cardText = defaultCard.find(".card-text");

let temperature = 0;

// get current location
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

  //getting weather
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={hourly, minutely}&units=metric&appid=${apiKey}`
  )
    .then(res => res.json())
    .then(data => {
      let { sunset, sunrise } = data.current;
      const { description } = data.current.weather[0];
      $("#message-weather").html(description);
      temperature = Math.ceil(data.current["temp"]);

      cardTitle.html(`${temperature}&#8451;`);
      cardText.html(description);
      if (
        new Date().getHours() >= new Date(sunset * 1000).getHours() ||
        new Date().getHours() <= new Date(sunrise * 1000).getHours()
      ) {
        cardText.html("Night");
        cardTitle.append(
          `<i class="bi bi-moon-stars-fill" style="margin: 1.5rem"></i>`
        );
      } else if (description === "few clouds") {
        cardTitle.append(`
          <div class="partly_cloudy">
            <div class="partly_cloudy__sun"></div>
            <div class="partly_cloudy__cloud"></div>
          </div>
        `);
      } else if (description.includes("clouds")) {
        cardTitle.append(`<div class="cloudy"></div>`);
      } else if (description.includes("rain")) {
        cardTitle.append(`
          <div class="rainy">
            <div class="rainy__cloud"></div>
            <div class="rainy__rain"></div>
          </div>
        `);
      } else if (description.includes("thunderstorm")) {
        cardTitle.append(`
          <div class="thundery">
            <div class="thundery__cloud"></div>
            <div class="thundery__rain"></div>
          </div>
        `);
      } else if (description === "clear sky") {
        cardTitle.append(`<div class="sunny"></div>`);
      } else {
        cardTitle.append(`
          <div class="partly_cloudy">
            <div class="partly_cloudy__sun"></div>
            <div class="partly_cloudy__cloud"></div>
          </div>
        `);
      }
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
