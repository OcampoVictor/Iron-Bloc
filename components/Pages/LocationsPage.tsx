import React from 'react';
import { Link } from 'react-router-dom';

interface LocationData {
  id: string;
  name: string;
  sector: string;
  coords: string;
  status: 'OPERATIVO' | 'MANTENIMIENTO' | 'PRÓXIMAMENTE';
  address: string;
  image: string;
  features: string[];
  hours: string;
  mapsLink: string;
}

const locations: LocationData[] = [
  {
    id: "01",
    name: "EL BÚNKER (HQ)",
    sector: "ZONA INDUSTRIAL",
    coords: "19.4326° N, 99.1332° W",
    status: "OPERATIVO",
    address: "Av. Concreto 1984, Nivel Sótano, CDMX",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
    features: ["Powerlifting Rack x8", "Plataformas Calibradas", "Strongman Area", "Duchas Industriales"],
    hours: "24/7 ACCESO TOTAL",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Zona+Industrial+CDMX"
  },
  {
    id: "02",
    name: "TORRE DE HIERRO",
    sector: "DISTRITO FINANCIERO",
    coords: "19.4270° N, 99.1677° W",
    status: "OPERATIVO",
    address: "Reforma 222, Piso -2 (Estacionamiento), CDMX",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    features: ["Máquinas Biomecánicas", "Zona Cardio Táctico", "Sauna Seco", "Recovery Lounge"],
    hours: "05:00 - 23:00",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Reforma+222+CDMX"
  },
  {
    id: "03",
    name: "HANGAR 09",
    sector: "PERIFERIA NORTE",
    coords: "19.5031° N, 99.2323° W",
    status: "PRÓXIMAMENTE",
    address: "Antigua Fábrica Textil, Nave 4, Naucalpan",
    image: "https://images.unsplash.com/photo-1517963879466-e925ac69aa18?q=80&w=2070&auto=format&fit=crop",
    features: ["Pista de 50m", "Cuerdas de Escalada", "Cross Training", "Zona al Aire Libre"],
    hours: "APERTURA 2024",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Naucalpan+Estado+de+Mexico"
  }
];

const LocationsPage: React.FC = () => {
  return (
    <main className="pt-16 max-w-[1600px] mx-auto border-x-0 md:border-x-2 border-white/10 bg-background-dark min-h-screen">
      
      {/* Header Táctico */}
      <section className="relative py-20 px-6 border-b-2 border-white/10 bg-neutral-dark overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <span className="w-3 h-3 bg-green-500 animate-pulse rounded-full"></span>
               <span className="font-mono text-xs text-primary uppercase tracking-widest">Sistema de Red: Activo</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              BASES DE <br/>
              <span className="text-primary">OPERACIÓN.</span>
            </h1>
          </div>
          
          <div className="border border-white/20 bg-black/50 p-6 backdrop-blur-sm min-w-[300px]">
            <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
              <span className="font-mono text-xs text-gray-400 uppercase">Total Sucursales</span>
              <span className="font-bold text-xl text-white">03</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-gray-400 uppercase">Capacidad Actual</span>
              <span className="font-bold text-xl text-white">84%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Ubicaciones */}
      <div className="flex flex-col">
        {locations.map((loc) => (
          <section key={loc.id} className="group grid grid-cols-1 lg:grid-cols-12 border-b-2 border-white/10 min-h-[500px]">
            
            {/* Imagen / Visual */}
            <div className="lg:col-span-7 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="absolute top-6 left-6 z-20 bg-black/80 px-4 py-2 border border-primary/30">
                <span className="font-mono text-xs text-white uppercase tracking-widest">SEC: {loc.sector}</span>
              </div>
              
              <img 
                src={loc.image} 
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-primary/0 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              
              {/* Big ID Number */}
              <span className="absolute bottom-[-20px] left-[-20px] text-[15rem] font-bold text-white/5 leading-none select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                {loc.id}
              </span>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-neutral-dark/20 group-hover:bg-neutral-dark/40 transition-colors relative">
              
              {/* Status Indicator */}
              <div className="absolute top-0 right-0 p-4">
                 <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest border ${
                   loc.status === 'OPERATIVO' ? 'border-green-500 text-green-500 bg-green-500/10' : 
                   loc.status === 'PRÓXIMAMENTE' ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' : 
                   'border-red-500 text-red-500'
                 }`}>
                   {loc.status}
                 </span>
              </div>

              <div>
                <h2 className="text-4xl font-bold uppercase mb-2 text-white group-hover:text-primary transition-colors">{loc.name}</h2>
                <p className="font-mono text-sm text-gray-500 mb-8 border-l-2 border-primary/50 pl-3">
                  COORD: {loc.coords}
                </p>

                <div className="mb-8">
                  <h4 className="font-bold text-white uppercase text-sm mb-4 border-b border-white/10 pb-2">Equipamiento Destacado</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {loc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-sm font-mono text-gray-400">
                        <span className="w-1 h-1 bg-primary mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Dirección</span>
                    <p className="text-white font-medium max-w-[200px]">{loc.address}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Horario</span>
                    <p className="text-white font-medium">{loc.hours}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a 
                    href={loc.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 bg-white text-black font-bold py-3 uppercase text-sm border border-transparent hover:border-white overflow-hidden text-center flex items-center justify-center"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors">Cómo llegar</span>
                    <div className="absolute inset-0 bg-primary transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                  </a>
                  <Link to="/join" className="group relative flex-1 border border-white text-white font-bold py-3 uppercase text-sm text-center overflow-hidden flex items-center justify-center">
                    <span className="relative z-10 group-hover:text-black transition-colors">Entrenar Aquí</span>
                    <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                  </Link>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Map Placeholder / Network Viz */}
      <section className="h-[400px] relative border-b-2 border-white/10 bg-black overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/50"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/50"></div>
            <div className="w-[60vw] h-[60vw] border border-primary/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="w-[40vw] h-[40vw] border border-primary/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
         </div>
         <div className="relative z-10 text-center">
            <h3 className="text-2xl font-mono uppercase text-primary animate-pulse">Buscando nuevas ubicaciones...</h3>
            <p className="text-gray-500 text-sm mt-2">Expansión de territorio en curso.</p>
         </div>
      </section>

    </main>
  );
};

export default LocationsPage;