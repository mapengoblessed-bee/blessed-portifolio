import React, { useState } from 'react';
import { 
  Mail, Github, Linkedin, Phone, MapPin, 
  Copy, Check, Send, Sparkles, Briefcase, ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { handleSafeLink } from '../utils/linkHelper';

export default function Contact({ onPlaceholderClick }) {
  const [copied, setCopied] = useState(false);
  const [subjectOption, setSubjectOption] = useState('attachment');
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const handleCopyEmail = () => {
    if (personalInfo.contact.email.includes('[')) {
      if (onPlaceholderClick) {
        onPlaceholderClick(personalInfo.contact.email, "Student Email Address");
      }
      return;
    }

    navigator.clipboard.writeText(personalInfo.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Generate real mailto string based on user template
  const getSubjectText = () => {
    if (subjectOption === 'attachment') {
      return `Year 3 Industrial Attachment Opportunity - ${companyName ? companyName : 'Informatics Placement'}`;
    }
    if (subjectOption === 'interview') {
      return `Interview Invitation: Year 3 Industrial Attachment - ${companyName ? companyName : 'Software Engineering'}`;
    }
    if (subjectOption === 'project') {
      return `Inquiry Regarding Software Projects / Collaboration`;
    }
    return `Inquiry for ${personalInfo.fullName}`;
  };

  const getBodyText = () => {
    const greeting = recruiterName ? `Dear ${personalInfo.preferredName || personalInfo.fullName},\n\nMy name is ${recruiterName}${companyName ? ` from ${companyName}` : ''}.` : `Hello ${personalInfo.preferredName || personalInfo.fullName},\n\n`;
    const purpose = `I reviewed your portfolio and would like to discuss a potential Year 3 Industrial Attachment opportunity in software development and informatics.\n\n`;
    const notes = customNotes ? `Notes: ${customNotes}\n\n` : '';
    const signoff = `Best regards,\n${recruiterName || 'Hiring Team'}${companyName ? `\n${companyName}` : ''}`;
    
    return encodeURIComponent(`${greeting}\n${purpose}${notes}${signoff}`);
  };

  const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(getSubjectText())}&body=${getBodyText()}`;

  const handleLaunchEmailClient = (e) => {
    if (personalInfo.contact.email.includes('[')) {
      e.preventDefault();
      if (onPlaceholderClick) {
        onPlaceholderClick(personalInfo.contact.email, "Student Email Address");
      }
    }
  };

  return (
    <section 
      id="contact" 
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
            <Mail size={14} />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-desc">
            Interested in discussing an industrial attachment placement, reviewing code samples, or connecting professionally? Feel free to reach out.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div 
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Professional Coordinates
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Box */}
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Email Address
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '600', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                      {personalInfo.contact.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Current Location
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.925rem' }}>
                    <MapPin size={16} color="var(--accent-cyan)" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', marginTop: '0.2rem' }}>
                    ✓ Open to Bulawayo, Harare, and remote opportunities
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                {personalInfo.contact.phone && (
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.925rem' }}>
                      <Phone size={16} color="var(--accent-cyan)" />
                      <span>{personalInfo.contact.phone}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Professional Profiles
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleSafeLink(e, personalInfo.contact.github, "GitHub Profile", onPlaceholderClick)}
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleSafeLink(e, personalInfo.contact.linkedin, "LinkedIn Profile", onPlaceholderClick)}
                    className="btn btn-secondary btn-sm"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Industrial Attachment Status Card */}
            <div 
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                <Briefcase size={18} />
                <span>Attachment Readiness Notice</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Officially eligible for Year 3 Industrial Attachment (8 to 12 months duration). Academic institution recommendation letters and portfolio project walkthroughs can be presented upon request.
              </p>
            </div>
          </div>

          {/* Right Column: Attachment Inquiry Drafter (Real client mailto, zero fake backend forms) */}
          <div 
            className="glass-card"
            style={{
              padding: '2rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                Direct Inquiry Drafter
              </h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Select your inquiry type to auto-format a message and open directly in your mail application (No backend registration or fake form submission).
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {/* Inquiry Type Radio / Buttons */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  Inquiry Topic
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: subjectOption === 'attachment' ? 'rgba(6, 182, 212, 0.12)' : 'var(--bg-input)',
                      border: subjectOption === 'attachment' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="inquiryType" 
                      value="attachment"
                      checked={subjectOption === 'attachment'}
                      onChange={() => setSubjectOption('attachment')}
                      style={{ accentColor: 'var(--accent-cyan)' }}
                    />
                    <span>Year 3 Industrial Attachment Placement</span>
                  </label>

                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: subjectOption === 'interview' ? 'rgba(6, 182, 212, 0.12)' : 'var(--bg-input)',
                      border: subjectOption === 'interview' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="inquiryType" 
                      value="interview"
                      checked={subjectOption === 'interview'}
                      onChange={() => setSubjectOption('interview')}
                      style={{ accentColor: 'var(--accent-cyan)' }}
                    />
                    <span>Schedule an Attachment Technical Interview</span>
                  </label>

                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: subjectOption === 'project' ? 'rgba(6, 182, 212, 0.12)' : 'var(--bg-input)',
                      border: subjectOption === 'project' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="inquiryType" 
                      value="project"
                      checked={subjectOption === 'project'}
                      onChange={() => setSubjectOption('project')}
                      style={{ accentColor: 'var(--accent-cyan)' }}
                    />
                    <span>Project Technical Discussion / Code Review</span>
                  </label>
                </div>
              </div>

              {/* Recruiter / Organization Name Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="form-row">
                <div>
                  <label htmlFor="contact-sender-name" style={{ display: 'block', fontSize: '0.785rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Your Name (Optional)
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="e.g. Tendai Chikore"
                    style={{
                      width: '100%',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      padding: '0.65rem 0.85rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company-name" style={{ display: 'block', fontSize: '0.785rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Company / Organization
                  </label>
                  <input
                    id="contact-company-name"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Econet / Liquid / Startup"
                    style={{
                      width: '100%',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      padding: '0.65rem 0.85rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              {/* Custom Note */}
              <div>
                <label htmlFor="contact-custom-notes" style={{ display: 'block', fontSize: '0.785rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Additional Details or Role Description (Optional)
                </label>
                <textarea
                  id="contact-custom-notes"
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Specify role requirements, tech stack, or preferred start dates..."
                  style={{
                    width: '100%',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Action Button: Opens actual mail client with prefilled mailto */}
              <a
                href={mailtoUrl}
                onClick={handleLaunchEmailClient}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Send size={16} />
                <span>Launch Email with Formatted Template</span>
              </a>

              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Opens your desktop/mobile email client directly • No data stored on third-party servers
              </div>
            </form>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
