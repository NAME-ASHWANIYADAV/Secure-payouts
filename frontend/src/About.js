import React from 'react';
import './About.css'; // Import CSS file for styles

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About StartupX Relief Fund</h2>
      <p>StartupX Relief Fund is a tech society dedicated to helping underprivileged children by providing them with essential resources such as food, education, and healthcare. Our mission is to make a positive impact on the lives of these children and contribute to building a better future.</p>
      
      <h3 className="team-title">Our Team</h3>
      <ul className="team-list">
        <li>Krissmann Gupta - Founder</li>
        <li>Ekansh Bhushan - President</li>
        <li>Maanit Arora - Vice-President</li>
        {/* Add more team members as needed */}
      </ul>
      
      <p className="team-description">We are a passionate team committed to making a difference in the community. Together, we work towards creating meaningful and lasting change for those in need.</p>
    </div>
  );
};

export default About;


