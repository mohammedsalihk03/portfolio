import React from 'react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { educationData } from '../data/portfolioData';

export default function EducationPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Education"
        title="Academic path"
        description="Degree in progress and prior schooling, recorded as they stand."
      />

      <div className="list-block">
        {educationData.map((edu, idx) => (
          <Reveal key={edu.id} className="list-item">
            <p className="service-index mb-3">0{idx + 1}</p>
            <h2 className="list-title">{edu.institution}</h2>
            <p className="thought-copy">
              {edu.degree}{edu.field ? ` — ${edu.field}` : ''}
            </p>
            <div className="service-tags mt-4">
              {edu.cgpa && <span className="pill">CGPA {edu.cgpa}</span>}
              {edu.percentage && <span className="pill">{edu.percentage}</span>}
              {edu.expectedGraduation && <span className="pill">Expected {edu.expectedGraduation}</span>}
              {edu.location && <span className="pill">{edu.location}</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
