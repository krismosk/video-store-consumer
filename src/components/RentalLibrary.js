import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

class RentalLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3003/movies')
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

  makeMovieList() {
    const movieList = this.state.movies.map((movie, i) => {
      return <Movie
        key={i}
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        inventory={movie.inventory}
        image={movie.image_url}
        externalId={movie.external_id}
        selectMovieCallback={movie.selectMovieCallback}
      />
    });
    return movieList
  }

  render() {
    return (
      <div>
        { this.makeMovieList }
      </div>
    )
  }

}

export default RentalLibrary;