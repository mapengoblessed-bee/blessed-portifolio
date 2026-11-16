import React, { useState } from 'react';
import { 
  Code2, Globe, Database, Wrench, Cpu, 
  CheckCircle, Sparkles, AlertCircle, Terminal 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Code2 size={20} color="var(--accent-cyan)" />;
      case 'web-dev':
        return <Globe size={20} color="var(--accent-blue)" />;
      case 'databases':
        return <Database size={20} color="var(--accent-purple)" />;
      case 'tools':
        return <Wrench size={20} color="var(--accent-emerald)" />;
      case 'other':
      default:
        return <Cpu size={20} color="#f59e0b" />;
    }
  };

  const getLevelBadgeClass = (level) => {
    if (level.toLowerCase().includes('in progress') || level.toLowerCase().includes('learning')) {
      return 'badge-amber';
    }
    if (level.toLowerCase().includes('proficient')) {
      return 'badge-cyan';
    }
    return 'badge-purple';
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section 
      id="skills" 
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
            <Terminal size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc">
            A transparent inventory of programming languages, web frameworks, database systems, and methodologies supported by academic coursework and project experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn btn-sm ${selectedCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {displayedCategories.map((cat) => (
            <div 
              key={cat.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div 
                    style={{
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                      {cat.title}
                    </h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {cat.description}
                </p>

                {/* Skills List inside Category */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      style={{
                        background: 'var(--bg-input)',
                        padding: '0.85rem',
                        borderRadius: '0.5rem',
                        border: '1px solid var(--border-color)',
                        transition: 'border-color 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                          {skill.name}
                        </span>
                        <span className={`badge ${getLevelBadgeClass(skill.level)}`}>
                          {skill.isInProgress && <span className="status-dot" style={{ background: '#f59e0b' }}></span>}
                          {skill.level}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                        {skill.experience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Integrity & Honest Proficiency Banner */}
        <div 
          style={{
            background: 'rgba(6, 182, 212, 0.05)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.75rem',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <AlertCircle size={22} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Academic Integrity Standard: </strong>
            Technologies are presented in accordance with actual undergraduate coursework and project exposure. Technologies marked as <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>In Progress</span> represent active learning goals for industrial attachment.
          </div>
        </div>

      </div>
    </section>
  );
}
