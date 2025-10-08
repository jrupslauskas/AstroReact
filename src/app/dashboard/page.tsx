import { getAstronautsInSpace } from '@/lib/api';
import FilterableAstronautList from '@/components/FilterableAstronautList';

export default async function Dashboard () {
  const data = await getAstronautsInSpace();

  return (
    <main>
      <h1>AstroReact</h1>
      <p>Number of astronauts in space: {data.number}</p>
      <FilterableAstronautList astronauts={data.people} />
    </main>
  )
}