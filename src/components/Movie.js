import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const Movie = (props) => {

  return(
    <section className='MovieCard'>
      <div>
      <img src={props.image} className='searchIcon' alt={`${props.title}`}/>
      </div>
      <div>
      <button 
        type='button'
        className='button'
        onClick={() => {props.findMovie(props.id)}}
      >
      Select</button>
      <h3 className='searchMovieTitle'> {props.title} </h3>
      <p className='searchDate'> {props.dateFormatting(props.releaseDate)} </p>
      <p className='searchOverview'> {props.overview} </p>
      <p className='inventory'> Inventory Available: {props.inventory} </p>
      </div>
      

      
    </section>
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
