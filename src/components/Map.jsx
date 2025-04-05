// Map.jsx
import React, { useState,useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from 'axios';


function Map() {
  const [center, setcenter] = useState({
    lat: 37.267,
    lng: 9.88
    ,
  })
  useEffect(() => {
    axios.get('http://localhost:3000/longitude')
      .then(response => {
        if (!response.data) {

          throw new Error('Données de longitude non disponibles');
        }
        setcenter(response.data);
      })
      .catch(error => console.error('Erreur lors de la récupération de longitude :', error));
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA-ppVcZ-imB74TXzk_uBMysW6Krtp-ink",
  });

  return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={8}
      mapContainerStyle={{ width: "100%", height: "60vh" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
