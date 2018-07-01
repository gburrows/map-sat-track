const React = require('react');

const Home = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Home</h1>
			<p>This is a map application built on React.</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
			</ul>
		</div>
	)
};

module.exports = Home;