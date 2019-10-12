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
  constructor() {
    super();
    this.state = { Transaction: [] };
    this.getUserTransaction = this.getUserTransaction.bind(this);
    this.getTransaction = this.getTransaction.bind(this);
  }

  getUserTransaction() {
    // axios.get("https://hack-14.herokuapp.com/transaction").then(result => {
    //   console.log(result.data.data);
    //   if (result) this.setState({ Transaction: result.data.data });
    // });

    //

    let url = `https://hack-14.herokuapp.com/transaction`;
    fetch(url)
      .then(res => {
        console.log("res YAY", res);
        return res.json();
      })
      .then(data => {
        console.log("this", data);
        this.setState({ Transaction: data.data.data });
      })
      .catch(err => {
        console.log(
          "There was a problem with your fetch request" + err.message
        );
      });
  }

  getTransaction() {
    return this.state.Transaction;
  }

  componentDidMount() {
    this.getUserTransaction();
  }
  render() {
    console.log("d", this.state.Transaction);
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
              <Route exact path="/" render={() => <Home />} />
              <Route
                exact
                path="/scanner"
                render={() => <QrReaderComponet />}
              />
              <Route
                exact
                path="/product-info/:id"
                render={() => <ProductInfo />}
              />
              <Route
                exact
                path="/my-products"
                render={() => (
                  <MyProducts getTransaction={this.getTransaction} />
                )}
              />
              <Route
                exact
                path="/reward-points"
                render={() => <RewardPoints />}
              />
              <Route exact path="/disposal" render={() => <Disposal />} />
              <Route exact path="/about" render={() => <About />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
