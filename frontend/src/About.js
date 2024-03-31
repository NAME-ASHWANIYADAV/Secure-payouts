import React from 'react';
import './About.css'; // Import CSS file for styles
import MemberInfo from './aboutComponent/MemberInfo.js'; 
import StartupxInfo from './aboutComponent/StartupxInfo.js'; 
import TeamDescription from './aboutComponent/TeamDescription.js';
import ContactUs from './aboutComponent/ContactUs';

const About = () => {
  return (
    <>
    <div className="about-container">
      <StartupxInfo/>
      <MemberInfo/>
      <TeamDescription/>
      <ContactUs/>
    </div>
    </>
  );
};

export default About;


