import React, { Component } from 'react';

class MyProducts extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);        
    }

    render() {
        return(
            <div className="container">
                <h1>MyProducts Page</h1>
            </div>
       )
    }
}
export default MyProducts;
