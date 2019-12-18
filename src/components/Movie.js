import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  
  return(
    <section>
      <img src={props.image} alt={`${props.title}`}/>
      <p> {props.title} </p>
      <p> {props.overview} </p>
      <p> {props.releaseDate} </p>
      <p> {props.inventory} </p>
      
      

      <button 
        type='button'
        onClick={() => {props.findMovie(props.id)}}
      >
      Select</button>
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
