function currentDate(date) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let currentDay = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let currentTime = `${day} ${currentDay} ${month} ${year},${hours}:${minutes}`;

  return currentTime;
}

let h3 = document.querySelector("h3");
h3.innerHTML = currentDate(new Date());

//challenge2

function citySwitch(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#cityInput");
  cityElement.innerHTML = `Currently in ${cityInput.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySwitch);

let apiKey = "2e5b6f97a330658a59719220e02b26a0";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&appid=2e5b6f97a330658a59719220e02b26a0";
axios.get(apiUrl).then(showTemperature);

function showTemperature(response) {
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
function searchCity(city) {
  let apiKey = "52e5b6f97a330658a59719220e02b26a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function citySubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchbar").value;
  searchCity(city);
}
