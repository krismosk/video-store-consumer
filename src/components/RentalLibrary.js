import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
import PropTypes from 'prop-types';

class RentalLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3000/movies')
    .then((response) => {
      this.setState({
        movies: response.data
      });
    })
    .catch((error) => {
      // come back to handle errors better
      console.log(error.message)
    });
  }

  findMovie = (movieId) => {
    const selectedMovie = this.state.movies.find((movie) => {
      return movie.id === movieId;
    });
    this.props.selectMovie(selectedMovie);
  }

  makeMovieList() {
    const movieList = this.state.movies.map((movie, i) => {
      return <Movie
        key={i}
        id={movie.id}
        image={movie.image_url}
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        inventory={1}
        externalId={movie.external_id}
        findMovie={this.findMovie}
      />
    });
    
    return movieList
  }

  render() {
    return (
      <div>
        { this.makeMovieList() }
      </div>
    )
  }

}

RentalLibrary.propTypes = {
  selectMovie: PropTypes.func.isRequired
}

export default RentalLibrary;