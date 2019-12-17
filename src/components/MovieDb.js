import React, { Component } from 'react';
class MovieDb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }


render () {

return (
  <section>
      <div>
        {/* <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.isChecked} /> */}
        <input id={this.props.id} type="checkbox" checked={this.state.isChecked} />
        <label htmlFor={this.props.id}>{this.props.title}</label>
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