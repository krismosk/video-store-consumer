import React, { Component } from 'react';
import axios from 'axios';

let date = new Date();
date.setDate(new Date().getDate() + 7);

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

  showRental = () => {
    const showMovie = this.props.movie ? <p>{this.props.movie.title}</p> : "";
    const showCustomer = this.props.customer ? <p>{this.props.customer.name}</p> : "";

    return (
      <div>
        <p>{showMovie}</p>
        <p>{showCustomer}</p>
        <p>{`${this.state.rental}`}</p>
        <button onClick={() => {this.createRental(this.props.movie, this.props.customer, this.state.dueDate)}}>Checkout Rental</button>
      </div>
    )
  }

  render() {
    const rentalContent = this.props.movie || this.props.customer ? <p>{ this.showRental() }</p> : "";
    
    return (
    <div>
      <section>
        { rentalContent }
      </section>
    </div>
    )
  }
}

export default Rental;