import React, { Component } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard.js';

class RentalsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: [],
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3000/rentals')
      .then((response) => {
        this.setState({
          rentals: response.data,
        });
      })
      .catch((error) => {
        console.log('error');
      });
  }

  makeRentalList() {
    const rentalList = this.state.rentals.map((rental, i) => {
       return <RentalCard
         key={ i }
         movieTitle={ rental.title }
         customerId={ rental.customer_id }
         customerName={ rental.name }
         rentalId={ rental.id }
         checkoutDate={ rental.checkout_date }
         dueDate={ rental.due_date }
         checkinRental= { this.checkinRental }
       />
     })
 
     return rentalList;
   }

  checkinRental = (customerId, movieTitle, rentalId) => {
    let params = {
      customer_id: customerId,
    }

    axios.post(`http://localhost:3000/rentals/${movieTitle}/return`, params)
    .then((response) => {
      const newRentals = this.state.rentals.filter((rental) => rental.id !== rentalId);
      this.setState({
        rentals: newRentals,
      });
      this.clearRental();
      this.props.clearSelection();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });


  }

  render() {
    return (
      <div>
        {this.makeRentalList()}
      </div>
    )
  }
}

export default RentalsList;

