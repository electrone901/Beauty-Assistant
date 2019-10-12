import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarC from "./component/NavbarC";
import Home from "./component/Home";
import ProductInfo from "./component/ProductInfo";
import Disposal from "./component/Disposal";
import MyProducts from "./component/MyProducts";
import RewardPoints from "./component/RewardPoints";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarC />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product-info" component={ProductInfo} />
              <Route exact path="/my-products" component={MyProducts} />
              <Route exact path="/reward-points" component={RewardPoints} />
              <Route exact path="/disposal" component={Disposal} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
