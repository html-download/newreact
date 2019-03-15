import React, { Component } from 'react';

class Productlistapi extends Component {

  constructor(props) {
    super(props);
    /*this.state = {
        loading: true,
        isError: false,
        restaurants : [],

    }*/
    this.state ={
     restaurants:[],
     }
}

componentDidMount()
{
	fetch(' https://opentable.herokuapp.com/api/restaurants?state=IL').
	then((Response) => Response.json()).
	then((findresponse) =>
	{
			console.log(findresponse.restaurants);
	})
}

   render() {

    return(
           

           );
	
	}

}

export default Productlistapi;