import { getAstronautsInSpace } from '@/lib/api';
import FilterableAstronautList from '@/components/astronauts/FilterableAstronautList';

export default async function Astronauts () {
  const data = await getAstronautsInSpace();

  return (
    <main>
      <p>Number of astronauts in space: {data.number}</p>
      <FilterableAstronautList astronauts={data.people} />
    </main>
  )
}