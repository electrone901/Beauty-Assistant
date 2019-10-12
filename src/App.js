import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import ProductInfo from "./component/ProductInfo";
import Disposal from "./component/Disposal";
import MyProducts from "./component/MyProducts";
import RewardPoints from "./component/RewardPoints";
import QrReaderComponet from "./component/QrReaderComponet";

import "./fonts-latest.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                id="searchInput"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/scanner" component={QrReaderComponet} />
              <Route exact path="/product-info/:id" component={ProductInfo} />
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
