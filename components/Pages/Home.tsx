import React from 'react';
import Hero from '../Sections/Hero';
import Philosophy from '../Sections/Philosophy';
import Services from '../Sections/Services';
import Pricing from '../Sections/Pricing';
import Location from '../Sections/Location';

const Home: React.FC = () => {
  return (
    <main className="pt-16 border-x-0 md:border-x-2 border-white/10 max-w-[1600px] mx-auto relative z-10">
      <Hero />
      <Philosophy />
      <Services />
      <Pricing />
      <Location />
    </main>
  );
};

export default Home;