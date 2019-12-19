import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalCard.css';

const RentalCard = ({ rentalId, movieTitle, customerId, customerName, checkoutDate, dueDate, checkinRental }) => {
  let date = new Date();
  date = date.toISOString();
  date = date.split('T')[0];

  const overdueFormatting = dueDate < date ? <p className="badge badge-danger">OVERDUE</p> : "";

  return (
  <div className="card-deck rental-card">
    <div className="card bg-light">
      <div className="card-body">
        { overdueFormatting }
        <p>Title: { movieTitle }</p>
        <p>Customer: { customerName }</p>
        <p>Checkout date: { checkoutDate } </p>
        <p>Due date: { dueDate }</p>
        <button className="btn btn-primary" size="sm" onClick={() => {checkinRental(customerId, movieTitle, rentalId)}} type="button">Check in Rental</button>       
      </div>
    </div>
  </div>
  )
}

RentalCard.propTypes = {
  rentalId: PropTypes.number,
  movieTitle: PropTypes.string.isRequired,
  customerId: PropTypes.number,
  customerName: PropTypes.string.isRequired,
  checkoutDate: PropTypes.instanceOf(Date).isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
  checkinRental: PropTypes.func.isRequired,
};

export default RentalCard;