import React, { Component } from 'react';
import CustomerList from './CustomerList.js'
import RentalLibrary from './RentalLibrary'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedMovie: undefined
    };
  }

  // add function
  selectMovie = (movieId) => {
    const { movies } = this.state;

    const selectedMovie = movies.find((movie) => {
      return movie.id === movieId;
    });

    this.setState({ selectedMovie });
  }

  // fiter function?
  // create rental function

  render () {
    return (
      <div>
        <section><CustomerList /></section>
        <section><RentalLibrary selectMovieCallback={this.selectMovie}/></section>
      </div>
    )
  }
}

export default Home;