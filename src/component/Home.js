import React, { Component } from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-slideshow-image";

import logo from "../img/logo.png";

import { Link } from "react-router-dom";

import "../App.css";

// const slideImages = ["../img/eco.jpg", "../img/eco.jpg", "../img/eco.jpg"];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img class="caro" src={require("../img/feat1.png")} />
            <br />
            Aerin
            <br />
            Hibiscus Palm
            <br />
            $180
          </div>
        </div>
        <div className="each-slide">
          <img class="caro" src={require("../img/feat2.png")} />
          <br />
          GLAMGLOW® SUPERMUD® Clearing Treatment - 0.5 oz.
          <br />
          $25
        </div>
        <div className="each-slide">
          <img class="caro" src={require("../img/feat3.png")} />
          <br />
          Jo Malone London <br />
          Pomegranate Noir Cologne
          <br />
          $199.00
        </div>
        <div className="each-slide">
          <img class="caro" src={require("../img/feat4.png")} />
          <br />
          Clinique
          <br /> Dramatically Different Moisturizing Lotion+ with Pump, 4.2 oz
          <br />
          $28
        </div>
        <div className="each-slide">
          <img class="caro" src={require("../img/feat5.png")} />
          <br />
          BECCA
          <br />
          Skin Love Weightless Blur Foundation
          <br />
          $44
        </div>
      </Slide>
      <br />
    </div>
  );
};

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
        <div className="buttonContainer">
          <Link className="nav-link" to="/scanner">
            <div className="row">
              <div className="col-3">
                <img
                  id="cameraIcon"
                  class="icon"
                  src={require("../img/camera.png")}
                />
              </div>
              <div className="col-9">
                <br />
                Scan Product For Product Information
              </div>
            </div>
          </Link>
          <Link className="nav-link" to="/scanner">
            <div className="row">
              <div className="col-3">
                <img class="icon" src={require("../img/disposal.png")} />
              </div>
              <div className="col-9">
                <br />
                Dispose Makeup Container
              </div>
            </div>
          </Link>
          <Link className="nav-link" to="/my-products">
            <div id="lastRow" className="row">
              <div className="col-3">
                <img
                  id="analyticsIcon"
                  class="icon"
                  src={require("../img/analytics.png")}
                />
              </div>
              <div className="col-9">
                <br />
                My Analytics
              </div>
            </div>
          </Link>
        </div>
        <h2 id="featuredItemHeader">Estee Lauder Companies</h2>
        <h3 id="featuredItemText">Breast Cancer Campaign</h3>
        {/* <img
          alt={"Latest Product Raising Awareness"}
          id="featuredItems"
          src={require("../img/featuredItem.jpg")}
        /> */}
        <Slideshow></Slideshow>
        <h4 id="ecoItemHeader">
          Recommended Eco Friendly Item
          <img src={logo} id="logoImg" alt="logo" />
        </h4>
        <h3 id="ecoItemText">Environmental Pack</h3>
        <img id="ecoItems" src={require("../img/eco.jpg")} />
        <br />
        <a href="#buy-now">Buy Now</a>
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
