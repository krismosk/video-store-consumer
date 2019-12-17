import React, { Component } from 'react';

class Rental extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }  

  render() {
    return (
    <div>
      <section>
        <p>{this.props.movie.title}</p>
        <p>{this.props.customer.name}</p>
      </section>
    </div>
    )
  }
}

export default Rental;