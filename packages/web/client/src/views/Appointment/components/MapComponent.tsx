import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100px',
  height: '4em',
};

interface IProps {
  google: string;
}

const MapComponent = () => (
  <div style={mapStyles}>
    <Map
      google="google"
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233,
      }}
    />
  </div>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
})(MapComponent);
