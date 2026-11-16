import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { handleSafeLink } from '../utils/linkHelper';

export default function Footer({ onPlaceholderClick }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Code size={18} />
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                {personalInfo.fullName.includes('[') ? 'Student Portfolio' : personalInfo.fullName}
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem', maxWidth: '360px' }}>
              Informatics undergraduate at the National University of Science and Technology (NUST), Zimbabwe. Seeking Year 3 Industrial Attachment opportunities in software engineering and web systems.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleSafeLink(e, personalInfo.contact.github, "GitHub Profile", onPlaceholderClick)}
                className="btn btn-secondary btn-sm"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleSafeLink(e, personalInfo.contact.linkedin, "LinkedIn Profile", onPlaceholderClick)}
                className="btn btn-secondary btn-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                onClick={(e) => handleSafeLink(e, personalInfo.contact.email, "Student Email Address", onPlaceholderClick)}
                className="btn btn-secondary btn-sm"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Section Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Details & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Academic Institution
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '0.5rem' }}>
                National University of Science and Technology (NUST)
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Bulawayo, Zimbabwe 🇿🇼
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button
                type="button"
                onClick={scrollToTop}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                aria-label="Scroll back to top of page"
              >
                <ArrowUp size={15} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div 
          style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {currentYear} {personalInfo.fullName.includes('[') ? 'Informatics Student' : personalInfo.fullName}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Designed for Year 3 Industrial Attachment • NUST Informatics</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
