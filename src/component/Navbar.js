import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import logo from '../img/logoOf.png';
import logo from '../img/logo.svg';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }

  
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light btn-light sticky-top">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            {/* <img id="logo" src={logo} alt="logo"/> */}
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav"> 
            <ul className="navbar-nav text-right">

              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link" to="/my-roducts">
                  My Products
                </Link>
              </li>
            </ul>
           
          </div>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;

