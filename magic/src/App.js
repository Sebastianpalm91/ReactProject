import React, {Component} from 'react';

import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'

const API_KEY = '71c38ee2c66408a33dd48f2e7130bd62';


class App extends Component
{

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        error: ''
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        wind: undefined,
        error: 'Please enter valid place'
      })
    }
  }
  render() {
    return (
      <div>
      <Titles />
      <Form getWeather={this.getWeather} />
      <Weather
      city={this.state.city}
      country={this.state.country}
      temperature={this.state.temperature}
      description={this.state.description}
      humidity={this.state.humidity}
      wind={this.state.wind}
      error={this.state.error}
      />

      </div>
    );
  };
}

export default App;
