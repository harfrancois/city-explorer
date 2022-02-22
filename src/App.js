import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      cityMap: {}
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
  };
  getMap = async (e) => {
    e.preventDefault();
    let cityMap = await axios.get(`https://maps.locationiq.com/v3/staticmap&key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=10`)
  }

  render() {
    // let cityName = this.city

    return (
      <>
        <h1>{cityData.data[0].name}</h1>
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
        <Image>{this.getMap}</Image>
      </>
    );
  }
}

export default App;
