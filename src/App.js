import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import RentalLibrary from "./components/RentalLibrary";
import CustomerList from "./components/CustomerList";
// import Rentals from "./components/Rentals";


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
          <h1>Ada Movie Store</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/customers">Customers</NavLink></li>
            {/* <li><NavLink to="/rentals">Rentals</NavLink></li> */}
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/movies" component={RentalLibrary}/>
            <Route path="/customers" component={CustomerList}/>
            {/* <Route path="/rentals" component={Rentals}/> */}
          </div>
        </div>
        </HashRouter>
    );
  }

}

export default App;
