import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-dot">●</span>
          <NavLink to="/" className="logo-text" onClick={() => setMenuOpen(false)}>
            COMPANYNAME
          </NavLink>
        </div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
            ABOUT US
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
            SHOP
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
            LOGIN
          </NavLink>
        </nav>

        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
