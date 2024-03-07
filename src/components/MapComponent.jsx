import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MapsStyled } from './MapComponentStyled';

const mapStyles = {
  width: '310px',
  height: '200px',
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC8Y3C6n60xuKNPJtABWlNvSgwRXgAxkvM',
  });
  const [myPosition, setMyPosition] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setMyPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => {
          console.error('could not get geolocation', error);
        }
      );
    } else {
      console.error('geolocation is not supported');
    }
  }, []);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(myPosition);
      map.fitBounds(bounds);
      setMap(map);
    },
    [myPosition]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <MapsStyled>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={myPosition}
      >
        <Marker position={myPosition} />
      </GoogleMap>
    </MapsStyled>
  ) : (
    <></>
  );
}

export default MapComponent;
