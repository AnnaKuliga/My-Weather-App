//DATE & TIME

function showFullTime() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  setInterval(showFullTime, 1000);

  let days = [
    `SUNDAY`,
    `MONDAY`,
    `TUESDAY`,
    `WEDNESDAY`,
    `THURSDAY`,
    `FRIDAY`,
    `SATURDAY`,
  ];
  let currentDay = days[date.getDay()];

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

  let currentMonth = months[date.getMonth()];
  let dateDay = date.getDate();
  {
    if (dateDay < 10) {
      dateDay = `0${dateDay}`;
    }
  }

  let currentYear = date.getFullYear();

  let currentTime = document.querySelector("#show-time");
  currentTime.innerHTML = `${currentDay}, ${hours} : ${minutes} : ${seconds}  <br/> ${currentMonth}, ${dateDay}, ${currentYear}`;
}
showFullTime();

// Temperature
function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  description.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "5fb4oa610201e8b3c770fffbaee96fft";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Sydney}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
