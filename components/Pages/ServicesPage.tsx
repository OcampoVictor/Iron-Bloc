import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <main className="pt-16 max-w-[1600px] mx-auto border-x-0 md:border-x-2 border-white/10 bg-background-dark min-h-screen">
      
      {/* Header: ARSENAL */}
      <section className="relative py-24 px-6 border-b-2 border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <span className="inline-block px-3 py-1 bg-primary text-white font-mono text-xs font-bold uppercase tracking-widest">
              Inventario Táctico V.2.0
            </span>
            <div className="flex items-center gap-4 text-gray-500 font-mono text-xs">
              <span>ESTADO: OPTIMIZADO</span>
              <span>///</span>
              <span>CALIBRACIÓN: PERFECTA</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold uppercase leading-none tracking-tighter mb-4">
            ARSENAL <br/>
            <span className="text-outline-blue md:ml-24 block">PESADO</span>
          </h1>
          
          <p className="max-w-2xl text-xl text-gray-400 font-light mt-8 border-l-2 border-white/20 pl-6">
            Equipamiento de grado industrial seleccionado para rendimiento máximo. Sin plásticos, sin pantallas táctiles innecesarias. Solo física pura.
          </p>
        </div>
      </section>

      {/* Category 1: Free Weights */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-white/10 min-h-[600px]">
        <div className="lg:col-span-5 relative border-b lg:border-b-0 lg:border-r border-white/10 group overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-700"
            alt="Dumbbells" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-8">
             <span className="text-8xl font-bold text-outline opacity-50 select-none">01</span>
             <h2 className="text-4xl font-bold uppercase text-white relative z-10 -mt-6">Zona de <br/>Impacto</h2>
           </div>
        </div>
        
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-neutral-dark/30">
          <div className="mb-12">
            <h3 className="text-2xl font-bold uppercase text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary"></span> Peso Libre
            </h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed max-w-lg">
              El corazón del entrenamiento de fuerza. Mancuernas soldadas de una sola pieza y discos calibrados para asegurar que levantas exactamente lo que crees que levantas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecCard 
              title="Mancuernas Pro" 
              specs={["5lbs - 150lbs", "Agarre moleteado agresivo", "Diseño Hex anti-rodamiento"]} 
            />
            <SpecCard 
              title="Discos Calibrados" 
              specs={["Acero mecanizado", "Tolerancia +/- 10g", "Colores estándar IPF"]} 
            />
            <SpecCard 
              title="Bancos Power" 
              specs={["Estructura Calibre 11", "Tapizado antideslizante", "Soporte Spotter"]} 
            />
             <SpecCard 
              title="Plataformas" 
              specs={["Madera de Maple y Caucho", "Absorción de impacto", "Insertos de Deadlift"]} 
            />
          </div>
        </div>
      </section>

      {/* Category 2: Machines */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-white/10 min-h-[600px]">
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-neutral-dark/30 order-2 lg:order-1">
          <div className="mb-12">
            <h3 className="text-2xl font-bold uppercase text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary"></span> Biomecánica
            </h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed max-w-lg">
              Máquinas de palanca diseñadas para aislar el músculo con precisión quirúrgica. Perfiles de resistencia optimizados para la hipertrofia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecCard 
              title="Tren Inferior" 
              specs={["Prensa de pierna 45°", "Hack Squat Lineal", "Belt Squat Pit Shark"]} 
            />
            <SpecCard 
              title="Tracción/Empuje" 
              specs={["Remo en T con apoyo", "Press Inclinado Convergente", "Jalón Dorsal Iso-Lateral"]} 
            />
            <SpecCard 
              title="Poleas" 
              specs={["Doble Torre Ajustable", "Lat Pulldown Mag-Grip", "Remo sentado columna de 300lbs"]} 
            />
          </div>
        </div>

        <div className="lg:col-span-5 relative border-b lg:border-b-0 lg:border-l border-white/10 group overflow-hidden order-1 lg:order-2">
           <img 
            src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-700"
            alt="Machines" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
           <div className="absolute bottom-0 right-0 p-8 text-right">
             <span className="text-8xl font-bold text-outline opacity-50 select-none">02</span>
             <h2 className="text-4xl font-bold uppercase text-white relative z-10 -mt-6">Ingeniería <br/>Brutal</h2>
           </div>
        </div>
      </section>

       {/* Category 3: Cardio/Conditioning */}
       <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-white/10">
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 bg-black relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="material-icons text-6xl text-primary animate-pulse">speed</span>
           </div>
           <h3 className="text-4xl font-bold uppercase mb-8">Acondicionamiento <br/> Metabólico</h3>
           <ul className="space-y-6">
             <ListItem title="Assault Bikes" desc="Resistencia al aire ilimitada. Cuanto más empujas, más duele." />
             <ListItem title="Concept2 Rowers" desc="El estándar de oro en remo ergométrico." />
             <ListItem title="SkiErg" desc="Potencia de tren superior y core." />
             <ListItem title="Pista de Empuje" desc="30 metros de pasto sintético para Sleds y Farmer Carries." />
           </ul>
        </div>
        <div className="p-12 bg-neutral-dark relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="material-icons text-6xl text-primary">healing</span>
           </div>
           <h3 className="text-4xl font-bold uppercase mb-8">Zona de <br/> Recuperación</h3>
           <ul className="space-y-6">
             <ListItem title="Movilidad" desc="Bandas de resistencia, rodillos de espuma de alta densidad." />
             <ListItem title="Hypervolt" desc="Estaciones de terapia de percusión disponibles." />
             <ListItem title="Normatec" desc="Botas de compresión (Solo miembros Black)." />
           </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">
          NO HAY <span className="text-primary">SECRETOS.</span>
        </h2>
        <p className="mb-10 text-gray-400 font-mono">Solo el mejor equipo y tu voluntad de usarlo.</p>
        <Link 
          to="/join" 
          className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
            Iniciar Afiliación
            <span className="material-icons">arrow_forward</span>
          </span>
          <div className="absolute inset-0 bg-primary transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </Link>
      </section>

    </main>
  );
};

// Helper Components for this page
const SpecCard: React.FC<{ title: string; specs: string[] }> = ({ title, specs }) => (
  <div className="border border-white/10 bg-black/40 p-6 hover:border-primary/50 transition-colors group">
    <div className="flex justify-between items-start mb-4">
      <h4 className="font-bold uppercase text-white group-hover:text-primary transition-colors">{title}</h4>
      <span className="text-xs font-mono text-gray-600 group-hover:text-primary/50">+ SPEC</span>
    </div>
    <ul className="space-y-2">
      {specs.map((spec, i) => (
        <li key={i} className="text-xs font-mono text-gray-400 border-l border-white/10 pl-3">
          {spec}
        </li>
      ))}
    </ul>
  </div>
);

const ListItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <li className="border-l-2 border-primary pl-6">
    <h5 className="font-bold uppercase text-white mb-1">{title}</h5>
    <p className="text-sm font-mono text-gray-400">{desc}</p>
  </li>
);

export default ServicesPage;