
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PaymentForm from './PaymentForm';
    import Header from './header';
    import sucess from './sucess';
    import cancel from './cancel';
import FeedbackForm from './feedback';
import Footer from './footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<PaymentForm />} />
          <Route path="/feedback" element={<FeedbackForm />}/>
        <Route path="/sucess" element={<sucess/>}/>
        <Route path="/cancel" element={<cancel/>}/>
         </Routes>
         <Footer/>
      </div>
    </Router>
  );
};

export default App;

