import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="border-b-2 border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-neutral-dark">
          <span className="text-primary font-mono text-xs mb-4 block uppercase tracking-[0.2em]">02 // ARSENAL</span>
          <h3 className="text-5xl font-bold uppercase mb-6">HERRAMIENTAS<br />DE GUERRA</h3>
          <p className="text-gray-400 font-mono text-sm leading-relaxed">
            Equipo seleccionado por función, no por moda. Grado industrial. Uso rudo.
          </p>
        </div>
        <ServiceItem
          number="01"
          title="PESO LIBRE"
          items={['Mancuernas hasta 150lbs', 'Bancos de competencia', 'Discos calibrados']}
        />
        <ServiceItem
          number="02"
          title="ACONDICIONAMIENTO"
          items={['Bicicletas Assault', 'Pista de empuje (30m)', 'Cuerdas de batalla']}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        <ServiceItem
          number="03"
          title="FUNCIONAL"
          items={['Sistema de Jaulas', 'Kettlebells', 'Balones medicinales']}
        />
        <ServiceItem
          number="04"
          title="RECUPERACIÓN"
          items={['Zona de movilidad', 'Rodillos de espuma', 'Área post-entreno']}
        />
        <Link to="/gallery" className="relative overflow-hidden group min-h-[250px] block">
          <img
            alt="Interior de gimnasio vacío con pesas y equipo"
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3WMeXpESYkW07682RWV2dPPmxDzNTPhdrLwsWd1dvezVzfEfq6RzzHoqxhbHvF68ERGST-nHQBEKj3gtn49BZ3LmQ-5UiNwoCpiZfhw5baTAk9AJKnQIpig7d3f1NrNQC3IGJYMT-0q0GGtefpt9Y4NyEW95shWgKqeXkFWJP3M9V1iZUKlc-nBRTcZ8AG68rEUBjiG5ImNZjaDJbdqT2BshUkGAN9Xp3xA-0zOC8Km1OuPmrETrm0FL29TMg3B8lW9x2y4RITu8"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-transparent transition-colors">
            <span className="text-white font-bold text-xl uppercase tracking-widest border-2 border-white px-4 py-2 rotate-[-5deg] group-hover:rotate-0 transition-transform cursor-pointer">
              VER GALERÍA
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

const ServiceItem: React.FC<{ number: string; title: string; items: string[] }> = ({ number, title, items }) => (
  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group relative">
    <div className="absolute top-4 right-4 text-primary opacity-20 font-bold text-6xl group-hover:opacity-100 transition-opacity">
      {number}
    </div>
    <h4 className="text-2xl font-bold uppercase mb-4 border-b border-primary inline-block pb-1">{title}</h4>
    <ul className="space-y-3 font-mono text-sm text-gray-300">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center">
          <span className="w-2 h-2 bg-primary mr-3"></span>{item}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;