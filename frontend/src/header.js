import React from 'react';
import './header.css';
import StartupX from './startupx.jpeg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header-container">
      <img src={StartupX} alt="Startup X Logo" className="header-logo" />
      <ul className="header-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/donate">Payment</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/">Back</Link></li>
      </ul>
    </div>
  )
}

export default Header
