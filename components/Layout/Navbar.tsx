import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { label: 'Inicio', path: '/', id: '00' },
    { label: 'Manifiesto', path: '/manifesto', id: '01' },
    { label: 'Servicios', path: '/services', id: '02' },
    { label: 'Sucursales', path: '/locations', id: '03' },
    { label: 'Galería', path: '/gallery', id: '04' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 border-b-2 border-primary bg-background-dark/95 backdrop-blur-sm">
        <div className="flex justify-between items-stretch h-16">
          <Link to="/" className="flex items-center px-6 border-r-2 border-primary bg-primary text-white hover:bg-accent-blue transition-colors z-50">
            <span className="text-2xl font-bold tracking-tighter">IRON BLOC</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center flex-grow justify-end">
            <Link to="/manifesto" className="h-full flex items-center px-8 border-l border-white/10 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest font-bold">
              Manifiesto
            </Link>
            <Link to="/services" className="h-full flex items-center px-8 border-l border-white/10 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest font-bold">
              Servicios
            </Link>
            <Link to="/locations" className="h-full flex items-center px-8 border-l border-white/10 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest font-bold">
              Sucursales
            </Link>
            <Link to="/gallery" className="h-full flex items-center px-8 border-l border-white/10 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest font-bold">
              Galería
            </Link>
            <Link 
              to="/join" 
              className="group relative h-full flex items-center px-10 bg-white text-black overflow-hidden uppercase text-sm tracking-widest font-bold border-l-2 border-primary"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">¡Únete Ya!</span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 flex items-center justify-center px-6 border-l border-white/10 bg-background-dark text-white hover:bg-white/5 transition-colors w-20"
          >
            <div className="flex flex-col gap-1.5 items-end">
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
                <span className={`h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-black/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Background Grids/Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/10"></div>
        <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-white/10"></div>

        {/* Content Container */}
        <div className="flex-grow flex flex-col justify-center px-8 relative z-10 pt-20">
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <Link 
                key={item.label}
                to={item.path}
                className={`group block relative pl-8 transform transition-all duration-500 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Index Number */}
                <span className="absolute left-0 top-2 text-[10px] font-mono text-primary opacity-50 font-bold tracking-widest">
                  {item.id}
                </span>
                
                {/* Text Label */}
                <span className="text-5xl xs:text-6xl font-bold uppercase tracking-tighter text-outline group-hover:text-white group-hover:text-stroke-0 transition-colors duration-300 block">
                  {item.label}
                </span>

                {/* Hover line */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </div>

          {/* Special CTA for Mobile Menu */}
          <div className={`mt-12 pl-8 transform transition-all duration-500 delay-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
             <Link 
                to="/join"
                className="w-full block bg-primary text-white text-center py-4 font-bold uppercase tracking-widest text-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-colors"
             >
                ¡Únete al Bloc!
             </Link>
          </div>
        </div>

        {/* Footer Info / Marquee */}
        <div className="border-t border-white/10 bg-neutral-dark py-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary animate-pulse"></div>
            <div className="flex justify-between items-center px-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                <span>SYS: ONLINE</span>
                <span>LOC: CDMX</span>
                <span>V.2.4</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;