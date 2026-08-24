import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import Reveal from '../components/common/Reveal';
import { certificationsData } from '../data/portfolioData';

export default function CertificateDetailPage() {
  const { id } = useParams<{ id: string }>();
  const cert = certificationsData.find((c) => c.id === id);

  if (!cert) {
    return <Navigate to="/certifications" replace />;
  }

  return (
    <div className="site-wrap pb-24">
      <Reveal className="pt-10">
        <NavLink to="/certifications" className="text-arrow text-[rgba(17,17,17,0.45)]">
          ← All certifications
        </NavLink>
      </Reveal>

      <Reveal className="page-intro">
        <p className="section-kicker">Certificate</p>
        <h1 className="page-title">{cert.title}</h1>
        <p className="page-lede">Issued by {cert.issuer}.</p>
      </Reveal>

      <Reveal className="detail-section max-w-xl">
        <h2>Record</h2>
        <p>
          This page lists the certificate title and issuing organization only. Images, dates,
          credential IDs, and verification links are not included in this version.
        </p>
      </Reveal>
    </div>
  );
}
