const weather = new Weather('lisbon');
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Porto');

function getWeather() {
  weather.getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => console.log(err));
}
