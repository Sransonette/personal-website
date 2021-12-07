import React from 'react';
import Contact from './components/Contact/contact';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Topbar from './components/topbar/topbar';
import Works from './components/works/works';
import { useState } from 'react';
import "./App.scss"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
