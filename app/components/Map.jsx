import React from 'react';
import MapComponent from 'MapComponent';

class Map extends React.PureComponent {
	render () {
		return (
			<div>
				<h1 className="text-center page-title">Map</h1>
				<MapComponent />
			</div>
		)
	}
}

export default Map;
