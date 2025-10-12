'use client';

import AstronautTile from './AstronautTile';

interface AstronautTileListProps {
  astronauts: {
    name: string;
    craft: string;
  }[];
  filter?: string | null;
}

export default function AstronautTileList({ astronauts, filter = null }: AstronautTileListProps) {
  const filteredAstronauts = filter
    ? astronauts.filter(astronaut => astronaut.craft === filter)
    : astronauts;

  return (
    <div>
      {filteredAstronauts.map((astronaut) => (
        <AstronautTile
          key={astronaut.name}
          astronaut={astronaut}
        />
      ))}
    </div>
  );
}