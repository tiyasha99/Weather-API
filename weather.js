class Weather{
  constructor(city,state) {
    this.apiKey='e73308881dbac4bd8ecddb42b4116da8';
    this.city = city;
    this.state=state;
  }
  async getWeather() {
    const response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    const responseData = await response.json();

    console.log(responseData);

    return responseData;
  }

  //Change weather location
  changeLocation(city,state){
    this.city=city;
    this.state=state;
  }
}

