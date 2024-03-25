import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PaymentForm from './PaymentForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home />} /> {/* Use element prop instead of component prop */}
          <Route path="/about" element={<About />} /> {/* Use element prop instead of component prop */}
          <Route path="/donate" element={<PaymentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

