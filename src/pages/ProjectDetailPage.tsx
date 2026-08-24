import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[index];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const next = projectsData[(index + 1) % projectsData.length];
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="site-wrap pb-24">
      <Reveal className="pt-10 pb-4">
        <NavLink to="/projects" className="text-arrow text-[rgba(17,17,17,0.45)]">
          ← All work
        </NavLink>
      </Reveal>

      <Reveal className="page-intro !pt-4">
        <p className="section-kicker">Project {number}</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-lede">{project.description}</p>
      </Reveal>

      <Reveal className="work-media mb-16">
        <span className="work-media-index">{number}</span>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-8 space-y-14">
          <Reveal className="detail-section">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </Reveal>

          <Reveal className="detail-section">
            <h2>Features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-section">
            <h2>Contribution</h2>
            <p>{project.myContribution}</p>
          </Reveal>
        </div>

        <aside className="lg:col-span-4 space-y-10">
          <Reveal className="detail-section">
            <h2>Technologies</h2>
            <div className="service-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="pill">{tech}</span>
              ))}
            </div>
          </Reveal>

          {project.githubUrl && (
            <Reveal>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </Reveal>
          )}
        </aside>
      </div>

      <Reveal className="mt-24 pt-10 border-t border-[var(--line)]">
        <p className="section-kicker">More projects</p>
        <NavLink to={`/projects/${next.slug}`} className="group block mt-4">
          <p className="page-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>
            {next.title}
          </p>
          <span className="text-arrow mt-4 inline-flex">
            Next project <ArrowUpRight size={16} />
          </span>
        </NavLink>
      </Reveal>
    </div>
  );
}
