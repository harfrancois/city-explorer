import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cards from './Cards.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      weatherData: {}
    };
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  };
  displayCityData = async (e) => {
    e.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    console.log(cityData.data[0]);
    this.displayWeatherData();
    this.setState({
      cityData: cityData.data[0],
      displayCityData: true

    });
  };

  displayWeatherData = async (e) => {
    
    let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}`);
    console.log(weatherData.data);
    this.setState({ cityData: weatherData });
  };


  render() {

    return (

      <>

        <Form
          onSubmit={this.handleSubmit} >
          <Form.Label>Search For A City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City Name"
            onInput={this.handleInput}
          />

          <Button
            variant="primary"
            type="submit">
            Explore
          </Button>
        </Form>



      </>
    );
  }
}

export default App;
