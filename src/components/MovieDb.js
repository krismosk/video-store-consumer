import React, { Component } from 'react';
import './MovieDb.css';
class MovieDb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }


render () {

return (
  <section className="MovieCard">
      <div>
        <img src={this.props.image} alt={this.props.name} className="searchIcon"/>
      </div>
      <div>
        <h3 className="searchMovieTitle">{this.props.title}</h3>
        <p className="searchDate">{this.props.releaseDate}</p>
        <p className="searchOverview">{this.props.overview}</p>
      </div>
      <div>
        {/* <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.isChecked} /> */}
        <button 
        type='button'
        className='button searchAdd'
        onClick={() => {this.props.addMovieCallback(this.props)}}
        >
      Add to Rental Library</button>
      </div>
  </section>
  )
}
};

// SearchBar.propTypes = {
//   // searchChangeCallback: PropTypes.func.isRequired,
//   // searchTerm: PropTypes.string.isRequired,
// };

export default MovieDb;