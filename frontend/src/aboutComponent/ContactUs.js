import React from 'react';
import './ContactUs.css'; // Import CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <p className='contact-title'>Contact Us</p>
      <p className="contact-text">
        For quicker support, please visit self-help services like FAQs, ChatBot, Sony Community to find solutions to common issues.
      </p>
      <div className="contact-details">
        <p>Phone</p>
        <p className="phone">9999999999</p>
        <p>Email</p>
        <p className="email">startupXreliefFund@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;

