import { search, buildRequestForecastUrl } from "../utils/search.js";

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  search()
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
});

buildRequestForecastUrl(51.509865, -0.118092, "metric");
