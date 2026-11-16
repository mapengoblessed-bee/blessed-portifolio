import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { handleSafeLink } from '../utils/linkHelper';

export default function Certifications({ onPlaceholderClick }) {
  return (
    <section 
      id="certifications" 
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        background: 'rgba(15, 23, 42, 0.25)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Professional Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <p className="section-desc">
            Technical certifications, online courses, and accredited credentials verifying competencies in programming, databases, and version control.
          </p>
        </div>

        {/* Certifications Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {certificationsData.map((cert) => (
            <div 
              key={cert.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header row with Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <Award size={22} />
                  </div>

                  <span className="badge badge-placeholder">
                    {cert.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                  {cert.name}
                </h3>

                <div style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: '500', marginBottom: '1rem' }}>
                  {cert.issuer}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} color="var(--text-muted)" />
                    <span>Completion: {cert.completionDate}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={14} color="var(--text-muted)" />
                    <span>ID: <code className="code-pill">{cert.credentialId}</code></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleSafeLink(e, cert.verificationUrl, `${cert.name} Verification Link`, onPlaceholderClick)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <ExternalLink size={14} />
                  <span>Verify Credential</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Student Advice Callout */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.75rem',
            padding: '1.25rem 1.75rem',
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Sparkles size={24} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Personalized Certification Tip: </strong>
            To add your verified certificates, open <code className="code-pill">src/data/portfolioData.js</code> and update <code className="code-pill">certificationsData</code> with your real course titles, certificate issuing bodies (e.g., Cisco, CS50, freeCodeCamp, Coursera), and verification URLs.
          </div>
        </div>

      </div>
    </section>
  );
}
