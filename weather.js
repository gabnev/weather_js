class Weather {
  constructor(city) {
    this.apiKey = '';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

    const resData = await response.json();

    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}