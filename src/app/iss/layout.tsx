import { ReactNode } from 'react';

interface IssLayoutProps {
  children: ReactNode;
}

export default function IssLayout({ children }: IssLayoutProps) {
  return (
    <section className="iss-section">
      <div className="iss-container">
        {children}
      </div>
    </section>
  );
}