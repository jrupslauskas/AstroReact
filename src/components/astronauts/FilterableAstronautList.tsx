'use client';

import { useState } from 'react';

interface Astronaut {
  name: string;
  craft: string;
}

interface FilterableAstronautListProps {
  astronauts: Astronaut[];
}

export default function FilterableAstronautList({ astronauts }: FilterableAstronautListProps) {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredAstronauts = filter ? astronauts.filter(astronaut => astronaut.craft === filter): astronauts;

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setFilter(null)}>All Stations</button>
        <button onClick={() => setFilter('ISS')}>ISS</button>
        <button onClick={() => setFilter('Tiangong')}>Tiangong</button>
      </div>

      <p>Astronauts {filter ? `aboard ${filter}` : 'currently in space'}</p>
      <ul>
        {filteredAstronauts.map((astronaut) => (
          <li key={astronaut.name}>
            {astronaut.name} aboard {astronaut.craft}
          </li>
        ))}
      </ul>
    </div>
  );
}