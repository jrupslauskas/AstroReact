export interface AstronautsResponse {
  people: { name: string; craft: string }[];
  number: number;
  message: string;
}

export interface IssPositionResponse {
    timestamp: number;
    iss_position: {
        latitude: string;
        longitude: string;
    };
  message: string;
}

export async function getAstronautsInSpace(): Promise<AstronautsResponse> {
  const response = await fetch('http://api.open-notify.org/astros.json', {
   // Revalidate this data every hour
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch astronauts data');
  }

  return response.json();
}

export async function getIssPosition(): Promise<IssPositionResponse> {
  const response = await fetch('http://api.open-notify.org/iss-now.json', {
    // Revalidate this data every 10 seconds
    next: { revalidate: 10 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch ISS position data');
  }

  return response.json();
}