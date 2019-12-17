import React, { Component } from 'react';
import CustomerList from './CustomerList.js';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      customers: [],
      selectedCustomer: '',
      selectedMovie: '',
    };
  }

  addCustomers = () => {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({
          customers: response.data,
        });
      })
      .catch((error) => {
        console.log('error');
      });
  }

  // listCustomers(customers) {
  //   // const customerElements = customers.map((customer, i) => {
  //   //   return (
  //   //     <CustomerList 
  //   //       customers={this.state.customers}
  //   //       // selectCustomerCallback
  //   //     />
  //   //   );
  //   // });
    
  //   return customerElements;
  // }
  

  // selectCustomer = () => {

  // }


  // add function
  // select function
  // fiter function?
  // create rental function

  render () {
    return (
      <div>
        <ul>
          {this.listCustomers(this.state.customers)}
        </ul>
      </div>
    )
  }
}

export default Home;