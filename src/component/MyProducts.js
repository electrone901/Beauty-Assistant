import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../img/i1.png';
import current from '../img/i1.png';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.1,
    duration: "100",
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

class MyProducts extends Component {
    constructor() {
        super();
        this.state = {
            previewPost: false,
            current: true,
            time: false,
            currentCount: 3,
            numberC: 100
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);  
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        console.log(this.state.currentCount)
        // useEffect();      
    }
    timer() {
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        console.log(this.state.currentCount)
        if(this.state.currentCount < 1) { 
            console.log("stop")
            this.setState({
                numberC: 0
              })
        }
      }


    getFavoritesDeals() {
        // toggle userDealsclass && favoriteclass to active
        if(this.state.current){
            this.setState({
                previewPost: true,
                current: false
            })
        }
        else {
            this.setState({
                previewPost: false,
                current: true,
            })
        }
    }

    // useEffect() {
    //     setCounter = 0;
    //     const interval = setInterval(() => {
    //         setCounter(0);
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval);
    //         this.setState({
    //             time:false
    //         })
    //     }
    // }

    render() {

        // const { width, height } = useWindowSize();
        
        let preview = <div className="container">
            <br/>
            <img src={history} className="figure-img img-fluid moreHeight" alt="logo"/> 
        </div>;

        let currentView = <div className="container">
            <br/>
            <img src={current} className="figure-img img-fluid" alt="bb"/> 
        </div>;
        
        return(
            <div className="container text-center">
                <Confetti
                numberOfPieces={this.state.numberC}
                    // width={width}
                    // height={height}
                />
                <h3>My Products</h3>

                <div className="text-center">
                    <button type="button" onClick={this.getFavoritesDeals.bind(this)}  className="btn btn-outline-secondary btn-sm">Pending </button>
                    <button type="button" onClick={this.getFavoritesDeals.bind(this)} className="btn btn-outline-secondary btn-sm">Previous </button>
                </div>
                <div>{this.props.getTransaction().map((result,i)=>{
                   return( 
                   <div className ="product-list" key={i}>
                        <div className ="middle fixedwidth">{result.name}</div>
                        <img className ="middle fixedwidth" src={require(`../img/PID${result.pid}.jpg`)} onClick={this.showDetails}/>
                        <div className ="highLight middle fixedwidth"> Approximate Exp: <div> {result.exp.toString().substring(0, 10)}</div></div>
                    </div>);
                })}</div>
                {
                    this.state.previewPost ? preview: ""
                    
                }
                {
                    this.state.current ? currentView: ""
                }
                <Link className="btn btn-primary btn-lg btn-block" to={`/`}>Go Home</Link>
            </div>
       )
    }
}
export default MyProducts;

