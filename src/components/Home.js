import React, { Component } from 'react';
import CustomerList from './CustomerList.js'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  // add function
  // select function
  // fiter function?
  // create rental function

  render () {
    return (
      <div><CustomerList /></div>
    )
  }
}

export default Home;