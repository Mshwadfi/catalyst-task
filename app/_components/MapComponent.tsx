import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


// import Image from 'next/image';
import markerIconPath from 'leaflet/dist/images/marker-icon.png';
import markerShadowPath from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

<<<<<<< HEAD
=======
//custom marker icon
>>>>>>> temp-branch
const customIcon = L.icon({
  iconUrl: markerIconPath.src, // Access the URL from StaticImageData
  shadowUrl: markerShadowPath.src, // Access the URL from StaticImageData
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


const MapComponent = () => {
  return (
    <div className="w-full -z-10">
      <h2 className="text-xl font-bold">Location</h2>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="leaflet-map-container" 
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>
            Luxury Villa
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
