import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Productlist from './_sub-list';
import ProductlistState from './_product-list-state';


class List extends Component {
 constructor(props) {
  super(props);
 this.state = {
    isChecked: false,
    products:[]
       /*this.state = {
        loading: true,
        isError: false,
        restaurants : [],

    }*/
   /* products: [
        {    'id' : 1,
            'product_review' : '150 Reviews',
            'product_name' : 'Bosch B21CL80SN',
            'product_desc' : '36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... ',
            'product_details' : '$2,514.10',
            'finishes' : '4 Finishes',
            'rating' : 200,
            'product_img' : require('./img/product1.png'),
            'product_compare' : 0,
            'fav' : 1,

        },
        {   
            'id' : 2,
            'product_review' : '150 Reviews',
            'product_name' : 'Bosch B21CL80SN',
            'product_desc' : '36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... ',
            'product_details' : '$2,514.10',
            'finishes' : '4 Finishes',
            'rating' : 200,
            'product_img' : require('./img/product1.png'),
             'product_compare' : 1,
             'fav' : 0,

        },
         {  
            'id' : 3,
            'product_review' : '150 Reviews',
            'product_name' : 'Bosch B21CL80SN',
            'product_desc' : '36 Inch Wide 20 Cu. Ft. French Door Refrigerator with Interior Water Dispenser.... ',
            'product_details' : '$2,514.10',
            'finishes' : '4 Finishes',
            'rating' : 200,
            'product_img' : require('./img/product1.png'),
             'product_compare' : 0,
             'fav' : 0,

        }


    ]*/

   };
  }  

