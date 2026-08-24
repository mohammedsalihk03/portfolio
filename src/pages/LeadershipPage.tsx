import React from 'react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { leadershipData } from '../data/portfolioData';

export default function LeadershipPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Leadership & community"
        title="Roles, not testimonials"
        description="Campus and community positions held at TELEI, ENCIDE, and GDG on Campus, MACE."
      />

      {leadershipData.map((item, idx) => (
        <Reveal key={item.id} className="quote-card">
          <p className="service-index mb-4">0{idx + 1}</p>
          <p className="quote-text">{item.role}</p>
          <p className="quote-by">{item.organization}</p>
          <ul className="mt-6 space-y-2">
            {item.responsibilities.map((resp) => (
              <li key={resp} className="thought-copy">{resp}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
