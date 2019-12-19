import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      notification: false,
      notifications: '',
      movieToAdd: ''
    };
  }
// const SearchBar = ({ searchTerm, searchChangeCallback }) => {

searchDatabase = (searchTerm) => {
  this.resetNotification();
  axios.get(`http://localhost:3000/movies?query=${searchTerm}`)
  .then((response) => {
    this.setState({
      searchTerm: searchTerm,
      results: response.data,
    });
    this.displayResults();
  })
  .catch((error) => {
    console.log('error');
  });
}

addMovie = (movie) => {
  this.resetNotification();
  let params = {
    title: movie.title,
    overview: movie.overview,
    release_date: movie.releaseDate,
    image_url: movie.image,
    external_id: movie.externalId
  }

  axios.post('http://localhost:3000/movies', params)
  .then((response) => {
    this.setState({
      notification: true,
      notifications: "success",
      movieToAdd: movie.title,
    })
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error.message);
    this.setState({
      notification: true,
      notifications: error.message,
    })
  });
}

displayNotification = () => {
  if (this.state.notifications == "Request failed with status code 500") {
  return (
    <p className="notification error">This Movie is Already Added to the Rental Library</p>
  )
  } else if (this.state.notifications == "success") {
    return (
    <p className="notification success">{this.state.movieToAdd} Has Been Added to Rental Library</p>
    )
  } else {
    return (
      <p className="notification warning">{this.state.errors}</p>
    )
  }
}

resetNotification = () => {
  this.setState({
    notification: false,
    notifications: [],
  });
}


displayResults = () => {
  const resultList = (this.state.results).map((movie, i) => {
    return <MovieDb title={movie.title} 
            id={i}
            overview={movie.overview} 
            releaseDate={movie.release_date} 
            image={movie.image_url} 
            externalId={movie.id}
            addMovieCallback={this.addMovie}/>
  });
  return resultList;
}

render () {
return (
  <section>
      {this.state.notification ? this.displayNotification(this.state.notifications) : ''}
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

export default SearchBar;