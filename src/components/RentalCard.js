import React, { Component } from 'react';

const RentalCard = ({ rentalId, movieTitle, customerId, customerName, checkoutDate, dueDate, checkinRental }) => {
  
  return (
  <div>
    <section>
      <p>{ movieTitle } { customerName } { checkoutDate } { dueDate }</p>
    </section>
    <button onClick={() => {checkinRental(customerId, movieTitle, rentalId)}} type="button">Check in Rental</button>
  </div>
  )
}

export default RentalCard;