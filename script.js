//const APIweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e033f0bcf7cac98d13267ff1a51dab46&lang=pt_br`;
//const APIkey = " e033f0bcf7cac98d13267ff1a51dab46";

const cityInput = document.querySelector("#city-input"); 
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherElement = document.querySelector("#weather-icon")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const pressureElement = document.querySelector("#pressure span")

//f(x) 
const getWeatherData = async(city) => {
  const APIweatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e033f0bcf7cac98d13267ff1a51dab46&lang=pt_br`;
        const res = await fetch(APIweatherURL);
        const data = await res.json();
        return data;
}

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  //weatherElement.setAttribute = ("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed} km/h`;
  pressureElement.innerText = `${data.main.pressure} hPa`;
};

//evento
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

    const city =  cityInput.value;

  showWeatherData(city);

})