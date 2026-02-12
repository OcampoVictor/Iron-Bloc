import React from 'react';
import { Link } from 'react-router-dom';

const Location: React.FC = () => {
  const socialLinks = [
    { label: 'IG', url: 'https://www.instagram.com' },
    { label: 'YT', url: 'https://www.youtube.com' },
    { label: 'TT', url: 'https://www.tiktok.com' }
  ];

  return (
    <section id="locations" className="relative border-b-2 border-white/10 bg-background-dark overflow-hidden min-h-[800px] flex items-center">
      
      {/* Background Map Layer - Tactical/Blueprint Look */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-none">
        <img
          alt="Mapa táctico de ubicación"
          className="w-full h-full object-cover filter invert hue-rotate-180 contrast-125 brightness-75 grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8sxCG9Dr8CL_4t7N5G4fvy8uZFiQ4l0KlUJSVofKxAavnlTtUCDEzPcjlOTVL3JWN4uAyLHxCAPqMUdKtiN-jUoq4Q-ecWyNzaXUyLcLntGoE9kIit1T_PYpFC5xHocyvAh9WDYHQPuZg5QBjI4DzCTEnn6EqeuLp_f7a_GllOxVzjKZ2tOizes6irUg8q-YXyxsZSS61v01nrBh2Mxi7qZuxS1-ZbxfcBGSAa9wpWgSNlaVxtXb7JjYdMaOFddPXwqRNtPcOC6U"
        />
        {/* Blue Tint Overlay */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        
        {/* Radar Scan Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[50%] animate-scan z-10"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 w-full h-full py-20 flex flex-col justify-center">
        
        {/* Giant Background Text */}
        <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-20 select-none">
          <span className="text-[20vw] font-bold text-outline leading-none whitespace-nowrap">
            ZONA 01
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Indicators */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 border border-primary/50 bg-black/50 backdrop-blur px-4 py-2 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-mono text-primary text-xs uppercase tracking-widest">Estado: Operativo 24/7</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white mix-blend-difference">
              COORDENADAS <br />
              <span className="text-primary">CONFIRMADAS</span>
            </h2>

            <div className="mt-4">
              <Link to="/locations" className="group relative inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold uppercase text-lg overflow-hidden border-2 border-transparent hover:border-white transition-colors">
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                    <span className="material-icons">map</span>
                    Ver todas las sucursales
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>
          </div>

          {/* Right Column: Info Cards (HUD Style) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="group bg-black/80 backdrop-blur-md border border-white/20 p-8 hover:border-primary transition-colors relative overflow-hidden">
               {/* Decorative Corners */}
               <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
               
               <h3 className="text-2xl font-bold uppercase mb-4 flex items-center gap-3">
                 <span className="material-icons text-primary">location_on</span>
                 EL BÚNKER (HQ)
               </h3>
               <p className="font-mono text-gray-400 mb-6 text-lg leading-relaxed">
                 Av. Concreto 1984, Nivel Sótano<br />
                 Zona Industrial, CDMX 06600
               </p>
               <Link to="/join" className="group relative inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold uppercase text-sm tracking-widest overflow-hidden">
                 <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                    Trazar Ruta
                    <span className="material-icons text-sm">north_east</span>
                 </span>
                 <div className="absolute inset-0 bg-primary transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
               </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-neutral-dark/90 backdrop-blur-md border border-white/20 p-8 flex flex-col gap-6 relative">
              <div className="absolute top-4 right-4 text-white/10 font-bold text-4xl">03</div>
              
              <div>
                <h5 className="font-mono text-xs text-primary uppercase mb-2 tracking-widest">Transmisión Directa</h5>
                <a href="mailto:fuerza@ironbloc.mx" className="text-2xl md:text-3xl font-bold text-white hover:text-primary transition-colors block">
                  fuerza@ironbloc.mx
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                 <div>
                    <span className="block font-mono text-xs text-gray-500 uppercase">Semana</span>
                    <span className="text-white font-bold text-lg">05:00 - 23:00</span>
                 </div>
                 <div>
                    <span className="block font-mono text-xs text-gray-500 uppercase">Fines</span>
                    <span className="text-white font-bold text-lg">07:00 - 21:00</span>
                 </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-2">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white text-xs font-bold"
                    aria-label={`Visitar ${social.label}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Decorative Crosshairs */}
      <div className="absolute top-8 left-8 text-white/20 font-mono text-xs">+ LAT 19.4326</div>
      <div className="absolute bottom-8 right-8 text-white/20 font-mono text-xs">+ LNG -99.1332</div>
      <div className="absolute top-1/2 left-4 w-4 h-[1px] bg-white/20"></div>
      <div className="absolute top-1/2 right-4 w-4 h-[1px] bg-white/20"></div>

    </section>
  );
};

export default Location;