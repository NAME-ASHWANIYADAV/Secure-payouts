import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import StripePaymentForm from './StripePaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './header.js';

const stripePromise = loadStripe('pk_test_51OxwfiSHo9QORuto9btV2wKOgNIK65CLOuspbU62EMLhmPIXSHkWTU1vamFipbwQfUaLH2j2XlYct4oNLSmQprre00dNz6driG');

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={
            <Elements stripe={stripePromise}>
              <StripePaymentForm />
            </Elements>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
