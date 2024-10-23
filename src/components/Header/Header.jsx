import React, { useRef, useEffect, useState, useCallback } from 'react';

// Define styles outside the component for better readability
const headerStyle = {
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  backgroundColor: '#282C34', // Dark background for header (rich black)
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
};

const stickyHeaderStyle = {
  backgroundColor: '#3B3F45', // Slightly lighter gray when sticky
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const logoTextStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#FF6F61', // Vibrant coral color for the logo
  color: '#ffffff',
  textAlign: 'center',
  lineHeight: '40px',
  borderRadius: '50%',
  fontSize: '20px',
  fontWeight: '600',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const nameStyle = {
  lineHeight: '1.2',
};

const nameHeaderStyle = {
  fontSize: '1.5rem',
  color: '#F9FAFB', // Soft white text
  fontWeight: '700',
  textTransform: 'uppercase',
};

const nameSubHeaderStyle = {
  color: '#A0AEC0', // Cool gray for subheader
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'uppercase',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
};

const ulStyle = {
  display: 'flex',
  gap: '25px',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#CBD5E0', // Light cool gray for links
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  transition: 'color 0.3s ease, border-bottom 0.3s ease',
};

const activeLinkStyle = {
  color: '#FFD700', // Bright gold for active link
  borderBottom: '2px solid #FFD700',
};

const mobileMenuIconStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  color: '#F9FAFB', // White for mobile menu icon
};

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Sticky header function
  const stickyHeaderFunc = useCallback(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }

      // Check which section is in view
      const sections = ['home', 'about', 'services', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding some offset for better visibility

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.clientHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cleanup = stickyHeaderFunc();
    return cleanup;
  }, [stickyHeaderFunc]);

  // Handle smooth scroll
  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const headerHeight = headerRef.current.offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  // Toggle menu state
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header
      ref={headerRef}
      style={{
        ...headerStyle,
        ...(headerRef.current?.classList.contains('sticky_header') ? stickyHeaderStyle : {}),
      }}
    >
      <div style={logoStyle}>
        <span style={logoTextStyle}>AB</span>
        <div style={nameStyle}>
          <h2 style={nameHeaderStyle}>Akshay</h2>
          <p style={nameSubHeaderStyle}>Balte</p>
        </div>
      </div>

      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li><a href="#home" onClick={handleClick} style={activeSection === 'home' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Dashboard</a></li>
          <li><a href="#about" onClick={handleClick} style={activeSection === 'about' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>About Us</a></li>
          <li><a href="#services" onClick={handleClick} style={activeSection === 'services' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Educational Journey & Projects</a></li>
          <li><a href="#skills" onClick={handleClick} style={activeSection === 'skills' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Core Strengths</a></li>
          <li><a href="#portfolio" onClick={handleClick} style={activeSection === 'portfolio' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Certifications</a></li>
          <li><a href="#contact" onClick={handleClick} style={activeSection === 'contact' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Let's Talk</a></li>
        </ul>
      </nav>

      <div onClick={toggleMenu} style={mobileMenuIconStyle}>
        <i className="ri-menu-line"></i>
      </div>
    </header>
  );
};

export default Header;