 toggleChange = (event, index) => {

/*console.log("event", event);
console.log("checked", event.target.checked);

console.log("index", index);*/
let checked = event.target.checked;
/*let value = event.target;
console.log("value", value);
console.log("this.state.products", this.state.products[index]);*/

/*checked === true ? 1 : 0*/ 
     /*this.setState({
      isChecked: !this.state.isChecked,
    });*/

}

handleChange = (event, index) =>{
    const favi = this.state.products[index];
    const favr = favi.fav;
    

    let jasper = {...this.state.products}; 
    
    jasper[index].fav = (favr === 1 ? 0 : 1);                        
  

this.setState({jasper});
console.log(jasper);
  
}

componentDidMount()
{
    fetch(' https://opentable.herokuapp.com/api/restaurants?state=IL').
    then((Response) => Response.json()).
    then((findresponse) =>
    {
        this.setState({
        products : findresponse.restaurants
    })
            
})

}
 



render() {

console.log("this.state.products", this.state.products);

                       const pro = this.state.products.map((products) => {
                         /*return ( <Productlist proname={products.product_name} 
                                               prodesc={products.product_desc}
                                               proprice={products.product_details}
                                               profinish={products.finishes}
                                               prorating ={products.rating}
                                               proimg ={products.product_img}
                                               procompare ={products.product_compare}
                                               proreview={products.product_review}
                                               profav={products.fav}
                                               proid={products.id}
                                               data={products}
                                               />)*/
                            return (<ProductlistState data={products}/>)
                        })



console.log(this.state.products);
// console.log("this.state", this.state);
let image = require("./img/cat2.png");
//let image = "/public/kitchen.png";

// rendering listing 

/*let productarray = this.state.products;
let productdata = productarray.map((value, index) => {
    return ( <li key={value.id}> <div className="product-container">
                       <div className="product-image">
                                        <a href=""> <img src={value.product_img} /> </a>
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
                                            <span className="color-bold">{value.product_review}</span>
                                        </div>

                                        <a href="" className="h4">{value.product_name}</a>
                                        <p>{value.product_desc}</p>
                                        <div className="price-product">{value.product_details}</div>
                                        <a href="" className="finshes_link">Available in <span className="color-bold">{value.finishes}</span></a>

                                    </div>

                                    <div className="custom-row-1 mb--15">
                                        <div className="product-footer">

                <div className="divide border-right">
                    <input className="checkbox" type="checkbox" data="1" id={ `c${value.id}`} 
                    onChange={(event) => {this.toggleChange(event, index);
                       }} 
                   defaultChecked={value.product_compare === 1 ? true : false} />
                    <label className="checkbox" htmlFor={ `c${value.id}`}>Compare</label>
                </div>

 
                 <div className="divide" 
                     onClick={(event) => {this.handleChange(event, index);}}>

                     <span className={(value.fav === 1) ? "heart in" : "heart"} >

                     <i className="fa fa-heart-o"></i> {value.rating} </span>

                  </div>


                                        </div>
                                    </div>
                                 </div> 
                                  </li>);

     })
*/
return(

<div>
    <section className="cat-banner full_row" style={{'backgroundImage' : `url(${image})`}}>
        <div className="container relative">
            <h1 className="text-white"><div className="icons"><img src={require('./img/cat2.png')} /></div> Refrigerators</h1>
            <a href="#social-modal" data-toggle="modal" data-target="#social-modal" className="social-share"><i className="flaticon-share"></i></a>
        </div>
    </section>

    <section className="listing-products full_row last-section-footer">
        <div className="container">
        
            <div className="full_row relative">
    
                <div className="sidebar">
                    <div className="text-right full_row mb20">
                        <a href="javascript:void(0)" className="btn btn-primary small">Clear All</a>
                    </div>
                    <div className="box">
                        <h3>Brand</h3>
                        <div className="box-collapse">
                            <ul className="reset">
                                <li>
                                    <input type="checkbox" className="checkbox" id="1" />
                                    <label className="checkbox" htmlFor="1">Kitchen Aid</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="2" />
                                    <label className="checkbox" htmlFor="2">Jenn-Air</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" checked id="3" />
                                    <label className="checkbox" htmlFor="3">Bosch</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="4" />
                                    <label className="checkbox" htmlFor="4">Viking</label>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="box">
                        <h3>Instalation Type</h3>
                        <div className="box-collapse">
                            <ul className="reset">
                                <li>
                                    <input type="checkbox" className="checkbox" id="5" />
                                    <label className="checkbox" htmlFor="5">Built-in (51)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" checked id="6" />
                                    <label className="checkbox" htmlFor="6">Free Standing (178)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
             
                    <div className="box">
                        <h3>Features</h3>
                        <div className="box-collapse">
                            <ul className="reset">
                                <li>
                                    <input type="checkbox" className="checkbox" id="7" />
                                    <label className="checkbox" htmlFor="7">Counter Depth (24)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="8" />
                                    <label className="checkbox" htmlFor="8">Accepts Custom Panels (7)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="9" />
                                    <label className="checkbox" htmlFor="9">Energy Star (34)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" checked id="10" />
                                    <label className="checkbox" htmlFor="10">Sabbath Mode (27)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" checked id="11" />
                                    <label className="checkbox" htmlFor="11">Ice Dispenser (17)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="12" />
                                    <label className="checkbox" htmlFor="12">Smart Home (5)</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="13" />
                                    <label className="checkbox" htmlFor="13"> Viewing Window (1)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
           

                    <div className="box">
                        <h3>Price</h3>
                        <div className="box-collapse">
                            <ul className="reset">
                                <li>
                                    <input type="radio" className="radio" checked id="14" name="price" />
                                    <label className="radio" htmlFor="14">$1000 to $1500 (3)</label>
                                </li>
                                <li>
                                    <input type="radio" className="radio" id="15" name="price" />
                                    <label className="radio" htmlFor="15">$1500 to $2000 (10)</label>
                                </li>
                                <li>
                                    <input type="radio" className="radio" id="16" name="price" />
                                    <label className="radio" htmlFor="16">$2000 to $2500 (1)</label>
                                </li>
                                <li>
                                    <input type="radio" className="radio" id="17" name="price" />
                                    <label className="radio" htmlFor="17">$2500 to $3000 (5)</label>
                                </li>
                                <li>
                                    <input type="radio" className="radio" id="18" name="price" />
                                    <label className="radio" htmlFor="18">$3000 to $3500 (4)</label>
                                </li>
                                <li>
                                    <input type="radio" className="radio" id="19" name="price" />
                                    <label className="radio" htmlFor="19">$3500 to $4000 (3)</label>
                                </li>
                                <li>
                                    <input type="radio" className="radio" id="20" name="price" />
                                    <label className="radio" htmlFor="20"> $4500 to $5000 (1)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
   

                    <div className="box">
                        <h3>More ways to shop</h3>
                        <div className="box-collapse">
                            <ul className="reset">
                                <li>
                                    <input type="checkbox" className="checkbox" id="14" />
                                    <label className="checkbox" htmlFor="14">New releases</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" checked id="15" />
                                    <label className="checkbox" htmlFor="15">Website exclusive</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="16" /> 
                                    <label className="checkbox" htmlFor="16">Free shipping</label>
                                </li>
                                <li>
                                    <input type="checkbox" className="checkbox" id="17" />
                                    <label className="checkbox" htmlFor="17">Clearance items</label>
                                </li>
                            </ul>
                        </div>
                    </div>

     

                </div>
        

                <div className="list-menu">

                    <div className="show-results full_row">
                        <span className="title">Showing 1–16 of 500 results</span>
                        <div className="show-right">


                            <select className="chosen-select">
                                <option>Shop By</option>
                                <option>Lorem Lipsum</option>
                                <option>Lorem Lipsum</option>
                                <option>Lorem Lipsum</option>
                                <option>Lorem Lipsum</option>
                            </select>


                               <select className="chosen-select">
                                <option>Sort By</option>
                                <option>Lorem Lipsum</option>
                                <option>Lorem Lipsum</option>
                                <option>Lorem Lipsum</option>
                                <option>Lorem Lipsum</option>
                            </select>


                        </div>

                        <div className="layout-sort">
                            <a href="javascript:void(0);" className="grid-toggle active"><i className="glyphicon glyphicon-th" aria-hidden="true"></i></a>
                            <a href="javascript:void(0);" className="list-toggle"><i className="glyphicon glyphicon-th-list" aria-hidden="true"></i></a>
                        </div>

                    </div>

         
                    <div className="re-tags full_row">
                        <a href="javascript:void(0)" className="btn btn-primary small">Clear All</a>
                        <button className="btn white">French Door <span>&times;</span></button>
                        <button className="btn white">Side by Side <span>&times;</span></button>
                        <button className="btn white">Blacks <span>&times;</span></button>
                    </div>

    
                    <div className="banner-horizantal full_row dark-overlay" >

                        <h3 className="text-white">Holiday Sale!</h3>
                        <p className="text-white">Save Upto 60% on Select Refrigerators <span>Exp. 12/20/2018</span> </p>
                        <div className="right-banner">
                            <h4 className="text-white">UPTO 60%</h4>
                            <a href="" className="btn btn-white">Save Now</a>
                        </div>
                    </div>


                    <div className="custom-row-2">
                        <ul className="reset products">
                          {pro}

                        </ul>
                    </div>

                    <div className="pagination-row full_row text-center">

                        <ul className="reset">
                            <li className="square">
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="fa fa-angle-left" aria-hidden="true"></i> PREV</span>
                                </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li>....</li>
                            <li><a href="#">25</a></li>
                            <li className="square">
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">NEXT <i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

  

            </div>

        </div>
    </section>
</div>

             );
    }

}

export default List;