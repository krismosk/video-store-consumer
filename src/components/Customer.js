import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RentalCard.css';

const Customer = ({ id, name, address, city, state, postalCode, phone, findCustomer }) => {
  
  return (
  <div>
    <section>
      <p>{ id }</p>
      <p>{ name }</p>
      <p>{ address }</p>
      <p>{ city }</p>
      <p>{ state }</p>
    </section>
    <button onClick={() => {findCustomer(id)}} type="button">Select</button>
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