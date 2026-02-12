import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <section id="join" className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')"
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
              Únete al <br /> <span className="text-black">BLOC.</span>
            </h2>
            <p className="text-xl font-mono border-l-4 border-black pl-6 py-2">
              Mes a mes. Sin contratos. Sin letras chiquitas. <br />
              Solo acceso al mejor equipo de la ciudad.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-4 min-w-[300px]">
            <div className="bg-black p-8 border-2 border-white transform hover:-translate-y-2 transition-transform">
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-400 font-mono text-sm uppercase">Acceso Estándar</span>
                <span className="text-4xl font-bold">$900<span className="text-sm font-normal text-gray-400">MXN</span></span>
              </div>
              <Link 
                to="/join" 
                state={{ plan: 'ESTÁNDAR' }}
                className="group relative block w-full text-center bg-white text-black font-bold uppercase py-4 overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">ELEGIR PLAN</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>
            <div className="bg-white text-black p-8 border-2 border-black transform hover:-translate-y-2 transition-transform">
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-600 font-mono text-sm uppercase">Llave Maestra (24/7)</span>
                <span className="text-4xl font-bold">$1200<span className="text-sm font-normal text-gray-600">MXN</span></span>
              </div>
              <Link 
                to="/join" 
                state={{ plan: 'MAESTRA' }}
                className="group relative block w-full text-center bg-primary text-white font-bold uppercase py-4 overflow-hidden border-2 border-transparent hover:border-black transition-colors"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">ELEGIR PLAN</span>
                <div className="absolute inset-0 bg-black transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;