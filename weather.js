class Weather {
  constructor(city) {
    this.apiKey = '035b1a84d1a096ab7f97eb588dfe2ecf';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const resData = await response.json();

    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}