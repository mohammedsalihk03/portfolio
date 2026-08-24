import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import LeadershipPage from './pages/LeadershipPage';
import CertificationsPage from './pages/CertificationsPage';
import CertificateDetailPage from './pages/CertificateDetailPage';
import HackathonsPage from './pages/HackathonsPage';
import AchievementsPage from './pages/AchievementsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="site-shell">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/certifications/:id" element={<CertificateDetailPage />} />
            <Route path="/hackathons" element={<HackathonsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
