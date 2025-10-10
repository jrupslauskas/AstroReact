'use client';

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const issIcon = L.icon({
  iconUrl: '/images/issIcon.png',
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