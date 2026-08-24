import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Education', path: '/education' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Hackathons', path: '/hackathons' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`majd-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="majd-nav-inner">
          <NavLink to="/" className="nav-brand">
            {personalInfo.name}
          </NavLink>
          <div className="nav-actions">
            <a href={`mailto:${personalInfo.email}`} className="nav-email">
              {personalInfo.email}
            </a>
            <button
              type="button"
              className="nav-menu-trigger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              className="nav-layer-backdrop"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="site-menu"
              className="nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={reduce ? false : { opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="nav-panel-head">
                <span>Navigate</span>
                <button type="button" className="nav-menu-trigger" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
              <nav className="nav-panel-grid">
                {navItems.map((item, i) => {
                  const active =
                    location.pathname === item.path ||
                    (item.path !== '/' && location.pathname.startsWith(item.path));
                  return (
                    <motion.div
                      key={item.path}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reduce ? 0 : 0.28,
                        delay: reduce ? 0 : 0.04 + i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <NavLink
                        to={item.path}
                        className={`nav-panel-link ${active ? 'is-active' : ''}`}
                      >
                        <span className="nav-panel-index">{String(i + 1).padStart(2, '0')}</span>
                        <span>{item.label}</span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
