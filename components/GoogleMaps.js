import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
  top: '-190px',
  width: '450px',
  height: '300px',
  border: 'solid 5px #fff',
  boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.45)'
}

class GoogleMaps extends Component {
  render() {
    const initialCenter = { lat: 10.7942634, lng: 106.6608402 };
    return (
      <Map
        style={mapStyles}
        zoom={16}
        google={this.props.google}
        initialCenter={initialCenter}
      >
        <Marker position={initialCenter} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCLnrX3S4NwSy2XSJuZOkRgNxJtQ1mdOxo'
})(GoogleMaps);