import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Search from "./Search";
import Rental from "./Rental";
import RentalsList from "./RentalsList";
import RentalLibrary from "./RentalLibrary";
import CustomerList from "./CustomerList";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: undefined,
      selectedMovie: undefined,
      rentalSubmitted: false,
    };
  }
    
  selectCustomer = (customer) => {
    this.setState({
      selectedCustomer: customer,
    });
  }

  selectMovie = (movie) => {
    this.setState({ 
      selectedMovie: movie
    });
  }

  clearSelection = () => {
    this.setState({
      selectedCustomer: undefined,
      selectedMovie: undefined,
      rentalSubmitted: true,
    })
  }

  render () {
    return (
      <HashRouter>
        <div className="App">
            <h1>Ada Movie Store</h1>
            <section><Rental movie={this.state.selectedMovie} customer={this.state.selectedCustomer} clearSelection={this.clearSelection}/></section>
            <ul className="header">
              <li><NavLink to="/search">Search</NavLink></li>
              <li><NavLink to="/movies">Movies</NavLink></li>
              <li><NavLink to="/customers">Customers</NavLink></li>
              <li><NavLink to="/rentals">Rentals</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/search" component={Search}/>
              <Route path="/movies" render={() => <RentalLibrary selectMovie={this.selectMovie}/>}/>
              <Route path="/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
              <Route path="/rentals" component={RentalsList}/>
            </div>
          </div>
      </HashRouter>
    )
  }
}

export default Home;
