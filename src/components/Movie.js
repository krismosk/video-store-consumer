import React, { Component } from 'react';

const Movie = (props) => {
  return(
    <section>
      <p> {props.title} </p>
      <p> {props.overview} </p>
      <p> {props.releaseDate} </p>
      <p> {props.inventory} </p>
      <img src={props.image} alt={`${props.title}`}/>

      <button 
        type='button'
        onClick={() => {props.selectMovieCallback(props.id)}}
      >
      </button>
    </section>
  )
}

export default Movie;