import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../components/common/PageIntro';
import Reveal from '../components/common/Reveal';
import { projectsData } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <div className="site-wrap pb-24">
      <PageIntro
        kicker="Work"
        title="My brightest creations"
        description="Five projects spanning financial intelligence, computer vision, case management, traffic systems, and mobile interaction."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {projectsData.map((project, idx) => (
          <Reveal key={project.id}>
            <NavLink to={`/projects/${project.slug}`} className="work-card">
              <div className="work-media">
                <span className="work-media-index">0{idx + 1}</span>
              </div>
              <div className="work-meta">
                <div>
                  <h2 className="work-title">{project.title}</h2>
                  <p className="work-desc">{project.description}</p>
                  <div className="service-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="pill">{tech}</span>
                    ))}
                  </div>
                </div>
                <span className="text-arrow shrink-0">
                  View <ArrowUpRight size={15} />
                </span>
              </div>
            </NavLink>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
