import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/simple-line-icons.css';
import './css/flaticon.css';


import product from './img/product1.png'

class SubMain extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
         <section className="four-boxes">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="box">
                        <img src={require('./img/icon1.png')} />
                        <h2 onClick={ (event) => { this.props.incrementItem(event) }}>{ this.props.clicks }dasfds</h2>
                        <h2 onClick={ (event) => { this.props.incrementItemDup(event) } }>{ this.props.clicks }fdgfg</h2>
                        <h3>Secure Payments </h3>
                        <p className="light-text-color">Moving your card details to a much more secured place</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                         <img src={require('./img/icon2.png')}/>
                        <h3>TRUSTPAY</h3>
                        <p className="light-text-color">100% Payment Protection. Easy Return Policy</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <img src={require('./img/icon3.png')} />
                        <h3>help center</h3>
                        <p className="light-text-color">Browse our FAQs or submit your query here for more info.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                         <img src={require('./img/icon4.png')} />
                        <h3>shop on the go</h3>
                        <p className="light-text-color">Download the app and get exciting app only offers for you</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

	     );
	}

}

export default SubMain;