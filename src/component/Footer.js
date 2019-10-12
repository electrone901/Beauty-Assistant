import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-footer">
        <div className="footer"> </div>
        <img
          className="breast-size"
          className="img-fluid"
          alt={"Breast Cancer Ribbon"}
          src={require("../img/ribbon.jpg")}
        />
      </div>
    );
  }
}
export default Footer;
