import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="manifesto" className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-white/10">
      <div className="p-8 md:p-20 border-r-0 lg:border-r-2 border-white/10 flex flex-col justify-center">
        <span className="text-primary font-mono text-xs mb-4 uppercase tracking-[0.2em]">01 // FILOSOFÍA</span>
        <h3 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8">
          RECHAZAMOS LA <br />
          <span className="text-outline-blue">COMODIDAD.</span>
        </h3>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
          Esto no es un spa. No hay agua de pepino. Solo hay hierro frío, concreto áspero y el sonido del esfuerzo. Construimos este espacio para aquellos que quieren desconectarse del ruido y reconectar con su fuerza.
        </p>
      </div>
      <div className="relative min-h-[400px] border-t-2 lg:border-t-0 border-white/10 group overflow-hidden">
        <img
          alt="Primer plano de manos con tiza agarrando una barra"
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlD56ktdqg4KyC3UzEcUv1rDErBjlmdJgbu0NzCLW1uI-WUobdhRln5rGNhHb1sBYOsQI9biMw8EYeGBWxyEgJgRwwaju1XzQZBV-N5fPtuzEWmu7QXk-R7a_NOYgcLgImFYsA7HgMUgyQV-MvRQQVhkacDMsm3nfsXYVjbq1HPnOhwjnZuDi-xl4iGT9SbH1WsB1seTrsJok_QAUALU6_jPI5jOhqhGpK4_Q8k6dPspqf99R_6hGUajI0e8Q8og7jhooa837rars"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 p-8 bg-black border-t border-l border-white/20">
          <span className="material-icons text-5xl text-white">fitness_center</span>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;