import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import ProductInfo from './component/ProductInfo';
import Disposal from './component/Disposal';
import MyProducts from './component/MyProducts';
import RewardPoints from './component/RewardPoints';
import QrReaderComponet from './component/QrReaderComponet';

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
              <Route exact path="/" render = {() =>{
                <Home/>
              }} />
              <Route exact path="/scanner" render ={()=>{
                <QrReaderComponet/>
              }}/>
              <Route exact path="/product-info/:id" render={()=>{
                <ProductInfo/>
              }} />
              <Route exact path="/my-products" render ={()=>{
                <MyProducts/>
              }} />
              <Route exact path="/reward-points" render = {()=>{
                <RewardPoints/>
              }} />
              <Route exact path="/disposal" render = {()=>{
                <Disposal/>
              }} />
              <Route exact path="/about" render = {()=>{
                <About/>
              }} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
