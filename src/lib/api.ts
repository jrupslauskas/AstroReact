export interface AstronautsResponse {
  people: { name: string; craft: string }[];
  number: number;
  message: string;
}

export async function getAstronautsInSpace(): Promise<AstronautsResponse> {
  const response = await fetch('http://api.open-notify.org/astros.json', {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch astronauts data');
  }

  return response.json();
}