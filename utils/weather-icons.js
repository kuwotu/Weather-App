const weatherIcon = document.querySelector("#current-weather-icon");

export function changeWeatherIcons(weather) {
  if (weather.includes("rain")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png";
  } else if (weather.includes("thunderstorm")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/11d@2x.png";
  } else if (weather.includes("drizzle")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if (weather.includes("snow") || weather.includes("sleet")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png";
  } else if (weather.includes("clear")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/01d@2x.png";
  } else if (weather.includes("clouds")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/03d@2x.png";
  } else {
    weatherIcon.src = "http://openweathermap.org/img/wn/50d@2x.png";
  }
}
