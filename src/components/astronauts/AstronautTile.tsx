'use client';

import Image from 'next/image';

interface AstronautTileProps {
  astronaut: {
    name: string;
    craft: string;
  };
}

export default function AstronautTile({ astronaut }: AstronautTileProps) {
  return (
    <div>
      <h3>{astronaut.name}</h3>
      <Image
                src="/images/astronaut.jpg"
                width={80}
                height={80}
              />
        {astronaut.craft}
    </div>
  );
}