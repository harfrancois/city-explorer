import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDays extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.date}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
};
export default WeatherDays;