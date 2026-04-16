import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog',       label: 'Blog' },
  { id: 'contact',    label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    const timer = setTimeout(() => {
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const observer = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
          { threshold: 0.5, rootMargin: '-80px 0px 0px 0px' }
        );
        observer.observe(el);
        observers.push(observer);
      });
    }, 300);
    return () => {
      clearTimeout(timer);
      observers.forEach(o => o.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="navbar__logo-link"
          >
            UMD.
          </a>
        </div>

        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id} className="navbar__item">
              <a
                href={`#${id}`}
                className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;