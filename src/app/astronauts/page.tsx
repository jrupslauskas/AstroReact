import { getAstronautsInSpace } from '@/lib/api';
import FilterableAstronautList from '@/components/astronauts/FilterableAstronautList';
import AstronautsTileContainer from '@/components/astronauts/AstronautTileContainer';

export default async function Astronauts () {
  const data = await getAstronautsInSpace();

  return (
    <main>
      <p>Number of astronauts in space: {data.number}</p>
      <FilterableAstronautList astronauts={data.people} />
      <AstronautsTileContainer astronauts={data.people} />
    </main>
  )
}