import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalCard.css';
import './Movie.css';

const Movie = (props) => {
  
  return(
    <div className="card-deck rental-card">
      <div className="card bg-light">
        <div className="card-body">
          <img className="movie-img" src={props.image} alt={`${props.title}`}/>
          <p>{props.title}</p>
          <p>{props.overview}</p>
          <p>{props.releaseDate}</p>
          <p>{props.inventory}</p>
          <button 
            className="btn btn-primary" size="sm" 
            type='button'
            onClick={() => {props.findMovie(props.id)}}>
          Select</button>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  inventory: PropTypes.number,
  findMovie: PropTypes.func.isRequired
}

export default Movie;
