import React, { Component } from "react";
import Footer from "./Footer";

import "../App.css";

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
        <h1 id="featuredItemHeader">Featured Item</h1>
        <h3 id="featuredItemText">Moisturizing Lotion</h3>
        <img
          alt={"Latest Product Raising Awareness"}
          id="featuredItems"
          src={require("../img/featuredItem.jpg")}
        />
        <h2 id="ecoItemHeader">Most Eco Friendly Item</h2>
        <h3 id="ecoItemText">Environmental Pack</h3>
        <img id="ecoItems" src={require("../img/eco.jpg")} />
        <Footer />
      </div>

      // <img
      // id="featuredItems"
      // className="img-fluid"
      // src={require("../img/featuredItem.jpg")}
      // />
      // <h3 id="featuredText">
      // Featured Item of <br />
      // <span id="bcm">Breast Cancer Month</span>
      // </h3>
    );
  }
}
export default Home;
