import React, { Component } from 'react';

const Customer = ({ id, name, address, city, state, postalCode, phone }) => {
  
  return (
  <div>
    <section>
      <p>{ id }</p>
      <p>{ name }</p>
      <p>{ address }</p>
      <p>{ city }</p>
      <p>{ state }</p>
    </section>
    <button type="button">Select</button>
  </div>
  )
}

export default Customer;