import React from "react";
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    const {title, release_date, overview} =this.props
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{release_date}</Card.Text>
            <Card.Text>{overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
};
export default Movies;