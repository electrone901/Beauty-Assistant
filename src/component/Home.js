import React, { Component } from "react";
import Footer from "./Footer";

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
        <img
          alt={"Latest Product Raising Awareness"}
          className="img-fluid"
          src={require("../img/featuredItem.jpg")}
        />
        <h1>Most Eco Friendly Item</h1>
        <Footer />
      </div>
    );
  }
}
export default Home;
