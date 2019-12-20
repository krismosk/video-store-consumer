import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
import PropTypes from 'prop-types';
import LibrarySearch from './LibrarySearch';
class RentalLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchTerm: '',
    };
  }

  componentDidMount () {
    axios.get('https://video-store-backend.herokuapp.com/movies')
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

  formatDate = (date) => {
    const monthNames = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];
  
    let newDate = new Date(date);
    let formattedDate = monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear();
    return formattedDate;
  }

  findMovie = (movieId) => {
    const selectedMovie = this.state.movies.find((movie) => {
      return movie.id === movieId;
    });
    this.props.selectMovie(selectedMovie);
  }

  filteredList = (searchValue) => {

      const newMovies = this.state.movies.filter((movie) => {
        const text = (`${ movie.title } ${ movie.releaseDate }`).toUpperCase();
        return text.includes(searchValue.toUpperCase());
      });
  }

  filterLibrary = (search) => {
    this.setState({
      searchTerm: search,
      movies: this.filteredList(search),
    });
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
        dateFormatting={this.formatDate}
      />
    });
    
    return movieList
  }

  render() {
    return (
      <div>
         <LibrarySearch searchCallback={this.filterLibrary} />
        { this.makeMovieList() }
      </div>
    )
  }

}

RentalLibrary.propTypes = {
  selectMovie: PropTypes.func.isRequired
}

export default RentalLibrary;