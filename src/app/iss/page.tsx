import { getIssPosition } from '@/lib/api';
import IssMapWrapper from '@/components/iss/IssMapWrapper';

export default async function Iss() {
  const data = await getIssPosition();

  return (
    <main>
      <h2>International Space Station (ISS)</h2>
      <div className="iss-details">
        <p>Current ISS Location:</p>
        <p>Latitude: {data.iss_position.latitude}</p>
        <p>Longitude: {data.iss_position.longitude}</p>
      </div>

      <h3>ISS Tracker Map</h3>
      <IssMapWrapper />
    </main>
  );
}