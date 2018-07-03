import React from 'react';
import Nav from 'Nav';

class Main extends React.PureComponent {
	render () {
		return (
			<div>
				<Nav/>
				<div className="row">
					<div className="columns medium-8 large-12 small-centered">
						<p>Main.jsx rendered</p>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default Main;