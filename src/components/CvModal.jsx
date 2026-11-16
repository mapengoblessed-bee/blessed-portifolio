import React from 'react';
import { X, FileText, Download, CheckCircle2, Code2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          maxWidth: '520px',
          width: '100%',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-cyan)',
          padding: '2rem',
          position: 'relative',
          animation: 'fadeIn 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close CV modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div 
            style={{
              padding: '0.65rem',
              borderRadius: '0.75rem',
              background: 'rgba(6, 182, 212, 0.15)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FileText size={24} />
          </div>
          <div>
            <h3 id="cv-modal-title" style={{ fontSize: '1.25rem' }}>
              Curriculum Vitae (CV)
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
              Year 3 Industrial Attachment Candidate
            </p>
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
          Download the latest academic CV formatted for industrial attachment supervisors, recruiters, and engineering managers.
        </p>

        {/* Quick Instructions for the Student */}
        <div 
          style={{
            background: 'var(--bg-input)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1.5rem',
            fontSize: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
            <Code2 size={16} color="var(--accent-cyan)" />
            <span>How to supply your authentic PDF CV:</span>
          </div>
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            <li>Export your completed CV as a PDF named <code className="code-pill">cv.pdf</code>.</li>
            <li>Copy <code className="code-pill">cv.pdf</code> into the <code className="code-pill">public/</code> directory.</li>
            <li>Clicking "Download CV" will now immediately serve your authentic document!</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button 
            type="button" 
            onClick={onClose} 
            className="btn btn-secondary btn-sm"
          >
            Cancel
          </button>

          <a 
            href={personalInfo.contact.cvDownloadPath} 
            download="Industrial_Attachment_CV.pdf"
            className="btn btn-primary btn-sm"
            onClick={onClose}
          >
            <Download size={16} />
            <span>Download PDF Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
