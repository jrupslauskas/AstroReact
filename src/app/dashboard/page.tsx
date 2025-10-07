import { getAstronautsInSpace } from '@/lib/api';

export default async function Dashboard () {
  const data = await getAstronautsInSpace();

  return (
    <main>
      <h1>AstroReact</h1>
      <p>Number of astronauts in space: {data.number}</p>
      <p>Astronauts currently in space:</p>
      <ul>
        {data.people.map((astronaut) => (
          <li key={astronaut.name}>
            {astronaut.name} aboard {astronaut.craft}
          </li>
        ))}
      </ul>

    </main>
  )
}