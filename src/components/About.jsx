import React from 'react';
import { 
  GraduationCap, Calendar, MapPin, Compass, 
  Target, BookOpen, Layers, CheckCircle2, Building2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const careerInterests = [
    "Full-Stack Web Application Development (Python/Flask, JavaScript, React)",
    "Relational Database Engineering & Schema Optimization (SQL, SQLite, PostgreSQL)",
    "Systems Analysis & Object-Oriented Software Design (UML, DFDs, Java)",
    "Civic Technology & FinTech Systems for Emerging Markets",
    "API Architecture, Backend Logic & Data Pipelines"
  ];

  return (
    <section 
      id="about" 
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        background: 'rgba(15, 23, 42, 0.3)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Academic & Professional Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-desc">
            Informatics undergraduate at NUST Zimbabwe with a focus on systems analysis, full-stack software development, and database architecture.
          </p>
        </div>

        {/* Content Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Biography & Objectives */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Preparing for Year 3 Industrial Attachment
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {personalInfo.fullBio.map((paragraph, idx) => (
                <p key={idx} style={{ fontSize: '1rem', lineHeight: '1.75', color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career Interests & Learning Objectives */}
            <div 
              className="glass-card" 
              style={{
                padding: '1.5rem',
                background: 'var(--bg-card)',
                marginBottom: '1.5rem'
              }}
            >
              <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={18} />
                <span>Primary Technical & Career Interests</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {careerInterests.map((interest, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attachment Commitment Statement */}
            <div 
              style={{
                background: 'rgba(6, 182, 212, 0.06)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'center'
              }}
            >
              <Target size={24} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>
                  Industrial Attachment Objective:
                </strong>
                Seeking an 8 to 12-month placement with an established or growing software engineering team in Zimbabwe (Bulawayo, Harare, or remote) to apply academic theory to production codebases.
              </div>
            </div>
          </div>

          {/* Right Column: Academic Details & Fast Facts Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Academic Fact Sheet */}
            <div 
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                <GraduationCap size={22} color="var(--accent-cyan)" />
                <h4 style={{ fontSize: '1.15rem' }}>Academic Background</h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '0.9rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                    Degree Program
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    Bachelor of Science (Honours) in Informatics
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                    University Institution
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    National University of Science and Technology (NUST)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Bulawayo, Zimbabwe
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                    Academic Year & Status
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--accent-emerald)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="status-dot"></span>
                    <span>{personalInfo.attachmentStatus.academicYear}</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                    Attachment Availability
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {personalInfo.attachmentStatus.targetPeriod}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                    Location Preference
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {personalInfo.location}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                    ✓ Open to nationwide relocation & remote roles
                  </div>
                </div>
              </div>
            </div>

            {/* University Highlight Card */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Building2 size={18} color="var(--accent-cyan)" />
                <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  Why Informatics at NUST?
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                The NUST Informatics curriculum integrates the computational rigor of computer science with enterprise systems analysis, relational database engineering, software quality, and business process modeling.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
