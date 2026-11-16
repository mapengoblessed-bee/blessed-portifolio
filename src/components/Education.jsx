import React from 'react';
import { 
  GraduationCap, Calendar, MapPin, Award, 
  BookOpen, CheckCircle2, AlertCircle, FileSpreadsheet 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section 
      id="education" 
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
            <GraduationCap size={14} />
            <span>Academic Chronology</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-desc">
            Formal academic background spanning university degree studies in Informatics to secondary and high school qualifications in Zimbabwe.
          </p>
        </div>

        {/* Education Timeline */}
        <div 
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2rem'
          }}
          className="timeline-container"
        >
          {/* Vertical connecting line */}
          <div 
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '11px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-blue), var(--border-color))'
            }}
          />

          {educationData.map((edu, index) => (
            <div 
              key={edu.id}
              style={{
                position: 'relative',
                marginBottom: '2.5rem'
              }}
            >
              {/* Timeline Node Dot */}
              <div 
                style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '0.25rem',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: edu.isCurrent ? 'var(--accent-cyan)' : 'var(--bg-secondary)',
                  border: '3px solid var(--accent-cyan)',
                  boxShadow: edu.isCurrent ? '0 0 15px var(--accent-cyan)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                {edu.isCurrent && (
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
                )}
              </div>

              {/* Education Card */}
              <div 
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-secondary)',
                  border: edu.isCurrent ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <span className={edu.isCurrent ? "badge badge-cyan" : "badge badge-purple"}>
                        {edu.badge}
                      </span>
                      {edu.isPlaceholder && (
                        <span className="badge badge-placeholder">
                          Editable Placeholder
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                      {edu.qualification}
                    </h3>

                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>
                      {edu.institution}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--bg-input)', padding: '0.3rem 0.65rem', borderRadius: '0.375rem' }}>
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {edu.description}
                </p>

                {/* For NUST: Key Modules */}
                {edu.keyModules && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                      Relevant Informatics Modules & Coursework:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {edu.keyModules.map((mod, i) => (
                        <span key={i} className="code-pill">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* For A-Level and O-Level: Subjects & Grades Table */}
                {edu.subjectsAndGrades && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                        Subjects & Results:
                      </div>
                      {edu.examinationBoard && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                          Board: {edu.examinationBoard}
                        </span>
                      )}
                    </div>

                    <div 
                      style={{
                        background: 'var(--bg-input)',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem' }}>
                        <thead>
                          <tr style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                            <th style={{ padding: '0.6rem 0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Subject</th>
                            <th style={{ padding: '0.6rem 0.85rem', color: 'var(--text-muted)', fontWeight: '600', width: '100px', textAlign: 'right' }}>Grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {edu.subjectsAndGrades.map((sub, i) => (
                            <tr key={i} style={{ borderBottom: i < edu.subjectsAndGrades.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                              <td style={{ padding: '0.5rem 0.85rem', color: 'var(--text-primary)' }}>
                                {sub.subject}
                              </td>
                              <td style={{ padding: '0.5rem 0.85rem', textAlign: 'right', fontWeight: '600', color: sub.grade.includes('[') ? '#f59e0b' : 'var(--accent-cyan)' }}>
                                {sub.grade}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {edu.note && (
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                        * {edu.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Guidance notice */}
        <div 
          style={{
            background: 'rgba(245, 158, 11, 0.05)',
            border: '1px dashed rgba(245, 158, 11, 0.3)',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
            maxWidth: '850px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}
        >
          <FileSpreadsheet size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: '#f59e0b' }}>To Update Your Academic Records: </strong>
            Open <code className="code-pill">src/data/portfolioData.js</code> and update the <code className="code-pill">educationData</code> array with your secondary schools, completion years, and actual exam grades.
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-container {
            padding-left: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
