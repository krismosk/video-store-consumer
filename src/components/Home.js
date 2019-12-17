import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom'


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Search from "./Search";
import RentalLibrary from "./RentalLibrary";
import CustomerList from "./CustomerList";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: 'hi'
    };
  }
    

  // add function
  selectMovie = (movie) => {
    console.log('MOVIE SHOULD BE HERE')
    this.setState({ 
      selectedMovie: movie
    });
  }

  // fiter function?
  // create rental function

  render () {
    return (
      <HashRouter>
      <div className="App">
          <h1>Ada Movie Store</h1>
          <ul className="header">
          
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/customers">Customers</NavLink></li>
            {/* <li><NavLink to="/rentals">Rentals</NavLink></li> */}
          </ul>
          <div className="content">
          
            <Route path="/search" component={Search}/>
            <Route path="/movies" render={() => <RentalLibrary selectMovie={this.selectMovie}/>}/>
            <Route path="/customers" component={CustomerList}/>
            {/* <Route path="/rentals" component={Rentals}/> */}
          </div>
        </div>
        </HashRouter>

    )
  }
}

export default Home;
