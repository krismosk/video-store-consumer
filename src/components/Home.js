import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Search from "./Search";
import Rental from "./Rental";
import RentalLibrary from "./RentalLibrary";
import CustomerList from "./CustomerList";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: '',
      selectedMovie: ''
    };
  }
    
  selectCustomer = (customer) => {
    this.setState({
      selectedCustomer: customer,
    });
  }

  selectMovie = (movie) => {
    console.log('MOVIE SHOULD BE HERE')
    this.setState({ 
      selectedMovie: movie
    });
  }

  // make rental conditionally render if it has at least one customer or one movie
  // pass createRental into the Renal component 
  // rental component will make a post request to backend API
  // do we want to save the rental in the front end? 

  render () {
    return (
      <HashRouter>
        <div className="App">
            <h1>Ada Movie Store</h1>
            <section><Rental movie={this.state.selectedMovie} customer={this.state.selectedCustomer}/></section>
            <ul className="header">
              <li><NavLink to="/search">Search</NavLink></li>
              <li><NavLink to="/movies">Movies</NavLink></li>
              <li><NavLink to="/customers">Customers</NavLink></li>
              {/* <li><NavLink to="/rentals">Rentals</NavLink></li> */}
            </ul>
            <div className="content">
              <Route path="/search" component={Search}/>
              <Route path="/movies" render={() => <RentalLibrary selectMovie={this.selectMovie}/>}/>
              <Route path="/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
              {/* <Route path="/rentals" component={Rentals}/> */}
            </div>
          </div>
      </HashRouter>
    )
  }
}

export default Home;
