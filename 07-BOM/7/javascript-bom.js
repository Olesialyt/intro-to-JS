const countries = {
  usa: [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ],
  ukr: [
    "Kyiv",
    "Kharkiv",
    "Dnipro",
    "Odessa",
    "Lviv",
    "Zaporizhzhia",
    "Kryvyi Rih",
    "Mykolaiv",
    "Mariupol",
    "Luhansk",
  ],
  ger: [
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Düsseldorf",
    "Dortmund",
    "Essen",
    "Leipzig",
  ],
};

const country = document.getElementById("country");
const cities = document.getElementById("cities");

const createList = citiesArr => {
  cities.innerHTML = "";
  citiesArr.forEach(el => {
    const option = document.createElement("option");
    option.innerHTML = el;
    cities.append(option);
  });
};

country.addEventListener("change", e => {
  let country = e.target.value;
  country = countries[country];
  createList(country);
});
