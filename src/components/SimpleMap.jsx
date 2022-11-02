

import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


export default function SimpleMap() {


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_HELLO,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: -12.046805555556, lng: -77.029722222222 }), []);
    const point1laMerced = useMemo(() => ({ lat: -12.046805555556, lng: -77.029722222222 }), []);
    const point2santoDomingo = useMemo(() => ({ lat:  -12.0440764, lng: -77.0319351 }), []);
    const point3nazarenas = useMemo(() => ({ lat: -12.0455684, lng: -77.0374216 }), []);

//maps are working
  
    return (
      <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
        <MarkerF position={point1laMerced} />
        <MarkerF position={point2santoDomingo} />
        <MarkerF position={point3nazarenas} />
      </GoogleMap>
    );
  }
