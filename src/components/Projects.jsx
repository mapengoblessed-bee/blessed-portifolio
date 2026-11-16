import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, Info, 
  CheckCircle, AlertTriangle, Layers, Cpu 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from './ProjectMockups';
import ProjectModal from './ProjectModal';
import { handleSafeLink } from '../utils/linkHelper';

export default function Projects({ onPlaceholderClick }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section 
      id="projects" 
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
            <FolderGit2 size={14} />
            <span>Featured Systems & Prototypes</span>
          </div>
          <h2 className="section-title">
            Software <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            Explore functional applications and academic prototypes addressing FinTech, civic urban infrastructure, logistics routing, and enterprise web portals.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="projects-grid"
        >
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Project Preview Mockup Header */}
              <div style={{ padding: '1rem 1rem 0 1rem' }}>
                <ProjectMockup type={project.mockupType} colorAccent={project.colorAccent} />
              </div>

              {/* Project Content Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Category and Status Badge */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.65rem' }}>
                    <span className="badge badge-cyan">{project.category}</span>
                    <span className="badge badge-purple">{project.statusBadge}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '500', marginBottom: '0.85rem' }}>
                    {project.subtitle}
                  </div>

                  {/* Overview */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {project.overview}
                  </p>

                  {/* Prototype Notice / Disclaimer if applicable */}
                  {project.disclaimer && (
                    <div 
                      style={{
                        background: 'rgba(245, 158, 11, 0.08)',
                        borderLeft: '3px solid #f59e0b',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0 0.375rem 0.375rem 0',
                        fontSize: '0.785rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <strong style={{ color: '#f59e0b' }}>Note: </strong>
                      {project.disclaimer}
                    </div>
                  )}

                  {/* Special Optimization Details for Logistics */}
                  {project.optimisationDetails && (
                    <div 
                      style={{
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                        fontSize: '0.8rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontWeight: '600', marginBottom: '0.25rem' }}>
                        <Cpu size={14} />
                        <span>Optimisation Benchmark:</span>
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>
                        {project.optimisationDetails.results} ({project.optimisationDetails.method})
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="code-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-color)',
                    flexWrap: 'wrap'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: '0.825rem' }}
                  >
                    <Info size={15} />
                    <span>Project Specs</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleSafeLink(e, project.githubUrl, `${project.title} GitHub Repository`, onPlaceholderClick)}
                      className="btn btn-secondary btn-sm"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleSafeLink(e, project.liveUrl, `${project.title} Live Demo`, onPlaceholderClick)}
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit notice for student */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            All project descriptions, repositories, and Render URLs can be updated in <code className="code-pill">src/data/portfolioData.js</code>.
          </p>
        </div>
      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
        onPlaceholderClick={onPlaceholderClick}
      />

      <style>{`
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
