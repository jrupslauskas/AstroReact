// src/components/iss/MapErrorState.tsx
interface MapErrorStateProps {
  message: string;
}

export default function MapErrorState({ message }: MapErrorStateProps) {
  return <div className="map-error">{message}</div>;
}