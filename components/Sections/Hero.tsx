import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col border-b-2 border-white/10 overflow-hidden">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Atleta musculoso levantando pesas en blanco y negro de alto contraste"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 animate-zoom-slow"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAuu4EWYrVgaCB55wbZaPFY0dSv9iTypQIxx8UyIqbcPlspGwCJDT-2R57D0Cph4nAEUwVL8rpvXYFk6mhnRtOJmWk_xCXkGmw1iFGnXrrSE_UG5w19HJYEFRqW3p4PkaEhV87QtA00exhtkjt4E4SC7bdeAY3mx2BKzx8k8k9o7KhjUROhIDuJah2xNyqKFg-HHVYKMmTTiGmdVpPFFFUX9LUjy44eyRTGGOLpoF51O0nM9TK3P_q0afefeHgADbJWybtkfWETlw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        <div 
          className="absolute inset-0 bg-[size:100px_100px]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-4 md:px-12 pt-20">
        
        {/* Background Typography - PODER PURO */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-0 pointer-events-none select-none text-right mix-blend-overlay">
           <div className="flex flex-col items-end opacity-80 md:opacity-100 pr-2 md:pr-8">
              <span className="text-[18vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter text-outline text-transparent animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                PODER
              </span>
              <span className="text-[18vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter text-outline text-transparent animate-fade-in-up" style={{ animationDelay: '1s' }}>
                PURO
              </span>
           </div>
        </div>

        <div className="max-w-7xl relative z-10 w-full -mt-24 md:mt-0">
          <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-6 relative">
            <span className="block animate-reveal overflow-hidden">FORJA</span>
            <span className="block text-primary md:ml-24 animate-reveal overflow-hidden" style={{ animationDelay: '0.2s' }}>TU ACERO.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="p-4 border border-primary bg-background-dark/80 backdrop-blur max-w-sm">
              <p className="text-sm font-mono text-gray-300 uppercase leading-relaxed">
                // Sistema: Brutal<br />
                // Método: Sin Atajos<br />
                // Resultado: Indiscutible
              </p>
            </div>
            <Link
              to="/join"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white uppercase bg-primary overflow-hidden transition-transform active:scale-95 border-2 border-transparent hover:border-white"
            >
              <span className="relative z-10 group-hover:text-black transition-colors">Entrena Sin Excusas</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-20 border-t-2 border-primary bg-primary text-white overflow-hidden py-3">
        <div className="whitespace-nowrap animate-marquee flex gap-12 font-mono text-sm md:text-base font-bold uppercase tracking-widest">
          {[1,2,3].map(i => (
            <React.Fragment key={i}>
              <span>Sin Excusas</span>
              <span>///</span>
              <span>El Hierro No Miente</span>
              <span>///</span>
              <span>El Dolor es Debilidad Saliendo del Cuerpo</span>
              <span>///</span>
              <span>Abierto 24/7</span>
              <span>///</span>
              <span>Solo Metal Pesado</span>
              <span>///</span>
              <span>Zona de Peso Libre</span>
              <span>///</span>
              <span>Plataformas de Peso Muerto</span>
              <span>///</span>
              <span>Racks de Sentadilla</span>
              <span>///</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;