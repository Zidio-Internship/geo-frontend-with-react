import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon configuration
const customIcon = L.icon({
  iconUrl: '../src/map/mapicons.png', // Check if this path is correct
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

function Map() {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        function (error) {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <div>
      <MapContainer center={position} zoom={3} style={{ width: '100%', height: '100vh' }}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
    </div>
  );
}

export default Map;
