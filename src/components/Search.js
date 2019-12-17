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
      movieToAdd: undefined,
      results: [],
    };
  }
// const SearchBar = ({ searchTerm, searchChangeCallback }) => {

searchDatabase = (searchTerm) => {
  
  console.log(`https://api.themoviedb.org/3/search/movie?api_key=a4e96005d8a3d373dc3607963dc38e8f&query=${searchTerm}`);
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

displayResults = () => {
  console.log(this.state.searchTerm);
  console.log(this.state.results);
  console.log(this.state.results[0]);
  const resultList = (this.state.results).map((movie) => {
    return <MovieDb title={movie.title} overview={movie.overview} release_date={movie.release_date} image_url={movie.poster_path} external_id={movie.id}/>
  });
  return resultList;
}

render () {

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