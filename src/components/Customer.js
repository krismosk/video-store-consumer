import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalCard.css';

const Customer = ({ id, name, address, city, state, postalCode, phone, findCustomer }) => {
  
  return (
  <div className="card-deck rental-card">
    <div className="card bg-light">
      <div className="card-body">
        <p>{ name }</p>
        <p>{ address }, { city }, { state }</p>
        <button className="btn btn-primary" size="sm"  onClick={() => {findCustomer(id)}} type="button">Select</button>
      </div>
    </div>
  </div>
  )
}

Customer.propTypes = {
  findCustomer: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
}

export default Customer;