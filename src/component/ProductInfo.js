import React, { Component } from 'react';
import confirmationImg from '../img/logo.svg';
import star from '../img/i1.png';
import itemImg from '../img/p1.png';
import unfriendly from '../img/i2.png';
import typeNumber from '../img/i3.png';
import spinner from '../img/spinner.gif';
 
class ProductInfo extends Component {
  state = {
    result: '',
    confirmationImg: true
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        confirmationImg: true
      })
    }
  }

  componentDidMount() {
    console.log("this.props", this.props.match.params.id)
  }
  handleError = err => {
    console.error(err);
  }
  render() {
    return (
      <div className="container">
        {/* <br/><br/>
        {
          this.state.confirmationImg ? 
          <p className="title">Scanning completed <img src={confirmationImg} className="confirmationImg" alt="logo"/></p>: 
          <p className="title">Scanning...</p>
        } */}


        <div className="row">
            <div className="col-sm .bg-warning">
                <img src={itemImg} className="img-fluid" alt="Product1"/>
            </div>
            <div className="col-sm">
              <div className="container mt-5">
                  <div className="d-flex flex-row justify-content-between">
                      <p className="font-weight-bold">CLINIQUE</p>
                      <div className="d-flex flex-row">
                          <p className="text-primary">Eco-Rate A 91%</p>
                      </div>
                  </div>
                  <p className="text-secondary">Dramatically Different Moisturizing Lotion+</p>
                  <p>What it is: A Dermatologist-developed face moisturizer that softens, smooths, and leaves skin glowing as
                      step three in Clinique's customized Three-Step Skin Care System.</p>
                  <div className="d-flex flex-row align-items-center">
                      <img src={star} alt="Icon1"/>
                      <p>Hordeum Vulgare (Barley) Extract\Extrait D'Orge, Cucumis Sativus(Cucumber) Fruit Extract, Helianthus
                          Annuus (Sunflower) Seedcake</p>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                      <img src={unfriendly} alt="Icon2"/>
                      <p>Phenoxyethanol</p>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                      <img src={typeNumber} alt="Icon2"/>
                      <p className="text-success">Plastic No.1 PETE is recyclable</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                      <p>Expiration Date: Oct.10.9102 - 7083 YEARS left</p>
                      <p>Bottle Content: 100%</p>
                  </div>
                  <p className="float-right">Made In U.S.</p>
              </div>
            </div>
          </div>
    
      </div>
    )
  }
}
export default ProductInfo;