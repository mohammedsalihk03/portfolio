import React from 'react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { skillsData } from '../data/portfolioData';

export default function SkillsPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Skills"
        title="Tools I actually use"
        description="Languages, platforms, and fundamentals from coursework and project work — listed as they exist, without inflated claims."
      />

      <div className="list-block">
        {skillsData.map((category, idx) => (
          <Reveal key={category.category} className="list-item">
            <p className="service-index mb-3">0{idx + 1}</p>
            <h2 className="list-title">{category.category}</h2>
            <div className="service-tags mt-4">
              {category.skills.map((skill) => (
                <span key={skill} className="pill">{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
