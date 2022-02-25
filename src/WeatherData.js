import React from "react";
import Card from 'react-bootstrap/Card';

class WeatherData extends React.Component {
  render() {
    const {date, description} = this.props
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Text>{date}</Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
};

export default WeatherData; 