class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.description = document.querySelector('#w-description');
    this.temp = document.querySelector('#w-temp-string');
    this.icon = document.querySelector('#w-icon');
    this.details = document.querySelector('#w-details');
    this.humidity = document.querySelector('#w-humidity');
    this.feels = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('.fa-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = weather.main.temp + ' °C';
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      );
    this.humidity.textContent = 'Humidity: ' + weather.main.humidity;
    this.feels.textContent = 'Feels like: ' + weather.main.feels_like + ' °C';
    this.wind.textContent = ` ${(weather.wind.speed * 3.6)} km/h, at ${weather.wind.deg}°`;

    
    
  }
}