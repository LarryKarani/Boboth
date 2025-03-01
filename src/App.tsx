import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Work />
        <Clients />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;