import React from 'react';
import { NavLink } from 'react-router-dom';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';

export default function AchievementsPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Achievements"
        title="No separate honors list"
        description="Awards and rankings are not invented here. Competitive participation lives on Hackathons and Certifications."
      />

      <Reveal className="detail-section max-w-xl">
        <p>
          See <NavLink to="/hackathons" className="underline">Hackathons</NavLink> and{' '}
          <NavLink to="/certifications" className="underline">Certifications</NavLink> for the
          records that exist.
        </p>
      </Reveal>
    </div>
  );
}
