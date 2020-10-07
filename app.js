const weather = new Weather('lisbon');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Porto');

function getWeather() {
  weather.getWeather()
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}
