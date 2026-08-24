import React from 'react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { hackathonsData } from '../data/portfolioData';

export default function HackathonsPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Hackathons"
        title="Events I joined"
        description="Participation records from NASA Space Apps and Technoverse. Role listed as participant — no invented placements."
      />

      <div className="list-block">
        {hackathonsData.map((hack, idx) => (
          <Reveal key={hack.id} className="list-item">
            <p className="service-index mb-3">0{idx + 1}</p>
            <h2 className="list-title">{hack.title}</h2>
            <p className="thought-copy">
              {hack.organizer} · {hack.year} · {hack.role}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
