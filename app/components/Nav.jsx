import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.PureComponent {
	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="dropdown menu" data-dropdown-menu>
						<li className="menu-text">Map Sat Track</li>
						<li>
							<IndexLink to="/" activeClassName="active-link">Home</IndexLink>
						</li>
						<li>
							<Link to="/map" activeClassName="active-link">Map</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">Created by GB</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;
