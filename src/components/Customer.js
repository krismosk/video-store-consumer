import React, { Component } from 'react';

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

export default Customer;