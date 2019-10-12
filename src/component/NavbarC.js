import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import logo from '../img/logoOf.png';
import logo from "../img/logo.svg";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
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
            <Nav.Link to="/">
              <Link to="/">Explore</Link>
            </Nav.Link>
            <Nav.Link to="/about">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link to="/my-products">
              <Link to="/my-products">My Products</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarC;
