import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Productlist = (props) => {
	
       return(<li>  
       			<div className="product-container">

                                    <div className="product-image">
                                        <a href=""> <img src={props.proimg}/> </a>
                                    </div>

                                    <div className="product-body">
                                        <div className="product-rating">
                                        <span className="star-rating view_only">
                                                <input id="star-5" type="radio" name="starx" />
                                                <label className="star" for="star-5"></label>
                                                <input id="star-4" type="radio" name="starx" />
                                                <label className="star" for="star-4"></label>
                                        <input id="star-3" type="radio" checked="" name="starx" />
                                                <label className="star" for="star-3"></label>
                                                <input id="star-2" type="radio" name="starx" />
                                                <label className="star" for="star-2"></label>
                                                <input id="star-1" type="radio" name="starx" />
                                                <label className="star" for="star-1"></label>
                                         </span>
                                            <span className="color-bold">{props.prorating}</span>
                                        </div>
                                        <a href="" className="h4">{props.proname}</a>
                                        <p>{props.prodesc}</p>
                                        <div className="price-product"> {props.proprice} </div>
                                        <a href="" className="finshes_link">Available in <span className="color-bold">{props. profinish}</span></a>

                                    </div>
                              <div className="custom-row-1 mb--15">
                                 <div className="product-footer">
                                 <div className="divide border-right">
              <input className="checkbox" type="checkbox" id="{props.proid}" checked=""  
              />
               <label className="checkbox" htmlFor="{props.proid}">Compare</label>
                             </div>
                            <div className="divide">
                              <span className="heart in"> <i className="fa fa-heart-o"></i> 240 </span>
                            </div>
                                        </div>
                                    </div>

                                </div>
                        </li>

             )
}


export default Productlist;