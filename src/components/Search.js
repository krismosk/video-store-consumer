import React, { Component } from 'react';
import PropTypes from 'prop-types';
// npm install bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';
import axios from 'axios';
import MovieDb from './MovieDb'
import { nullLiteral } from '@babel/types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: [],
    };
  }
// const SearchBar = ({ searchTerm, searchChangeCallback }) => {

searchDatabase = (searchTerm) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a4e96005d8a3d373dc3607963dc38e8f&query=${searchTerm}`)
  .then((response) => {
    this.setState({
      searchTerm: searchTerm,
      results: response.data.results,
    });
    this.displayResults();
  })
  .catch((error) => {
    console.log('error');
  });
}

addMovie = (movie) => {
  let params = {
    title: movie.title,
    overview: movie.overview,
    release_date: movie.releaseDate,
    image_url: movie.image,
    external_id: movie.externalId
  }

  axios.post('http://localhost:3000/movies', params)
  .then((response) => {
    // this.setState({
    //   movies: response.data
    // });
    console.log(response.data)
  })
  .catch((error) => {
    // come back to handle errors better
    console.log(error.message)
  });
}


displayResults = () => {
  const resultList = (this.state.results).map((movie, i) => {
    return <MovieDb title={movie.title} 
            id={i}
            overview={movie.overview} 
            releaseDate={movie.release_date} 
            image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
            externalId={movie.id}
            addMovieCallback={this.addMovie}/>
  });
  return resultList;
}

render () {
console.log(this.state.moviesToAdd)
return (
  <section>
      <div>
        <label className="search-bar--label" htmlFor="searchBar">Search Movie Database: </label>
      </div>
      <input
        onChange={(event) => { this.searchDatabase(event.target.value) }}
        value={this.searchTerm}
        name="searchBar"
        id="searchBar"
        className="search-bar"
      />
      <div>{this.displayResults()}</div>
    </section>
  )
}
};

SearchBar.propTypes = {
  // searchChangeCallback: PropTypes.func.isRequired,
  // searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;