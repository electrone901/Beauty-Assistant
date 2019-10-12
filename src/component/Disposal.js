import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bottle from '../img/dis.jpg';

class Disposal extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            data: {
                name: "Bottle of Plastic",
                materials: "Plastic ", 
                type: "PETE 2", 
                weight: ".00 libs",
                experation: "Ranges from 1 to 24 months (from scanned date)",
                location: "29-55 Hunters Point Ave, Long Island City, NY 11101"
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);        
    }

    render() {
        return(
            <div className="container all">
                <p className="title">Disposal Info</p>
                <div className="col-sm .bg-warning">
                    <img src={bottle} className="img-fluid" alt="Product1"/>
                </div>
                <div className="">
                    <div className="card-body">
                        <p> <span className="field-name">Name: </span>{this.state.data.name}</p>
                        <p> <span className="field-name">Materials: </span>{this.state.data.materials}</p>
                        <p> <span className="field-name">Type: </span>{this.state.data.type}</p>
                        <p> <span className="field-name">Weight: </span>{this.state.data.weight}</p>
                        <p> <span className="field-name">Experation Date: </span>{this.state.data.experation}</p>
                        <p> <span className="field-name">Dropping Off Location: </span>{this.state.data.location}</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Carbon Offset Calculation</h6>
                        <h6 className="card-subtitle mb-2 text-muted">5.56 Kgs</h6>
                    </div>
                </div>
                <div className="text-center">
                    <a href={`http://maps.google.com/?q=`+ this.state.data.location} target="_blank" className="btn btn-primary btn-lg btn-block"><i className="fa fa-map-marker" style={{"color":"red", "fontSize":"30px"}}></i> Get Directions</a>
                </div>
            </div>
       
       )
    }
}
export default Disposal;
