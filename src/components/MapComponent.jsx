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
  const london = {
    lat: 51.516624,
    lng: -0.130254,
  };
  const center = myPosition ?? london;

  const handleSelectStore = () => {
    const getStoresString = localStorage.getItem('cart');
    const getStores = JSON.parse(getStoresString);
    console.table(getStores);
    const pharmacyStores = getStores.filter(
      store => store.pharmacy !== null && store.pharmacy !== undefined
    );
    pharmacyStores.forEach(store => {
      if (store.pharmacy.address) {
        store.pharmacy.address.lat = parseFloat(store.pharmacy.address.lat);
        store.pharmacy.address.lng = parseFloat(store.pharmacy.address.lng);
      }
    });

    setPharmacyStores(pharmacyStores);
  };

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
      handleSelectStore();
    } else {
      console.error('geolocation is not supported');
    }
  }, []);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <MapsStyled>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={center}
      >
        <Marker
          position={center}
          label="I'm here"
          icon={{
            url: '../assets/position.png', 
            scaledSize: new window.google.maps.Size(30, 30), // розмір іконки
          }}
        />
        {pharmacyStores.map(store => (
          <Marker
            key={store.id}
            position={{
              lat: store.pharmacy.address.lat,
              lng: store.pharmacy.address.lng,
            }}
            label="Pharmacie"
          />
        ))}
      </GoogleMap>
    </MapsStyled>
  ) : (
    <></>
  );
}

export default MapComponent;
