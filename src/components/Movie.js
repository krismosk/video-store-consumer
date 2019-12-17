import React, { Component } from 'react';

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
  )
}

export default Movie;