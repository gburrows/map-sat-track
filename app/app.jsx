import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Home from 'Home';
import Map from 'Map';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
			<Route path="map" component={Map}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
