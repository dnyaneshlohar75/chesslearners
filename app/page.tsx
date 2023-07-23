"use client"
import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits'
import Quotes from './components/Quotes';
import Gallary from './components/Gallary'
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import About from './components/About';

const Home = () => {
  return (
    <div>
      <Hero />
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