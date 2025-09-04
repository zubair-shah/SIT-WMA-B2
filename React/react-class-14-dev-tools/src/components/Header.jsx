import React, { useState } from "react";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">MyLogo</div>

      <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about#overview">About</a>
        <a href="/about#team">Team</a>
        <a href="/about#contact">Contact</a>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
