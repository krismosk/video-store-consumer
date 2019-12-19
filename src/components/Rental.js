import React, { Component } from 'react';
import axios from 'axios';

let date = new Date();
date.setDate(new Date().getDate() + 7);

class Rental extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rental: undefined,
      dueDate: date,
    };
  }

  createRental = (movie, customer, dueDate) => {
    let params = {
      customer_id: customer.id,
      movie_id: movie.id,
      due_date: dueDate.toISOString(),
    }

    axios.post(`https://video-store-backend.herokuapp.com/rentals/${movie.title}/check-out`, params)
    .then((response) => {
      this.setState({rental: response.data});
      console.log(response.data);
      this.clearRental();
      this.props.clearSelection();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  clearRental = () => {
    this.setState({
      rental: '',
    });
  }

  showRental = () => {
    const showMovie = this.props.movie ? <p>{this.props.movie.title}</p> : "";
    const showCustomer = this.props.customer ? <p>{this.props.customer.name}</p> : "";
    const showRental = this.state.rental ? <p>{this.state.rental}</p> : "";
    return (
      <div>
        <p>{showMovie}</p>
        <p>{showCustomer}</p>
        <p>{`${showRental}`}</p>
        <p></p>
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