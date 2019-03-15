import React, { Component } from 'react';

class Productliststate extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.onChangeFav = this.onChangeFav.bind(this);
    this.toggleChange = this.toggleChange.bind(this);

 
  }





 toggleChange(event){
let checked = event.target.checked;
    this.setState({
     product_compare : checked === false ? 0 : 1
    });

}
  
onChangeFav(event) {
    this.setState({
        fav : this.state.fav === 1 ? 0 : 1
    })
  }

  render() {

console.log("this.state.chlid", this.state);
    return(
      /*   <li>  
            <div className="product-container">
                <div className="product-image">
                    <a href=""> <img src={this.state.product_img}/> </a>
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
                        <span className="color-bold">{this.state.product_details}</span>
                    </div>
                    <a href="" className="h4">{this.state.proname}</a>
                    <p>{this.state.prodesc}</p>
                    <div className="price-product"> {this.state.proprice} </div>
                    <a href="" className="finshes_link">Available in <span className="color-bold">{this.state. profinish}</span></a>

                </div>
                <div className="custom-row-1 mb--15">
                     <div className="product-footer">


                        <div className="divide border-right">
                            <input className="checkbox" type="checkbox" id={ `c${this.state.id}`} checked=""  
                             onChange={(event) => {this.toggleChange(event)}} 

                             defaultChecked={this.state.product_compare === 1 ? true : false}
                             checked={this.state.product_compare === 1 ? true : false}/>


                            <label className="checkbox" htmlFor={ `c${this.state.id}`}>Compare</label>
                        </div>




                    <div className="divide" onClick={(event) => {this.onChangeFav(event)}}>
                        <span className={`heart ${this.state.fav === 1 ? 'in' : null }`}> <i className="fa fa-heart-o"></i> 240 </span>
                    </div>


                    </div>
                </div>

            </div>
        </li> */

         <li>  
            <div className="product-container">
                <div className="product-image">
                    <a href=""> <img src={this.state.product_img}/> </a>
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
                        <span className="color-bold">{this.state.product_details}</span>
                    </div>

                    <a href="" className="h4">{this.state.proname}</a>
                    <p>{this.state.prodesc}</p>
                    <div className="price-product"> {this.state.proprice} </div>
                      <p>{this.state.id}</p>
                      <p>{this.state.name}</p>
                      <p>{this.state.address}</p>
                      <p>{this.state.city}</p>
                      <p>{this.state.state}</p>
                      <p>{this.state.area}</p>
                      <p>{this.state.postal_code}</p>
                      <p>{this.state.country}</p>
                      <p>{this.state.lat}</p>
                      <p>{this.state.lng}</p>
                      <p>{this.state.price}</p>
                      <p>{this.state.reserve_url}</p>
                      <p>{this.state.mobile_reserve_url}</p>
                      <p>{this.state.image_url}</p>
                                
                    <a href="" className="finshes_link">Available in <span className="color-bold">{this.state. profinish}</span></a>

                </div>
              

            </div>
        </li>
	     );
	}

}

export default Productliststate;