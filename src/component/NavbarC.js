import React, { Component } from "react";
import { Link } from "react-router-dom";


import {
  Navbar,
  Nav,
} from "react-bootstrap";

class NavbarC extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">MakECO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div>
              <Link to="/">Explore</Link>
            </div>
            <div >
              <Link to="/about">About</Link>
            </div>
            <div >
              <Link to="/my-products">My Products</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarC;
