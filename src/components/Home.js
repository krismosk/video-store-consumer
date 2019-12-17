import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Search from "./Search";
import RentalLibrary from "./RentalLibrary";
import CustomerList from "./CustomerList";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedCustomer: "",
    };
  }
  
  // add function
  // fiter function?
  // create rental function

  selectCustomer = (customer) => {
    this.setState({
      selectedCustomer: customer,
    });
  }

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
              <Route path="/movies" component={RentalLibrary}/>
              <Route path="/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
              {/* <Route path="/rentals" component={Rentals}/> */}
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default Home;