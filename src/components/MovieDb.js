import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDb.css';
class MovieDb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

formatDate = (date) => {
  const monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

  let newDate = new Date(date);
  let formattedDate = monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear();
  return formattedDate;
}
render () {

return (
  <section className="MovieCard">
      <div>
        <img src={this.props.image} alt={this.props.name} className="searchIcon"/>
      </div>
      <div>
        <button 
          type='button'
          className='button searchAdd'
          onClick={() => {this.props.addMovieCallback(this.props)}}
          >
          Add</button>
        <h3 className="searchMovieTitle">{this.props.title}</h3>
        <p className="searchDate">{this.formatDate(this.props.releaseDate)}</p>
        <p className="searchOverview">{this.props.overview}</p>
      {/* </div>
      <div> */}
        {/* <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.isChecked} /> */}
        
      </div>
  </section>
  )
}
};

MovieDb.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  externalId: PropTypes.number.isRequired,
  addMovieCallback: PropTypes.func.isRequired,
};

export default MovieDb;
