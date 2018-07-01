const React = require('react');
const MyMapComponent = require('MyMapComponent');

const Map = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Map</h1>
			<MyMapComponent
				isMarkerShown
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAiLRrrgozsUVw5Wm_tGbwMmLi1hx8VtLs"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	)
};

module.exports = Map;