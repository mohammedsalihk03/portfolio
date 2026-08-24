import React from 'react';
import { NavLink } from 'react-router-dom';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { personalInfo, educationData, leadershipData } from '../data/portfolioData';

export default function AboutPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="About"
        title="A student building with software, data, and AI."
        description="I am Mohammed Salih K, a B.Tech Computer Science & Engineering (Data Science) student focused on software engineering, backend development, artificial intelligence, machine learning, data science, FinTech and data analytics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden rounded-[28px] bg-[#ebe6dd] aspect-[4/5]">
            <img
              src={personalInfo.profilePhotoPath}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-[center_18%] transition-transform duration-1000 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
          </div>
          <p className="mt-5 text-[15px] text-[rgba(17,17,17,0.55)]">
            {personalInfo.name}
            <br />
            {personalInfo.location}
          </p>
        </Reveal>

        <div className="lg:col-span-7 space-y-14">
          <Reveal className="detail-section">
            <h2>Introduction</h2>
            <p>
              I study at Mar Athanasius College of Engineering, Kothamangalam. My work so far includes
              financial data systems, computer-vision safety tools, database applications, and mobile
              utilities — always grounded in the skills and projects I have actually built.
            </p>
          </Reveal>

          <Reveal className="detail-section">
            <h2>Focus</h2>
            <div className="service-tags mt-2">
              {personalInfo.careerInterests.map((interest) => (
                <span key={interest} className="pill">{interest}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="detail-section">
            <h2>Education</h2>
            <div className="list-block mt-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="list-item">
                  <p className="list-title">{edu.institution}</p>
                  <p className="thought-copy">
                    {edu.degree}{edu.field ? ` — ${edu.field}` : ''}
                    {edu.cgpa ? ` · CGPA ${edu.cgpa}` : ''}
                    {edu.percentage ? ` · ${edu.percentage}` : ''}
                    {edu.expectedGraduation ? ` · Expected ${edu.expectedGraduation}` : ''}
                  </p>
                </div>
              ))}
            </div>
            <NavLink to="/education" className="text-arrow mt-6 inline-flex">View education</NavLink>
          </Reveal>

          <Reveal className="detail-section">
            <h2>Community</h2>
            <div className="mt-4 space-y-5">
              {leadershipData.map((item) => (
                <div key={item.id}>
                  <p className="quote-by">{item.role}</p>
                  <p className="quote-role">{item.organization}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
