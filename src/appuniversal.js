import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

/*static components*/
import Header from './header.jsx';
import Footer from './footer.jsx';

/*dynamic components*/
import Main from './main.jsx';
import List from './list.jsx';

const AppUniversal = (
	<Router>
		<div>
			<Header />
			<Route path="/" exact component={Main} />
			<Route path="/list" component={List} />
			<Footer />
		</div>
	</Router>
)

export default AppUniversal;
