// script.js
// const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=5e182bf346c2bb165ff896592d5b9807';

const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=5e182bf346c2bb165ff896592d5b9807'

window.addEventListener('load', function(){

});

function getWeatherData() {
  const data = JSON.parse(this.responseText);
  console.dir(data);
  
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;
}

const connection = new XMLHttpRequest();

connection.addEventListener("load", getWeatherData);

connection.open("GET", weather_api);
connection.send();

