import React from 'react';
import { AlertCircle, X, ExternalLink, Code2 } from 'lucide-react';

export default function LinkNoticeModal({ isOpen, onClose, placeholderText, title }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '540px',
          width: '100%',
          padding: '2rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-cyan)',
          position: 'relative',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              padding: '0.6rem',
              borderRadius: '0.75rem',
              background: 'rgba(6, 182, 212, 0.15)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <AlertCircle size={24} />
          </div>
          <div>
            <span className="badge badge-amber" style={{ marginBottom: '0.25rem' }}>
              Placeholder Link
            </span>
            <h3 id="modal-title" style={{ fontSize: '1.25rem' }}>
              {title || 'Configuration Placeholder'}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>
          This action points to an unconfigured placeholder:
        </p>

        <div
          style={{
            background: 'var(--bg-input)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            padding: '0.75rem 1rem',
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--accent-cyan)',
            wordBreak: 'break-all'
          }}
        >
          {placeholderText}
        </div>

        <div
          style={{
            background: 'rgba(6, 182, 212, 0.05)',
            border: '1px dashed var(--border-color)',
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            <Code2 size={16} />
            <span>How to customize this link:</span>
          </div>
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            <li>Open <code className="code-pill">src/data/portfolioData.js</code> in VS Code.</li>
            <li>Locate the field corresponding to this link.</li>
            <li>Replace the placeholder with your actual live URL (e.g. GitHub repo or Render deployment).</li>
            <li>Save the file — changes update immediately in development!</li>
          </ol>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button onClick={onClose} type="button" className="btn btn-primary btn-sm">
            Got it, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
