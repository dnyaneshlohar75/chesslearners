"use client"
import React from 'react';
import Hero from './components/Hero';
import TreadMarks from './components/TreadMarks'
import Benefits from './components/Benefits'
import Quotes from './components/Quotes';
import Gallary from './components/Gallary'
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <TreadMarks />
      <Benefits />
      <Quotes />
      <Gallary />
      <Pricing />
      <About />
      <Footer />
    </div>
  )
}

export default Home;