
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logoBase64 } from '../assets/logo';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block md:inline-block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary/10'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/services', text: 'Services' },
    { to: '/clients', text: 'Clients' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logoBase64} alt="Safemax Consultants Limited Logo" className="h-14 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to}>{link.text}</NavItem>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to}>{link.text}</NavItem>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
