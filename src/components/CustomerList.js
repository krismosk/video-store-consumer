import React, { Component } from 'react';
import Customer from './Customer.js';
import axios from 'axios';


const createCustomerComponents = (customers) => {
  return customers.map((customer, i) => {
    return <Customer 
      key={i}
      {...customer}
    />
  });
}

const CustomerList = ({customers}) => {
  return (
    <div>
      { createCustomerComponents(customers) }
    </div>
  )
}

// class CustomerList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//     };
//   }

//   // componentDidMount () {
//   //   axios.get('http://localhost:3001/customers')
//   //     .then((response) => {
//   //       this.setState({
//   //         customers: response.data,
//   //       });
//   //     })
//   //     .catch((error) => {
//   //       console.log('error');
//   //     });
//   // }

//   makeCustomerList() {
//    const customerList = props.customers.map((customer) => {
//       return <Customer
//         name={customer.name}
//       />
//     })

//     return customerList;
//   }

//   render () {
//     return (
//       <div>
//         { this.makeCustomerList() }
//       </div>
//     )
//   }
// }

export default CustomerList;