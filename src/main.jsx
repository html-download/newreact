import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/simple-line-icons.css';
import './css/flaticon.css';

import product from './img/product1.png'
import SubComponent from './_sub-main.jsx'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      restaurants : [
        {
            'name' : 'Name1',
            'image_path' : 'dasfdsa',
            'fav': 0,
            'price': 10.50,
            'dsafdas': 'dasfdasf'
        },
        {
            'name' : 'Name2',
            'image_path' : 'dasfdsa',
            'fav': 0,
            'price': 15.56,
            'dsafdas': 'dasfdasf'
        },
        {
            'name' : 'Name3',
            'image_path' : 'dasfdsa',
            'fav': 0,
            'price': 6.50,
            'dsafdas': 'dasfdasf'
        }
      ] 
    };

    this.incrementItem = this.incrementItem.bind(this);
    this.incrementItemDup = this.incrementItemDup.bind(this);
  }

  incrementItem (event) {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  incrementItemDup (event) {

    /*console.log('event',event)
    console.log('in')
    console.log('this.state', this.state)*/
    this.setState({ clicks: this.state.clicks + 1 });
  }


render() {

//console.log("this.state", this.state);
let restaurantsArray = this.state.restaurants;
console.log("restaurantsArray", restaurantsArray);

let renderHtmlData = restaurantsArray.map( (value, index) => {
    //console.log("index", index);
    //console.log("value", value);
    //console.log("Name", value.name);
    return (<h1>{value.name}</h1>);
})

console.log("renderHtmlData", renderHtmlData);
return(

<div>
<section className="banner">
        <div className="container" onClick={this.incrementItemDup}>
            <div className="d-table">
                <div className="d-table-cell">
                    <h1>{this.state.clicks}Huge Savings on over <span>50000</span> Home  Improvement products</h1>
                    {renderHtmlData}
                </div>
            </div>
        </div>
    </section>

    <SubComponent 
        incrementItem={this.incrementItem} 
        incrementItemDup={this.incrementItemDup} 
        clicks={this.state.clicks} />

    <section className="light-bg padd-60 pb-45 offer-divide-white">
        <div className="container">
            <div className="text-center mt-5">
             <h2 onClick={ (event) => { this.incrementItem(event) }}>{ this.state.clicks }dasfds</h2>
                <h2 className="title-1">Offered Categories</h2>
                <p className="sub-title-1 light-text-color f16">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry.</p>
            </div>

            <div className="custom-row-1">
                <ul className="reset zoom offered-categories">
                    <li>
                     
                        <div className="box rd-5" onclick="window.open('listing.html','mywindow');">
                            <div className="img rd-5" ></div>
                            <div className="bx-content">
                                <h3 className="text-white">Home Showcase</h3>
                                <a href="listing.html" className="btn-primary-line btn">Shop Now</a>
                            </div>
                            <span className="offer">50%</span>
                        </div>
                   
                    </li>
                    <li>
                      
                        <div className="box rd-5" onclick="window.open('listing.html','mywindow');">
                            <div className="img rd-5" ></div>
                            <div className="bx-content">
                                <h3 className="text-white">Designer Lighting</h3>
                                <a href="listing.html" className="btn-primary-line btn">Shop Now</a>
                            </div>
                            <span className="offer">50%</span>
                        </div>
                  
                    </li>
                    <li>
                  
                        <div className="box rd-5" onclick="window.open('listing.html','mywindow');">
                            <div className="img rd-5" ></div>
                            <div className="bx-content">
                                <h3 className="text-white">Designer Kitchen</h3>
                                <a href="listing.html" className="btn-primary-line btn">Shop Now</a>
                            </div>
                            <span className="offer">50%</span>
                        </div>
                   
                    </li>
                    <li>
                   
                        <div className="box rd-5" onclick="window.open('listing.html','mywindow');">
                            <div className="img rd-5" ></div>
                            <div className="bx-content">
                                <h3 className="text-white">Home Security</h3>
                                <a href="listing.html" className="btn-primary-line btn">Shop Now</a>
                            </div>
                            <span className="offer">50%</span>
                        </div>
                     
                    </li>
                    <li>
               
                        <div className="box rd-5" onclick="window.open('listing.html','mywindow');">
                            <div className="img rd-5" ></div>
                            <div className="bx-content">
                                <h3 className="text-white">Designer Bathroom</h3>
                                <a href="listing.html" className="btn-primary-line btn">Shop Now</a>
                            </div>
                            <span className="offer">50%</span>
                        </div>
                  

                    </li>
                    <li>
            
                        <div className="box rd-5" onclick="window.open('listing.html','mywindow');">
                            <div className="img rd-5"></div>
                            <div className="bx-content">
                                <h3 className="text-white">Luxury Appliances</h3>
                                <a href="listing.html" className="btn-primary-line btn">Shop Now</a>
                            </div>
                            <span className="offer">50%</span>
                        </div>
              
                    </li>
                </ul>
            </div>
        </div>
    </section>


    <section className="white-bg padd-60 pt-10">
        <div className="container">
            <div className="text-center">
                <h2 className="title-1">Featured Brands</h2>
                <p className="sub-title-1 light-text-color f16">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

            <div className="custom-row-1 mt20">

                <ul className="reset brands">
                    <li>
                        <div className="box-shadow">
                            <img src={require('./img/brand1.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                           <img src={require('./img/brand2.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                             <img src={require('./img/brand3.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                              <img src={require('./img/brand4.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                            <img src={require('./img/brand5.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                              <img src={require('./img/brand6.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                             <img src={require('./img/brand7.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                            <img src={require('./img/brand8.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                             <img src={require('./img/brand9.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                            <img src={require('./img/brand10.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                             <img src={require('./img/brand11.png')} />
                        </div>
                    </li>
                    <li>
                        <div className="box-shadow">
                             <img src={require('./img/brand12.png')} />
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    </section>

    <section className="light-bg padd-60 last-section-footer">
        <div className="container">
            <h3 className="title-1">Recently Viewed Products</h3>

            <div className="custom-row-1">
                <ul className="reset products">
                    <li>
                   
                        <div className="product-container">

                            <div className="product-image">
                                <a href=""> <img src={product} /> </a>
                            </div>

                            <div className="product-body">
                                <div className="product-rating">
                                    <span className="star-rating view_only">
                                        <input id="star-5" type="radio" name="stara" />
                                        <label className="star" htmlFor="star-5"></label>
                                        <input id="star-4" type="radio" checked="" name="stara" />
                                        <label className="star" htmlFor="star-4"></label>
                                        <input id="star-3" type="radio" name="stara" />
                                        <label className="star" htmlFor="star-3"></label>
                                        <input id="star-2" type="radio" name="stara" />
                                        <label className="star" htmlFor="star-2"></label>
                                        <input id="star-1" type="radio" name="stara" />
                                        <label className="star" htmlFor="star-1"></label>
                                </span>
                                    <span className="color-bold">150 Reviews</span>
                                </div>
                                <a href="" className="h4">Bosch B21CL80SN</a>
                                <p> 36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... </p>
                                <div className="price-product"> $2,514.10 </div>
                                <a href="" className="finshes_link">Available in <span className="color-bold">4 Finishes</span></a>

                            </div>
                            <div className="custom-row-1 mb--15">
                                <div className="product-footer">
                                    <div className="divide border-right">
                                        <input className="checkbox" type="checkbox" id="c1" />
                                        <label className="checkbox" htmlFor="c1">Compare</label>
                                    </div>
                                    <div className="divide">
                                        <span className="heart"> <i className="fa fa-heart-o"></i> 240 </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                     
                    </li>

                    <li>
                       
                        <div className="product-container">

                            <div className="product-image">
                                <a href=""> <img src={product} /> </a>
                            </div>

                            <div className="product-body">
                                <div className="product-rating">
                                    <span className="star-rating view_only">
                                        <input id="star-5" type="radio" name="starx" />
                                        <label className="star" for="star-5"></label>
                                        <input id="star-4" type="radio"  name="starx" />
                                        <label className="star" for="star-4"></label>
                                        <input id="star-3" type="radio" checked="" name="starx" />
                                        <label className="star" for="star-3"></label>
                                        <input id="star-2" type="radio" name="starx" />
                                        <label className="star" for="star-2"></label>
                                        <input id="star-1" type="radio" name="starx" />
                                        <label className="star" for="star-1"></label>
                                </span>
                                    <span className="color-bold">25 Reviews</span>
                                </div>
                                <a href="" className="h4">Bosch B21CL80SN</a>
                                <p> 36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... </p>
                                <div className="price-product"> $2,514.10 </div>
                                <a href="" className="finshes_link">Available in <span className="color-bold">4 Finishes</span></a>

                            </div>
                            <div className="custom-row-1 mb--15">
                                <div className="product-footer">
                                    <div className="divide border-right">
                                        <input className="checkbox" type="checkbox" id="c2" checked />
                                        <label className="checkbox" for="c2">Compare</label>
                                    </div>
                                    <div className="divide">
                                        <span className="heart in"> <i className="fa fa-heart-o"></i> 240 </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                  
                    </li>

                    <li>
                 
                        <div className="product-container">

                            <div className="product-image">
                                <a href=""> <img src={product} /> </a>
                            </div>

                            <div className="product-body">
                                <div className="product-rating">
                                    <span className="star-rating view_only">
                                        <input id="star-5" type="radio" name="stars" />
                                        <label className="star" for="star-5"></label>
                                        <input id="star-4" type="radio"  name="stars" />
                                        <label className="star" for="star-4"></label>
                                        <input id="star-3" type="radio" checked="" name="stars" />
                                        <label className="star" for="star-3"></label>
                                        <input id="star-2" type="radio" name="stars" />
                                        <label className="star" for="star-2"></label>
                                        <input id="star-1" type="radio" name="stars" />
                                        <label className="star" for="star-1"></label>
                                </span>
                                    <span className="color-bold">28 Reviews</span>
                                </div>
                                <a href="" className="h4">Bosch B21CL80SN</a>
                                <p> 36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... </p>
                                <div className="price-product"> $2,514.10 </div>
                                <a href="" className="finshes_link">Available in <span className="color-bold">4 Finishes</span></a>

                            </div>
                            <div className="custom-row-1 mb--15">
                                <div className="product-footer">
                                    <div className="divide border-right">
                                        <input className="checkbox" type="checkbox" id="c1" />
                                        <label className="checkbox" for="c1">Compare</label>
                                    </div>
                                    <div className="divide">
                                        <span className="heart"> <i className="fa fa-heart-o"></i> 240 </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                   
                    </li>

                    <li>
                       
                        <div className="product-container">

                            <div className="product-image">
                                <a href=""> <img src={product} /> </a>
                            </div>

                            <div className="product-body">
                                <div className="product-rating">
                                    <span className="star-rating view_only">
                                        <input id="star-5" type="radio" name="star" />
                                        <label className="star" for="star-5"></label>
                                        <input id="star-4" type="radio" checked="" name="star" />
                                        <label className="star" for="star-4"></label>
                                        <input id="star-3" type="radio" name="star" />
                                        <label className="star" for="star-3"></label>
                                        <input id="star-2" type="radio" name="star" />
                                        <label className="star" for="star-2"></label>
                                        <input id="star-1" type="radio" name="star" />
                                        <label className="star" for="star-1"></label>
                                </span>
                                    <span className="color-bold">150 Reviews</span>
                                </div>
                                <a href="" className="h4">Bosch B21CL80SN</a>
                                <p> 36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... </p>
                                <div className="price-product"> $2,514.10 </div>
                                <a href="" className="finshes_link">Available in <span className="color-bold">4 Finishes</span></a>

                            </div>
                            <div className="custom-row-1 mb--15">
                                <div className="product-footer">
                                    <div className="divide border-right">
                                        <input className="checkbox" type="checkbox" id="c1" />
                                        <label className="checkbox" for="c1">Compare</label>
                                    </div>
                                    <div className="divide">
                                        <span className="heart"> <i className="fa fa-heart-o"></i> 240 </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                      
                    </li>

                </ul>
            </div>

        </div>
    </section>


    <section className="apps-and-newsletter">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="boxed">
                        <i className="material-icons large">android</i>
                        <h3>Download our mobile apps</h3>
                        <p>The easiest way to shop home improvement in your home.</p>
                        <div className="dw-apps">
                            <a href="" target="_blank"> <img src={require('./img/playstore.png')} /> </a>
                            <a href="" target="_blank"> <img src={require('./img/playstore.png')} /> </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="boxed bg-2">
                        <i className="material-icons large">mail_outline</i>
                        <h3>Newsletter subscription</h3>
                        <p>Sign up to get the best deals!</p>
                        <form>
                            <div className="form-group-custom">
                                <input type="email" placeholder="Enter Email Id" />
                                <button className="round-btn"><i className="material-icons">mail_outline</i></button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </section>


    </div>


	     );
	}

}

export default Main;