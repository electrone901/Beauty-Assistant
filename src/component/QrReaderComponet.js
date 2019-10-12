import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import confirmationImg from '../img/i1.png';
import check from '../img/check.png';
 
class QrReaderComponet extends Component {
  state = {
    product: {
      pid: "001",
      name: "Plastic"
    },
    result: '',
    confirmationImg: false
  }
 
  handleScan = data => {
    let pid = data;
    console.log("pid", pid);
    




    if (data) {
       this.setState({
        confirmationImg: true
      })
      console.log("setTime")
      setTimeout(
        function() {
          this.props.history.push(`/product-info/${pid}`)
        }.bind(this),
        1000
      )
      

      
      // api call 
      let url = `https://cnycserver.herokuapp.com/items/${pid}`;
      fetch(url)
      .then(res => {
        console.log('res YAY', res);
        return res.json();
      })
      .then((data) => {
          this.setState({data: data});
      })
      .catch((err) => {
          console.log('There was a problem with your fetch request' + err.message);
      });

      // this.setState({
      //   result: data,
      //   confirmationImg: true
      // })
    }
  }





  componentDidMount() {
    
  }
  handleError = err => {
    console.error(err);
  }
  render() {
    return (
      <div className="container">
        <br/><br/>
        {
          this.state.confirmationImg ? 
          <p className="text-center space-down">Scanning completed <br/> <img src={check} className="confirmationImg" alt="logo"/></p>: 
          <p className="text-center space-down">Please scan your item..</p>
        }


        {/* <p className="title">Scanning <img src={spinner} className="confirmationImg" alt="logo"/></p>

        <p>{this.state.a}</p>
        <p>PID: {this.state.product.pid}</p>
        <p>Name: {this.state.product.name}</p>
        <p>{this.state.result}: fool</p>
        <p>{this.state.result.pid}: yes</p>
        <p>{this.state.result.name}: maybe</p> */}

          <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qr-reader"
        />
        
      </div>
    )
  }
}
export default QrReaderComponet;