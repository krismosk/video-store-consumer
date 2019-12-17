import React, { Component } from 'react';
import CustomerList from './CustomerList.js'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  displayNav() {
    return (
      <nav>
        <button
        type="button"
        aria-label="Customers"
        >
          Customers
        </button>
    </nav>
    )
  }
  // add function
  // select function
  // fiter function?
  // create rental function

  render () {
    return (
      <div>
      <div>{this.displayNav}</div>
      <div><CustomerList /></div>
      </div>
    )
  }
}

export default Home;