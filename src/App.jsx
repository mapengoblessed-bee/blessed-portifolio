import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LinkNoticeModal from './components/LinkNoticeModal';
import CvModal from './components/CvModal';

export default function App() {
  const [noticeModal, setNoticeModal] = useState({
    isOpen: false,
    text: '',
    title: ''
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handlePlaceholderClick = (url, title) => {
    setNoticeModal({
      isOpen: true,
      text: url,
      title: title || 'Placeholder Link'
    });
  };

  const handleCloseNoticeModal = () => {
    setNoticeModal({
      isOpen: false,
      text: '',
      title: ''
    });
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar onDownloadCvClick={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero 
          onDownloadCvClick={() => setCvModalOpen(true)} 
        />
        <About />
        <Skills />
        <Projects onPlaceholderClick={handlePlaceholderClick} />
        <Education />
        <Certifications onPlaceholderClick={handlePlaceholderClick} />
        <Achievements />
        <Contact onPlaceholderClick={handlePlaceholderClick} />
      </main>

      {/* Global Footer */}
      <Footer onPlaceholderClick={handlePlaceholderClick} />

      {/* Informative Placeholder Notice Dialog */}
      <LinkNoticeModal
        isOpen={noticeModal.isOpen}
        placeholderText={noticeModal.text}
        title={noticeModal.title}
        onClose={handleCloseNoticeModal}
      />

      {/* CV Download / Instructions Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
