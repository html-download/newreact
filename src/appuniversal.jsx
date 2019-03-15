import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

/*static components*/
import Header from './header.jsx';
import Footer from './footer.jsx';

/*dynamic components*/
import Main from './main.jsx';
import List from './list.jsx';

/*const AppUniversal = function () {
		return(
			<Router>
				<Header />
			     <div>
			      <Route exact path="/" component={Main} />
			      <Route path="/list" component={List} />
			     </div>
				 <Footer />
			</Router>
		);
}

export default AppUniversal;*/

const AppUniversal = function () {

	return (

		   <Header />
			   <Router>
				
				   <Route path="/" exact component={Main} />
					<Route path="/list" component={List} />
			
			  </Router>
		<Footer />
	)
}


export default AppUniversal;