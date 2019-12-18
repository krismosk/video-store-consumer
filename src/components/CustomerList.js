import React, { Component } from 'react';
import Customer from './Customer.js';
import axios from 'axios';
import PropTypes from 'prop-types';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({
          customers: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }


  findCustomer = (customerId) => {
    const selectedCustomer = this.state.customers.find((customer) => {
      return customer.id === customerId;
    })
    
    this.props.selectCustomer(selectedCustomer);
  }

  makeCustomerList() {
   const customerList = this.state.customers.map((customer, i) => {
      return <Customer
        key={ i }
        id={ customer.id }
        name={ customer.name }
        address={ customer.address }
        city={ customer.city }
        state={ customer.state }
        postalCode={ customer.postalCode }
        phone={ customer.phone }
        findCustomer={ this.findCustomer }
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

CustomerList.propTypes = {
  selectCustomer: PropTypes.func.isRequired
}

export default CustomerList;