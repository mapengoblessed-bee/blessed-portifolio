import React, { useState, useEffect } from 'react';
import { Menu, X, Code, FileText, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar({ onDownloadCvClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'education', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--nav-backdrop)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand / Name Logo */}
        <a 
          href="#hero" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          onClick={() => { setActiveSection('hero'); closeMenu(); }}
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
            }}
          >
            <Code size={20} />
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              {personalInfo.fullName.includes('[') ? 'Student Portfolio' : personalInfo.fullName}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              Informatics @ NUST
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;

            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.35rem 0'
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--accent-cyan)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Status Pill (Visible on large screens) */}
          <div className="status-pill-desktop" style={{ display: 'none', alignItems: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '0.35rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>
            <span className="status-dot"></span>
            <span>Year 3 Attachment Ready</span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CV Button */}
          <button
            onClick={onDownloadCvClick}
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ display: 'none' }}
            id="nav-cv-btn"
          >
            <FileText size={15} />
            <span>CV</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="btn btn-secondary btn-sm mobile-menu-btn"
            style={{ padding: '0.5rem', display: 'flex' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: '600', marginBottom: '0.5rem' }}>
              <span className="status-dot"></span>
              <span>Seeking Year 3 Industrial Attachment</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.75rem',
                  borderRadius: '0.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  background: 'var(--bg-input)'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--accent-cyan)" />
              </a>
            ))}

            <div style={{ paddingTop: '0.5rem', display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => { closeMenu(); onDownloadCvClick(); }}
                type="button"
                className="btn btn-primary"
                style={{ flex: 1, fontSize: '0.85rem', padding: '0.65rem' }}
              >
                <FileText size={16} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Responsive CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .status-pill-desktop {
            display: inline-flex !important;
          }
          #nav-cv-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
