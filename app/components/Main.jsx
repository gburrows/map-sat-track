const React = require('react');
const Nav = require('Nav');


const Main = (props) => {

	return (
		<div>
				<Nav/>
				<div className="row">
					<div className="columns medium-8 large-12 small-centered">
						<p>Main.jsx rendered</p>
						{props.children}
					</div>
				</div>
		</div>
	)
};

Main.defaultProps = {
	color: {shade: Main, type: 'green', thing: 'blue'}
};

module.exports = Main;