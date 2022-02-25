import React from "react";
import Card from 'react-bootstrap/Card';
import WeatherData from './WeatherData.js'

class Cards extends React.Component {


  render() {
    // let weather = this.props.weatherData.map((item, idx) => (
    //   <WeatherData
    //     key={idx}
    //     date={item.date}
    //     description={item.description}
    //   />
    // ))
    
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=11`;
    return (
      <>{this.props.cityName &&
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>{this.props.cityName}</Card.Title>
            <Card.Text>Latitude: {this.props.latitude}</Card.Text>
            <Card.Text>Longitude: {this.props.longitude}</Card.Text>
          </Card.Body>
        </Card>
      }</>
    )
  }
};

export default Cards; 