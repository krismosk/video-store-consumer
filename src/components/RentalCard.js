import React, { Component } from 'react';
import './RentalCard.css';

const RentalCard = ({ rentalId, movieTitle, customerId, customerName, checkoutDate, dueDate, checkinRental }) => {
  
  return (
  <div>
    <section className="RentalCard">
      <p>Title: { movieTitle }</p>
      <p>Customer: { customerName }</p>
      <p>Checkout date: { checkoutDate } </p>
      <p>Due date: { dueDate }</p>
    </section>
    <button onClick={() => {checkinRental(customerId, movieTitle, rentalId)}} type="button">Check in Rental</button>
  </div>
  )
}

export default RentalCard;