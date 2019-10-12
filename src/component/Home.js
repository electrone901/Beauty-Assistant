import React, { Component } from "react";
import logo from "../img/logo.svg";

import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <h1>Featured Item Here</h1>
        <img src="../img/featuredItem.jpg" />
        <h1>Most Eco Friendly Item</h1>
      </div>
    );
  }
}
export default Home;
