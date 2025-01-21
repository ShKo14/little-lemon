import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/images/littleLemonLogo.png" alt="Little Lemon Logo" className="navbar-logo" />
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reservation">Reserve</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

