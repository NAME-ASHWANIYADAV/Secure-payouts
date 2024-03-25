import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to StartupX Relief Fund</h1>
      <p>StartupX is a tech society of Delhi Technology College. This website is made to help poor children by providing food and other facilities.</p>
      <div className="buttons">
        <Link to="/donate" className="btn-donate">Donate</Link>
        <Link to="/about" className="btn-about">About</Link>
      </div>
    </div>
  );
};

export default Home;
