import React from 'react';
import Card from 'react-bootstrap/Card';
import Movie from './Movie';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() {

    let movies = this.props.movieData.map((movie, idx) => (
      <Movie 
      key={idx}
      
      title={movie.title} 
      />
    ));


    return (
      <>
        <Card>
          {
            this.props.movieData.length > 0 &&
            <ListGroup>
              <ListGroup.Item>Popular Movies</ListGroup.Item>
              {movies}
            </ListGroup>
          }
        </Card>
      </>
    )
  }
};
export default Movies;


