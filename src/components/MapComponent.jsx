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
  const [pharmacyStores, setPharmacyStores] = useState([]);

  const handleSelectStore = () => {
    const getStoresString = localStorage.getItem('cart')
    const getStores = JSON.parse(getStoresString)
    console.table(getStores)
const pharmacyStores = getStores.filter(store => store.pharmacy !== null && store.pharmacy !== undefined);
pharmacyStores.forEach(store => {
  if (store.pharmacy.address) {
    store.pharmacy.address.lat = parseFloat(store.pharmacy.address.lat);
    store.pharmacy.address.lng = parseFloat(store.pharmacy.address.lng);
  }
});

setPharmacyStores(pharmacyStores);
  }

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
      handleSelectStore()
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
        {pharmacyStores.map(store => (
          <Marker key={store.id} position={{ lat: store.pharmacy.address.lat, lng: store.pharmacy.address.lng }} />
        ))}
      </GoogleMap>
    </MapsStyled>
  ) : (
    <></>
  );
}

export default MapComponent;
