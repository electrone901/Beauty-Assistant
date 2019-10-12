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
    let url = `https://hack-14.herokuapp.com/getByID/1`;
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

  }
  handleError = err => {
    console.error(err);
  }
  render() {
    console.log("my", this.state.data)
    let item;
    if(this.state.data) {
      item = this.state.data.Product;
      console.log("Product. Ingredience", this.state.data.Product.Ingredience, "item",item.Ingredience)
    }
    return (
      <div className="container">
        {
          this.state.data ?  <div className="row">
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
                <p className="text-secondary">{item.name}</p>
                <p>What it is: {item.showUsers}</p>
                <div className="d-flex flex-row align-items-center">
                    <img src={star} alt="Icon1"/>
                    <p>Hordeum Vulgare (Barley) Extract\Extrait D'Orge, Cucumis Sativus(Cucumber) Fruit Extract, Helianthus
                        Annuus (Sunflower) Seedcake</p>
                    {/* <p>Hordeum Vulgare (Barley) Extract\Extrait D'Orge, Cucumis Sativus(Cucumber) Fruit Extract, Helianthus
                        Annuus (Sunflower) Seedcake</p> */}
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
      </div>: <div className="col-sm .bg-warning">
                <img src={spinner} className="img-fluid" alt="Product1"/>
            </div>
        }


{/* Ingredience: "Water / Aqua / Eau, Sodium Laureth Sulfate, Sodium Chloride, Cocamidopropyl Hydroxysultaine, Lauramidopropyl Betaine, Sodium Cocoyl Sarcosinate, Tea-Cocoyl Glutamate, Di-PPG-2 Myreth-10 Adipate, Aloe Barbadensis Leaf Juice, PEG-120 Methyl Glucose Dioleate, Sucrose, Sodium Hyaluronate, Cetyl Triethylmonium Dimethicone PEG-8 Succinate, Butylene Glycol, Hexylene Glycol, Polyquaternium-7, Laureth-2, Caprylyl Glycol, Sodium Sulfate, Tocopheryl Acetate, EDTA, Disodium EDTA, Phenoxyethanol."
containerType: "C98"
exp: "2020-06-12T05:42:23.314Z"
pid: "1"
price: "22"
 */}

        {/* <div className="row">
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
        </div> */}
    
      </div>
    )
  }
}
export default ProductInfo;