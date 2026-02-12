import React from 'react';
import { Link } from 'react-router-dom';

const Manifesto: React.FC = () => {
  return (
    <main className="pt-16 border-x-0 md:border-x-2 border-white/10 max-w-[1600px] mx-auto relative z-10 bg-background-dark min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 px-6 border-b-2 border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_11px)]"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1 border border-primary text-primary font-mono text-xs uppercase tracking-[0.3em] mb-6 bg-black">
            Doc. Ref: 001-IRON
          </span>
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            NUESTRA <br/> <span className="text-outline">LEY.</span>
          </h1>
          <p className="text-xl md:text-2xl font-mono text-gray-400 max-w-3xl mx-auto border-l-4 border-primary pl-6 text-left">
            IRON BLOC no es para todos. Es un filtro. Un santuario para los que entienden que la fuerza no se compra, se alquila con sudor, y el alquiler se paga todos los días.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-white/10">
        <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors">
          <span className="text-8xl font-bold text-white/5 group-hover:text-primary/20 transition-colors absolute top-4 right-8">01</span>
          <h2 className="text-4xl font-bold uppercase mb-6 text-primary">Intensidad<br/><span className="text-white">Absoluta</span></h2>
          <p className="text-gray-300 leading-relaxed font-light text-lg">
            No creemos en series de relleno. Si todavía puedes hablar después de tu serie, no fue una serie real. Aquí venimos a fallar, porque en el fallo muscular es donde nace el crecimiento.
          </p>
        </div>
        <div className="relative min-h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50 hover:scale-105 transition-transform duration-700"
            alt="Gym Intensity"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-white/10">
         <div className="relative min-h-[400px] overflow-hidden order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50 hover:scale-105 transition-transform duration-700"
            alt="Focus"
          />
           <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        </div>
        <div className="p-12 md:p-20 border-l border-white/10 order-1 md:order-2 group hover:bg-white/5 transition-colors">
          <span className="text-8xl font-bold text-white/5 group-hover:text-primary/20 transition-colors absolute top-4 right-8">02</span>
          <h2 className="text-4xl font-bold uppercase mb-6 text-primary">Sin<br/><span className="text-white">Ego</span></h2>
          <p className="text-gray-300 leading-relaxed font-light text-lg">
            Deja tu estatus, tu trabajo y tu vanidad en la puerta. Bajo la barra, todos pesamos lo mismo. Respetamos el esfuerzo, no el peso. Un principiante dándolo todo merece más respeto que un veterano a medio gas.
          </p>
        </div>
      </section>

       <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-white/10">
        <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors">
          <span className="text-8xl font-bold text-white/5 group-hover:text-primary/20 transition-colors absolute top-4 right-8">03</span>
          <h2 className="text-4xl font-bold uppercase mb-6 text-primary">Hierro<br/><span className="text-white">Puro</span></h2>
          <p className="text-gray-300 leading-relaxed font-light text-lg">
            Rechazamos las máquinas que hacen el trabajo por ti. Priorizamos el peso libre, la calistenia lastrada y los movimientos compuestos. Si es cómodo, no funciona.
          </p>
        </div>
         <div className="relative min-h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50 hover:scale-105 transition-transform duration-700"
            alt="Raw Iron"
          />
           <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 text-center bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')"}}></div>
        <div className="relative z-10">
          <h3 className="text-4xl md:text-6xl font-bold uppercase mb-8">¿Listo para comprometerte?</h3>
          <Link to="/join" className="group relative inline-block bg-black text-white px-12 py-4 text-xl font-bold uppercase tracking-widest overflow-hidden border-2 border-transparent hover:border-black">
            <span className="relative z-10 group-hover:text-black transition-colors">Únete al Bloc</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Manifesto;