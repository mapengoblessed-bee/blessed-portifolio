import React from 'react';
import { 
  ArrowRight, Download, Mail, Terminal, MapPin, 
  Briefcase, GraduationCap, Sparkles, Camera, Check 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onDownloadCvClick, onContactClick }) {
  const isNamePlaceholder = personalInfo.fullName.includes('[');

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient radial glow */}
      <div className="ambient-mesh" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Introductions & CTAs */}
          <div>
            {/* Attachment Availability Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.825rem',
                color: 'var(--accent-emerald)',
                fontWeight: '600',
                marginBottom: '1.25rem'
              }}
            >
              <span className="status-dot"></span>
              <span>Available for Year 3 Industrial Attachment (2026/2027)</span>
            </div>

            {/* Name Heading with Placeholder highlight if not changed */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
              Hi, I'm{' '}
              <span className="gradient-text">
                {personalInfo.fullName}
              </span>
            </h1>

            {/* Title / Role Subheading */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                {personalInfo.title}
              </span>
              <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                NUST Zimbabwe
              </span>
            </div>

            {/* Professional Introduction */}
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '600px' }}>
              {personalInfo.shortIntro}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </a>

              <button 
                onClick={onDownloadCvClick} 
                type="button" 
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>Download CV</span>
              </button>

              <a href="#contact" className="btn btn-outline">
                <Mail size={17} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Credentials / Attachment Metrics Bar */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>
                  B.Sc. (Hons)
                </div>
                <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>
                  Informatics @ NUST
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>
                  Year 3
                </div>
                <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>
                  Attachment Ready
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--accent-blue)' }}>
                  4+ Systems
                </div>
                <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>
                  Built & Documented
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--accent-purple)' }}>
                  Bulawayo 🇿🇼
                </div>
                <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>
                  Zimbabwe Base
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo / Interactive Tech Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '380px',
                padding: '1.5rem',
                borderRadius: '1.25rem',
                background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(15, 23, 42, 0.95) 100%)',
                position: 'relative'
              }}
            >
              {/* Profile Image Container */}
              <div 
                style={{
                  width: '100%',
                  height: '320px',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0b1528 0%, #172554 100%)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(56, 189, 248, 0.25)'
                }}
              >
                {personalInfo.avatar.useCustomImage ? (
                  <img 
                    src={personalInfo.avatar.imageSrc} 
                    alt={`${personalInfo.fullName} - Informatics Student`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback gracefully if image is missing
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                    {/* Stylized Developer Icon / Initials Avatar */}
                    <div 
                      style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.25rem auto',
                        boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4)',
                        border: '3px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <GraduationCap size={54} color="#ffffff" />
                    </div>

                    <div style={{ fontWeight: '700', fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                      Profile Photo Placeholder
                    </div>
                    <p style={{ fontSize: '0.785rem', color: '#94a3b8', lineHeight: '1.4' }}>
                      Add <code className="code-pill">profile.jpg</code> in <code className="code-pill">/public/</code> and set <code className="code-pill">useCustomImage: true</code> in <code className="code-pill">portfolioData.js</code>
                    </p>
                  </div>
                )}

                {/* Floating Corner Badges */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.725rem',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <MapPin size={12} />
                  <span>Bulawayo, Zimbabwe</span>
                </div>

                <div 
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.725rem',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Briefcase size={12} />
                  <span>Year 3 Attachment</span>
                </div>
              </div>

              {/* Student Identification Banner below avatar */}
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontWeight: '600', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                  National University of Science and Technology
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                  Faculty of Applied Science • Department of Informatics
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
