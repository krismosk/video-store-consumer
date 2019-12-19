import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './RentalCard.css';

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
      due_date: date.toISOString(),
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
    const showMovie = this.props.movie ? <p>Title: {this.props.movie.title}</p> : "";
    const showCustomer = this.props.customer ? <p>Customer: {this.props.customer.name}</p> : "";
    const showRental = this.state.rental ? <p>{this.state.rental}</p> : "";
    return (
      <div className="rental-card">
        <div className="card card-body bg-light">
          <p className="card-header">New Rental</p>
          <span>{showMovie}</span>
          <span>{showCustomer}</span>
          <p>{`${showRental}`}</p>
          <button className="btn btn-success" size="sm" onClick={() => {this.createRental(this.props.movie, this.props.customer, this.state.dueDate)}}>Checkout Rental</button>
        </div>
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

Rental.propTypes = {
  movie: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
};


export default Rental;