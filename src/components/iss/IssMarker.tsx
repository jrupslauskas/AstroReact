'use client';

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const issIcon = L.icon({
  iconUrl: '/images/issIcon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

interface IssMarkerProps {
  position: [number, number];
}

export default function IssMarker({ position }: IssMarkerProps) {
  return (
    <Marker position={position} icon={issIcon}>
      <Popup>
        ISS Current Location<br />
        Latitude: {position[0].toFixed(4)}<br />
        Longitude: {position[1].toFixed(4)}
      </Popup>
    </Marker>
  );
}