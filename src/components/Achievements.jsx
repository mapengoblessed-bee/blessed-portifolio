import React from 'react';
import { Trophy, Star, Sparkles, Calendar, Tag, Edit3 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section 
      id="achievements" 
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-desc">
            Academic milestones, hackathon participation, project showcases, and student community involvement.
          </p>
        </div>

        {/* Achievements Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {achievementsData.map((item) => (
            <div 
              key={item.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f59e0b'
                    }}
                  >
                    <Trophy size={20} />
                  </div>

                  <span className="badge badge-placeholder">
                    Placeholder Entry
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>
                    • {item.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Editable in <code className="code-pill">portfolioData.js</code>
              </div>
            </div>
          ))}
        </div>

        {/* Guidance Notice */}
        <div 
          style={{
            background: 'rgba(245, 158, 11, 0.05)',
            border: '1px dashed rgba(245, 158, 11, 0.3)',
            borderRadius: '0.75rem',
            padding: '1.25rem 1.5rem',
            maxWidth: '850px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Edit3 size={22} color="#f59e0b" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: '#f59e0b' }}>Document Genuine Milestones: </strong>
            Update <code className="code-pill">achievementsData</code> in <code className="code-pill">src/data/portfolioData.js</code> with any hackathons attended, university project demonstrations, academic recognitions, or peer mentorship roles.
          </div>
        </div>

      </div>
    </section>
  );
}
