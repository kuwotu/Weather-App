const weatherIcon = document.querySelector("#current-weather-icon");
const dailyWeatherIcon = document.querySelectorAll(".daily-weather-icons");

function changeWeatherIcons(weather) {
  if (weather.includes("Rain") || weather.includes("rain")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png";
  } else if (
    weather.includes("Thunderstorm") ||
    weather.includes("thunderstorm")
  ) {
    weatherIcon.src = "http://openweathermap.org/img/wn/11d@2x.png";
  } else if (weather.includes("Drizzle") || weather.includes("drizzle")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if (
    weather.includes("Snow") ||
    weather.includes("snow") ||
    weather.includes("sleet") ||
    weather.includes("Sleet")
  ) {
    weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png";
  } else if (weather.includes("Clear") || weather.includes("clear")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/01d@2x.png";
  } else if (weather.includes("Clouds") || weather.includes("clouds")) {
    weatherIcon.src = "http://openweathermap.org/img/wn/03d@2x.png";
  } else {
    weatherIcon.src = "http://openweathermap.org/img/wn/50d@2x.png";
  }
}

function changeDailyWeatherIcons(daily) {
  for (let i = 0; i < dailyWeatherIcon.length; i++) {
    let todaysDescription = daily[i].weather[0].description;
    if (todaysDescription.includes("rain")) {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/10d@2x.png";
    } else if (todaysDescription.includes("thunderstorm")) {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/11d@2x.png";
    } else if (todaysDescription.includes("drizzle")) {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/09d@2x.png";
    } else if (
      todaysDescription.includes("snow") ||
      todaysDescription.includes("sleet")
    ) {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/13d@2x.png";
    } else if (todaysDescription.includes("clear")) {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/01d@2x.png";
    } else if (todaysDescription.includes("clouds")) {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/03d@2x.png";
    } else {
      dailyWeatherIcon[i].src = "http://openweathermap.org/img/wn/50d@2x.png";
    }
  }
}

export { changeWeatherIcons, changeDailyWeatherIcons };
