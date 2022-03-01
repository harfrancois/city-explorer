import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDays from './WeatherDays';

class Weather extends React.Component {

  render() {

    let forecasts = this.props.weatherData.map((day, idx) => (
      <WeatherDays key={idx} date={day.date} description={day.description}></WeatherDays>
    ));
    
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>Three Day Forecasts</Card.Title>
            <ListGroup.Item>{forecasts}</ListGroup.Item>
          </Card.Body>
        </Card>
      </>
    )
  }
};
export default Weather;