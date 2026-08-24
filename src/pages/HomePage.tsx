import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import Marquee from '../components/common/Marquee';
import {
  personalInfo,
  projectsData,
  leadershipData,
  certificationsData,
  hackathonsData,
} from '../data/portfolioData';

const specializations = [
  {
    name: 'Software Engineering',
    tags: ['Data Structures', 'OOP', 'Problem Solving'],
  },
  {
    name: 'Backend Development',
    tags: ['Python', 'Java', 'MySQL'],
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    tags: ['Computer Vision', 'OpenCV', 'Generative AI'],
  },
  {
    name: 'Data Science & Data Analytics',
    tags: ['Python', 'Analytics', 'Visualization'],
  },
  {
    name: 'FinTech / Financial Intelligence',
    tags: ['Transaction Analytics', 'Money Flow', 'Reporting'],
  },
  {
    name: 'Full-Stack Development',
    tags: ['HTML', 'Firebase', 'Android'],
  },
];

const highlights = [
  {
    label: 'Hackathons',
    title: 'Competitive builds',
    copy: `${hackathonsData.map((h) => h.title).join(' · ')}.`,
    to: '/hackathons',
  },
  {
    label: 'Certifications',
    title: 'Learning in public',
    copy: `${certificationsData.length} recorded courses, workshops, and participation credentials.`,
    to: '/certifications',
  },
  {
    label: 'Focus',
    title: 'Where I am heading',
    copy: personalInfo.careerInterests.slice(0, 4).join(', ') + '.',
    to: '/skills',
  },
  {
    label: 'Campus',
    title: 'Beyond the code',
    copy: 'Media, sponsorship, and community work across TELEI, ENCIDE, and GDG on Campus, MACE.',
    to: '/leadership',
  },
];

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <div>
      <section className="site-wrap hero-first">
        <div className="hero-top">
          <motion.h1
            className="hero-role"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Software Engineer
          </motion.h1>
          <div className="hero-meta">
            <span>{personalInfo.name}</span>
            <span className="hero-meta-right">
              <span>/ Data Science · AI</span>
              <span>{personalInfo.location}</span>
            </span>
          </div>
        </div>

        <div className="hero-intro">
          <motion.div
            className="hero-photo"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={personalInfo.profilePhotoPath} alt={personalInfo.name} />
          </motion.div>

          <motion.div
            className="hero-copy"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="hey-title">Hey!</h2>
            <div className="intro-copy">
              <p>
                I’m {personalInfo.name}, a B.Tech Computer Science &amp; Engineering (Data Science)
                student based in {personalInfo.location}.
              </p>
              <p>
                I focus on software engineering, backend development, artificial intelligence,
                machine learning, data science, FinTech and data analytics.
              </p>
            </div>
            <div className="hero-cta">
              <NavLink to="/projects" className="btn-fill">
                View Projects
              </NavLink>
              <NavLink to="/resume" className="hero-text-link">
                View Resume
              </NavLink>
              <NavLink to="/contact" className="hero-text-link">
                Contact Me
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee text="From coursework to working software. Backend systems, AI models, and data products built with care." />

      <section className="site-wrap pb-8">
        <Reveal>
          <p className="section-kicker">My specializations</p>
          <h2 className="section-title">What I work on</h2>
        </Reveal>
        <div className="mt-10">
          {specializations.map((item, idx) => (
            <Reveal key={item.name} className="service-row">
              <span className="service-index">0{idx + 1}</span>
              <div>
                <h3 className="service-name">{item.name}</h3>
                <div className="service-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-wrap py-24">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-kicker">Featured projects</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <NavLink to="/projects" className="text-arrow">
            View all work <ArrowUpRight size={16} />
          </NavLink>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projectsData.map((project, idx) => (
            <Reveal key={project.id}>
              <NavLink to={`/projects/${project.slug}`} className="work-card">
                <div className="work-media">
                  <span className="work-media-index">0{idx + 1}</span>
                </div>
                <div className="work-meta">
                  <div>
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-desc">{project.description}</p>
                    <div className="service-tags">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-arrow shrink-0 mt-1">
                    View <ArrowUpRight size={15} />
                  </span>
                </div>
              </NavLink>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-wrap py-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-kicker">Leadership & community</p>
            <h2 className="section-title">Roles I have held</h2>
          </div>
          <NavLink to="/leadership" className="text-arrow">
            All roles <ArrowUpRight size={16} />
          </NavLink>
        </Reveal>
        <div>
          {leadershipData.map((item) => (
            <Reveal key={item.id} className="quote-card">
              <p className="quote-text">{item.responsibilities[0]}</p>
              <p className="quote-by">{item.role}</p>
              <p className="quote-role">{item.organization}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-wrap py-20">
        <Reveal className="mb-8">
          <p className="section-kicker">Highlights</p>
          <h2 className="section-title">Beyond the code</h2>
        </Reveal>
        <div className="border-t border-[var(--line)]">
          {highlights.map((item) => (
            <Reveal key={item.label}>
              <NavLink to={item.to} className="thought-row">
                <span className="thought-label">{item.label}</span>
                <div>
                  <h3 className="thought-title">{item.title}</h3>
                  <p className="thought-copy">{item.copy}</p>
                </div>
                <span className="text-arrow">
                  Open <ArrowUpRight size={15} />
                </span>
              </NavLink>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-wrap py-24">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2 className="contact-display">Let’s build something.</h2>
          <p className="page-lede" style={{ marginTop: 24 }}>
            Open to software engineering conversations, internships, and collaborations in backend,
            AI, and data.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href={`mailto:${personalInfo.email}`} className="btn-fill">
              {personalInfo.email}
            </a>
            <NavLink to="/contact" className="btn-ghost">
              All contact details
            </NavLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
