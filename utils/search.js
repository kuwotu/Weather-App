import {
  changeWeatherIcons,
  changeDailyWeatherIcons,
} from "../utils/weather-icons";

const location = document.querySelector("#location");
const weatherDescription = document.querySelector("#weather-description");
const date = document.querySelector("#date");
const currentWeather = document.querySelector("#current-weather");
const searchLocation = document.querySelector("#search-location");
const dailyWeatherMax = document.querySelectorAll(".daily-weather-max");
const dailyWeatherMin = document.querySelectorAll(".daily-weather-min");

const feelsLike = document.querySelector("#feels-like-temp");
const humidity = document.querySelector("#humidity");
const chanceOfRain = document.querySelector("#chance-of-rain");
const windspeed = document.querySelector("#wind-speed");

const changeTemp = document.querySelector("#change-unit-btn");

const fahrenheit = document.querySelectorAll(".weather-info-units-f");
const celsius = document.querySelectorAll(".weather-info-units-c");
const displayButtonF = document.querySelector(".display-button-units-f");
const displayButtonC = document.querySelector(".display-button-units-c");

let units = "metric";

async function search() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchLocation.value}&APPID=23d0b97b3b5b101243fd506729fb17ed`,
    { mode: "cors" }
  );
  const data = await response.json();
  // Builds request url to obtain weather forecast
  console.log(data);
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  location.textContent = data.name;
  await buildRequestForecastUrl(lat, lon, units);
}

async function buildRequestForecastUrl(lat, lon, units) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=23d0b97b3b5b101243fd506729fb17ed`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  let current = data.current;
  date.textContent = new Date(current.dt * 1000).toDateString();

  let weatherDescriptionString =
    current.weather[0].description.charAt(0).toUpperCase() +
    current.weather[0].description.slice(1);

  weatherDescription.textContent = weatherDescriptionString;
  changeWeatherIcons(weatherDescription.textContent);
  currentWeather.textContent = current.temp;
  feelsLike.textContent = current.feels_like;
  humidity.textContent = `${Math.round(current.humidity)} %`;
  let rainPercent = data.daily[0].pop * 100;
  chanceOfRain.textContent = `${Math.round(rainPercent)} %`;
  windspeed.textContent = `${current.wind_speed} m/s`;
  dailyWeather(data.daily);
  changeDailyWeatherIcons(data.daily);
}

function dailyWeather(daily) {
  for (let i = 0; i < daily.length - 1; i++) {
    dailyWeatherMax[i].textContent = daily[i].temp.max;
    dailyWeatherMin[i].textContent = daily[i].temp.min;
  }
}

async function switchTemp() {
  if (units === "metric") {
    units = "imperial";

    await search();

    for (let i = 0; i < fahrenheit.length; i++) {
      fahrenheit[i].style.display = "block";
    }

    for (let i = 0; i < celsius.length; i++) {
      celsius[i].style.display = "none";
    }
    displayButtonF.style.display = "none";
    displayButtonC.style.display = "block";
  } else if (units === "imperial") {
    units = "metric";

    await search();

    for (let i = 0; i < celsius.length; i++) {
      celsius[i].style.display = "block";
    }

    for (let i = 0; i < fahrenheit.length; i++) {
      fahrenheit[i].style.display = "none";
    }

    displayButtonF.style.display = "block";
    displayButtonC.style.display = "none";
  }

  search()
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

changeTemp.addEventListener("click", switchTemp);

export { search, weatherDescription, buildRequestForecastUrl, units };
