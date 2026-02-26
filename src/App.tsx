import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Offers from './components/Offers';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Offers />
        <Location />
        <Contact />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
