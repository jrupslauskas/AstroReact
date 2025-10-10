'use client';

import dynamic from 'next/dynamic';

const IssMap = dynamic(() => import('./IssMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

export default function IssMapWrapper() {
  return <IssMap />;
}