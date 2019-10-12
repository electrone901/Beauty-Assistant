import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ProductInfo from './component/ProductInfo';
import Disposal from './component/Disposal';
import MyProducts from './component/MyProducts';
import RewardPoints from './component/RewardPoints';
import QrReaderComponet from './component/QrReaderComponet';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/scanner" component={QrReaderComponet} />
              <Route exact path="/product-info/:id" component={ProductInfo} />
              <Route exact path="/my-products" component={MyProducts} />
              <Route exact path="/reward-points" component={RewardPoints} />
              <Route exact path="/disposal" component={Disposal} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
