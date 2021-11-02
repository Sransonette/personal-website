import React from 'react';
import Contact from './components/Contact/contact';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Topbar from './components/topbar/topbar';
import Works from './components/works/works';
import "./App.scss"


function App() {
  return (
    <div className="App">
      <Topbar />
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
