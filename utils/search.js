import { changeWeatherIcons } from "../utils/weather-icons";

const location = document.querySelector("#location");
const weatherDescription = document.querySelector("#weather-description");
const date = document.querySelector("#date");
const currentWeather = document.querySelector("#current-weather");
const searchLocation = document.querySelector("#search-location");

const feelsLike = document.querySelector("#feels-like-temp");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#wind-speed");

async function search() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchLocation.value}&APPID=23d0b97b3b5b101243fd506729fb17ed`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  location.textContent = data.name;
  weatherDescription.textContent = data.weather[0].description;
  changeWeatherIcons(weatherDescription.textContent);
  currentWeather.textContent = data.main.temp;
  feelsLike.textContent = data.main.feels_like;
  humidity.textContent = `${data.main.humidity} %`;
  windspeed.textContent = `${data.wind.speed} m/s`;
}

export { search, weatherDescription };
