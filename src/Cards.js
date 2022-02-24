import React from "react";
import Card from 'react-bootstrap/Card';

class Cards extends React.Component {
  render() {

    
    
    return (
      <>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.props.city}&format=json`} />
          <Card.Body>
            <Card.Title>{this.props.cityData.display_name}</Card.Title>
            <Card.Text>Latitude: {this.props.cityData.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.cityData.lon}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
};

export default Cards; 