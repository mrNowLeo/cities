import React from 'react';
import Weather from './Weather';

const API_KEY = 'c9c05c567edac4a2c3e047a59c5ad05f';

class Form extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    let city = await e.target.elements.city.value;

    const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const DATA = await API_URL.json();
    console.log(DATA);
    this.setState({
      temp: DATA.main.temp,
      city: DATA.name,
      country: DATA.sys.country,
      sunrise: DATA.sys.sunrise,
      sunset: DATA.sys.sunset,
      error: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getWeather}>
          <input type="text" name="city" placeholder="City" />
          <button>Get weather</button>
        </form>
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Form;