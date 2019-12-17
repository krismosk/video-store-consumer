import React, { Component } from 'react';
import Customer from './Customer.js';
import axios from 'axios';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
  }

  componentDidMount () {
<<<<<<< HEAD
    axios.get('http://localhost:3003/customers')
=======
    axios.get('http://localhost:3000/customers')
>>>>>>> KK/Home
      .then((response) => {
        this.setState({
          customers: response.data,
        });
      })
      .catch((error) => {
        console.log('error');
      });
  }

  makeCustomerList() {
   const customerList = this.state.customers.map((customer) => {
      return <Customer
        name={customer.name}
      />
    })

    return customerList;
  }

  render () {
    return (
      <div>
        { this.makeCustomerList() }
      </div>
    )
  }
}

export default CustomerList;