import React, { Component } from "react";

class About extends Component {
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
        <h1>About Page</h1>
      </div>
    );
  }
}
export default About;
