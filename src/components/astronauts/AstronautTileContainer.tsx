'use client';

import { useState } from 'react';
import AstronautTileList from './AstronautTileList';

export interface TileContainerProps {
  astronauts: {
    name: string;
    craft: string;
  }[];
}

export default function TileContainer({ astronauts }: TileContainerProps) {
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique crafts for filter buttons
  const crafts = [...new Set(astronauts.map(a => a.craft))];

  return (
    <div>
      <h2>Astronauts in Space</h2>
        <button onClick={() => setFilter(null)}>
          All Stations ({astronauts.length})
        </button>

        {crafts.map(craft => {
          const count = astronauts.filter(a => a.craft === craft).length;
          return (
            <button
              key={craft}
              onClick={() => setFilter(craft)}
            >
              {craft} ({count})
            </button>
          );
        })}

      <AstronautTileList
        astronauts={astronauts}
        filter={filter}
      />
    </div>
  );
}