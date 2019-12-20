import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './LibrarySearch.css';
import axios from 'axios';
import { nullLiteral } from '@babel/types';

class LibrarySearch extends React.Component {
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

filteredList = () => {
  return this.state.petList.filter((pet) => {
    const text = (`${ pet.name } ${ pet.about } ${ pet.location } ${ pet.species }`).toUpperCase();

    return text.includes(this.state.searchTerm.toUpperCase());
  });
}

filterPets = (searchTerm) => {
  this.setState({
    searchTerm,
  });
}
// displayResults = () => {
//   const resultList = (this.state.results).map((movie, i) => {
//     return <MovieDb title={movie.title} 
//             id={i}
//             overview={movie.overview} 
//             releaseDate={movie.release_date} 
//             image={movie.image_url} 
//             externalId={movie.id}
//             addMovieCallback={this.addMovie}/>
//   });
//   return resultList;
// }

render () {
return (
  <section>
      {this.state.notification ? this.displayNotification(this.state.notifications) : ''}
      <div>
        <label className="search-bar--label" htmlFor="searchBar">Search Rental Library: </label>
      </div>
      <input
        onChange={(event) => { this.props.searchCallback(event.target.value) }}
        value={this.searchTerm}
        name="searchBar"
        id="searchBar"
        className="search-bar"
      />
      {/* <div>{this.displayResults()}</div> */}
    </section>
  )
}
};

export default LibrarySearch;