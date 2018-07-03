import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

let mapLat = 51.5074;
let mapLng = -0.1278;

const MapFrame = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: mapLat, lng: mapLng }}
	>
		{props.isMarkerShown && <Marker position={{ lat: mapLat, lng: mapLng }} onClick={props.onMarkerClick} />}
	</GoogleMap>
));

class MapComponent extends React.PureComponent {
	state = {
		isMarkerShown: false
	};

	componentDidMount() {
		this.delayedShowMarker()
	}

	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({ isMarkerShown: true })
		}, 3000);
	};

	handleMarkerClick = () => {
		this.setState({ isMarkerShown: false });
		console.log('marker hidden');
		this.delayedShowMarker();
	};

	render() {
		return (<MapFrame
			isMarkerShown={this.state.isMarkerShown}
			onMarkerClick={this.handleMarkerClick}
			googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAiLRrrgozsUVw5Wm_tGbwMmLi1hx8VtLs"
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `400px` }} />}
			mapElement={<div style={{ height: `100%` }} />}
		/>)
	}
}

export default MapComponent;