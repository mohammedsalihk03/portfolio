import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { certificationsData } from '../data/portfolioData';

export default function CertificationsPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Certifications"
        title="Courses & participation"
        description="Text records only — titles and issuers as listed. No dates, credential IDs, or verification links."
      />

      <div className="list-block">
        {certificationsData.map((cert, idx) => (
          <Reveal key={cert.id}>
            <NavLink to={`/certifications/${cert.id}`} className="list-item">
              <p className="service-index mb-3">0{idx + 1}</p>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="list-title">{cert.title}</h2>
                  <p className="thought-copy">{cert.issuer}</p>
                </div>
                <span className="text-arrow shrink-0 mt-2">
                  Details <ArrowUpRight size={15} />
                </span>
              </div>
            </NavLink>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
