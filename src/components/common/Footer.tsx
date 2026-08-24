import React from 'react';
import { NavLink } from 'react-router-dom';
import { personalInfo, projectsData } from '../../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-wrap">
        <p className="footer-name">{personalInfo.name}</p>
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Quick links</h3>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="footer-col">
            <h3>Projects</h3>
            {projectsData.map((project) => (
              <NavLink key={project.id} to={`/projects/${project.slug}`}>
                {project.title}
              </NavLink>
            ))}
          </div>
          <div className="footer-col">
            <h3>Connect</h3>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <p>{personalInfo.location}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {personalInfo.name}</span>
          <span>Software Engineer / Data Science</span>
        </div>
      </div>
    </footer>
  );
}
