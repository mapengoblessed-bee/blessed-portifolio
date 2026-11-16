import React from 'react';
import { X, ExternalLink, Github, CheckCircle, AlertTriangle, Layers, Cpu } from 'lucide-react';
import ProjectMockup from './ProjectMockups';
import { handleSafeLink } from '../utils/linkHelper';

export default function ProjectModal({ project, isOpen, onClose, onPlaceholderClick }) {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '1rem',
          padding: '2rem',
          position: 'relative',
          animation: 'fadeIn 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(15, 23, 42, 0.4)',
            border: '1px solid var(--border-color)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <span className="badge badge-cyan">{project.category}</span>
            <span className="badge badge-purple">{project.statusBadge}</span>
          </div>
          <h2 id="project-modal-title" style={{ fontSize: '1.75rem', marginBottom: '0.35rem' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Mockup Preview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <ProjectMockup type={project.mockupType} colorAccent={project.colorAccent} />
        </div>

        {/* Honest Disclaimer if Prototype */}
        {project.disclaimer && (
          <div style={{ 
            background: 'rgba(245, 158, 11, 0.08)', 
            border: '1px solid rgba(245, 158, 11, 0.25)', 
            borderRadius: '0.5rem', 
            padding: '0.75rem 1rem', 
            marginBottom: '1.5rem',
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start'
          }}>
            <AlertTriangle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#f59e0b' }}>Project Scope Notice: </strong>
              {project.disclaimer}
            </div>
          </div>
        )}

        {/* Problem and Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#ef4444' }}>●</span> The Problem
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {project.problemStatement}
            </p>
          </div>

          <div style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#10b981' }}>●</span> The Technical Solution
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Special Algorithmic / Optimisation Details if present */}
        {project.optimisationDetails && (
          <div style={{ background: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '0.5rem', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#10b981', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={16} /> Optimisation Methodology & Benchmarks
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Algorithm Method:</strong>
                <p style={{ marginTop: '0.2rem' }}>{project.optimisationDetails.method}</p>
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Inputs Handled:</strong>
                <p style={{ marginTop: '0.2rem' }}>{project.optimisationDetails.inputs}</p>
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>System Outputs:</strong>
                <p style={{ marginTop: '0.2rem' }}>{project.optimisationDetails.outputs}</p>
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Simulated Results:</strong>
                <p style={{ marginTop: '0.2rem', color: '#10b981', fontWeight: '600' }}>{project.optimisationDetails.results}</p>
              </div>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle size={16} color="var(--accent-cyan)" /> Key System Features
          </h4>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem', listStyle: 'none' }}>
            {project.keyFeatures.map((feat, idx) => (
              <li 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-primary)',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid var(--border-color)'
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Technologies & Libraries
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="code-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button 
            type="button" 
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleSafeLink(e, project.githubUrl, `${project.title} GitHub Repository`, onPlaceholderClick)}
            className="btn btn-secondary btn-sm"
          >
            <Github size={15} />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleSafeLink(e, project.liveUrl, `${project.title} Live Demo`, onPlaceholderClick)}
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={15} />
            <span>Open Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
