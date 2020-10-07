const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', startWeather);

function startWeather() {
  weather.getWeather()
  .then(res => {
    ui.paint(res);
  })
  .catch(err => console.log(err));
}

// change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  
  weather.changeLocation(city);

  // set location at LS
  storage.setLocationData(city);

  startWeather();

  $('#locModal').modal('hide');
});