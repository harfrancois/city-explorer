import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cities from './Cities.js';
import Container from 'react-bootstrap/Container';
import Movies from './Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      movie: '',
      cityData: {},
      weatherData: [],
      movieData: []
    };
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  };
  handelSearch = (e) => {
    e.preventDefault();
    this.setState({
      movie: e.target.value
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
    this.displayMovieData();

  };

  displayWeatherData = async () => {

    let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}`);
    console.log(weatherData.data);
    this.setState({ weatherData: weatherData.data });
  };

  displayMovieData = async () => {
    let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.movie}`);
    console.log(movieData.data);
    this.setState({
      movie: movieData.data
    })

  }


  render() {
    console.log('app state', this.state)

    let movies = this.props.movieData.map((data, idx) => (
      <Movies 
      key={idx}
      image={data.images.base_url}
      title={data.date} 
      overview={data.overview}
      release_date={data.release_date}
      />
    ));


    return (

      <>
        <Container>
          <div><h2>CITY EXPLORER</h2></div>

          <Form
            className='City'
            onSubmit={this.handleSubmit} >
            <Form.Label>Search For A City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City Name"
              onInput={this.handleInput}
            />
            <Button type="submit">Explore</Button>
          </Form>
          <div><h2>MOVIES</h2></div>
          <Form
            className='Movie'
            onSubmit={this.displayMovieData}
          >
            <Form.Label>Search For A Movie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Movie Title"
              onInput={this.handelSearch}
            />
            <Button type='submit'>SEARCH</Button>
          </Form>

          <Cities
            cityData={this.state.cityData}
            cityName={this.state.cityName}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            weatherData={this.state.weatherData}
          />
          <Movies>{movies}</Movies>
            
          


        </Container>
      </>
    );
  }
}

export default App;
