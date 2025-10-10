'use client';

import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { getIssPosition } from '@/lib/api';
import 'leaflet/dist/leaflet.css';
import IssMarker from './IssMarker';
import MapLoadingState from './MapLoadingState';
import MapErrorState from './MapErrorState';

export default function IssMap() {
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastPositionRef = useRef<[number, number] | null>(null);

  useEffect(() => {
    const fetchIssPosition = async () => {
      try {
        if (!lastPositionRef.current) {
          setLoading(true);
        } else {
          setRefreshing(true);
        }

        const data = await getIssPosition();
        const newPosition: [number, number] = [
          parseFloat(data.iss_position.latitude),
          parseFloat(data.iss_position.longitude)
        ];

        setPosition(newPosition);
        lastPositionRef.current = newPosition;
        setError(null);
      } catch (err) {
        setError('Failed to load ISS position');
        console.error(err);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };

    fetchIssPosition();

    const interval = setInterval(fetchIssPosition, 15000); // 15s
    return () => clearInterval(interval);
  }, []);

  if (loading && !lastPositionRef.current) {
    return <MapLoadingState />;
  }

  if (error && !lastPositionRef.current) {
    return <MapErrorState message={error} />;
  }

  return (
    <div style={{ height: "500px", width: "100%" }}>
      {refreshing && <div className="refreshing-indicator">Updating position...</div>}
      {error && <div className="error-banner">{error} - Using last known position</div>}

      <MapContainer
        center={position}
        zoom={3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <IssMarker position={position} />
      </MapContainer>
    </div>
  );
}