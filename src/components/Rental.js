import React, { Component } from 'react';
import axios from 'axios';

let date = new Date();
date.setDate(new Date().getDate() + 7);

 // make rental conditionally render if it has at least one customer or one movie

class Rental extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rental: '',
      dueDate: date,
    };
  }

  createRental = (movie, customer, dueDate) => {
    let params = {
      customer_id: customer.id,
      movie_id: movie.id,
      due_date: dueDate.toISOString(),
    }

    axios.post(`http://localhost:3000/rentals/${movie.title}/check-out`, params)
    .then((response) => {
      this.setState({rental: response.data})
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    return (
    <div>
      <section>
        <p>{this.props.movie.title}</p>
        <p>{this.props.customer.name}</p>
        <p>{`${this.state.rental}`}</p>
        <button onClick={() => {this.createRental(this.props.movie, this.props.customer, this.state.dueDate)}}>Checkout Rental</button>
      </section>
    </div>
    )
  }
}

export default Rental;