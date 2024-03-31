import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import StripePaymentForm from './StripePaymentForm'; // Update import for payment form
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Header from './header.js';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<StripePaymentForm />} /> {/* Update route to use StripePaymentForm */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
