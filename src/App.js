import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cards from './Cards.js';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      weatherData: [],
      
    };
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    console.log(cityData.data[0]);

    this.setState({
      cityData: cityData,
      cityName: cityData.data[0].display_name,
      latitude: cityData.data[0].lat,
      longitude: cityData.data[0].lon,
      

    });
    this.displayWeatherData();
  };

  displayWeatherData = async () => {
    let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}`);
    console.log(weatherData.data);
    this.setState({ weatherData: weatherData.data });
  };


  render() {

    
    return (

      <>
        <Container>
          <div><h1>CITY EXPLORER</h1></div>
          <Form
            onSubmit={this.handleSubmit} >
            <Form.Label>Search For A City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City Name"
              onInput={this.handleInput}
            />
            <Button type="submit">Explore</Button>
          </Form>
          <Cards
            cityData={this.state.cityData}
            cityName={this.state.cityName}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            weatherData={this.state.weatherData}

           />


        </Container>
      </>
    );
  }
}

export default App;
