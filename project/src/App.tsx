import React from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen">
      <Navigation
        profileImage="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=800&auto=format&fit=crop&q=80"
        name="Alex Mitchell"
      />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;