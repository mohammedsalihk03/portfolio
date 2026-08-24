import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage() {
  return (
    <div className="site-wrap pb-24">
      <Reveal className="page-intro">
        <p className="section-kicker">Contact</p>
        <h1 className="contact-display">Let’s build something.</h1>
        <p className="page-lede">
          Write directly. There is no contact form on this site — email is the working channel.
        </p>
      </Reveal>

      <Reveal className="flex flex-wrap gap-3 mb-16">
        <a href={`mailto:${personalInfo.email}`} className="btn-fill">
          {personalInfo.email}
        </a>
      </Reveal>

      <div className="list-block">
        <Reveal className="list-item">
          <p className="thought-label mb-2">Email</p>
          <a href={`mailto:${personalInfo.email}`} className="list-title inline-flex items-center gap-2">
            {personalInfo.email} <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <Reveal className="list-item">
          <p className="thought-label mb-2">LinkedIn</p>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="list-title inline-flex items-center gap-2"
          >
            LinkedIn profile <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <Reveal className="list-item">
          <p className="thought-label mb-2">GitHub</p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="list-title inline-flex items-center gap-2"
          >
            github.com/mohammedsalihk03 <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <Reveal className="list-item">
          <p className="thought-label mb-2">LeetCode</p>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="list-title inline-flex items-center gap-2"
          >
            leetcode.com/u/msalihk <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <Reveal className="list-item">
          <p className="thought-label mb-2">Location</p>
          <p className="list-title">{personalInfo.location}</p>
        </Reveal>
      </div>
    </div>
  );
}
