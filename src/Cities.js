import React from "react";
import Card from 'react-bootstrap/Card';
import Weather from "./Weather";


class Cities extends React.Component {


  render() {

    // let forecasts = this.props.weatherData.map((day, idx) => (
    //   <Weather key={idx} date={day.date} description={day.description}></Weather>
    // ));


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
          <Weather
       
             weatherData={this.props.weatherData}
          />
        </Card>
      }</>
    )
  }
};

export default Cities; 