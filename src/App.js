import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarC from "./component/NavbarC";
import Home from "./component/Home";
import ProductInfo from "./component/ProductInfo";
import Disposal from "./component/Disposal";
import MyProducts from "./component/MyProducts";
import RewardPoints from "./component/RewardPoints";
import About from "./component/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarC />
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
              <input
                id="searchInput"
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product-info" component={ProductInfo} />
              <Route exact path="/my-products" component={MyProducts} />
              <Route exact path="/reward-points" component={RewardPoints} />
              <Route exact path="/disposal" component={Disposal} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
