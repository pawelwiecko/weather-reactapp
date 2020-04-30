import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const APIKey = '6b0adbdbb590757e7d337651368ecfc0';

class App extends Component {

  state = {
    value: '',
    city:'',
    date: '',
    temp:'',
    sunset:'',
    sunrise: '',
    pressure:'',
    err:'',
  }

  handleInputChange = e =>{
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Nie udało się")
    }) 
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(state => ({
        err: false,
        city:state.value,
        date: time,
        temp:data.main.temp,
        sunset:data.sys.sunset,
        sunrise: data.sys.sunrise,
        pressure:data.main.pressure,

  
      }))
    })
    .catch(err => {
      this.setState(prevState => ({
        err: true,
        city: prevState.value,
      
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Pogodynka-app</h1>
        <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit}/>
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
