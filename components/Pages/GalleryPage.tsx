import React, { useState } from 'react';

type Category = 'TODAS' | 'INSTALACIONES' | 'COMUNIDAD' | 'HIERRO';

interface GalleryItem {
  id: number;
  src: string;
  category: Category;
  title: string;
  meta: string;
  size: 'normal' | 'wide' | 'tall';
}

const items: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    category: "HIERRO",
    title: "Zona de Impacto",
    meta: "IMG_001 // RAW",
    size: "wide"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    category: "COMUNIDAD",
    title: "Sin Ego",
    meta: "IMG_002 // CROWD",
    size: "normal"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
    category: "INSTALACIONES",
    title: "El Búnker",
    meta: "IMG_003 // SPACE",
    size: "tall"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    category: "HIERRO",
    title: "Arsenal Pesado",
    meta: "IMG_004 // EQUIP",
    size: "normal"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    category: "INSTALACIONES",
    title: "Torre de Hierro",
    meta: "IMG_005 // EXT",
    size: "tall"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
    category: "HIERRO",
    title: "Calibración",
    meta: "IMG_006 // PLATES",
    size: "normal"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2070&auto=format&fit=crop",
    category: "COMUNIDAD",
    title: "Sesión Nocturna",
    meta: "IMG_007 // NIGHT",
    size: "wide"
  },
   {
    id: 8,
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    category: "HIERRO",
    title: "Press de Banca",
    meta: "IMG_008 // FOCUS",
    size: "normal"
  },
];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<Category>('TODAS');

  const filteredItems = filter === 'TODAS' 
    ? items 
    : items.filter(item => item.category === filter || item.category === 'TODAS');

  return (
    <main className="pt-16 max-w-[1600px] mx-auto border-x-0 md:border-x-2 border-white/10 bg-background-dark min-h-screen">
      
      {/* Header */}
      <section className="relative py-24 px-6 border-b-2 border-white/10">
        <div className="absolute top-0 right-0 p-4 opacity-50">
             <span className="material-icons text-9xl text-white/5 rotate-12">collections</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-6">
            EVIDENCIA <br/>
            <span className="text-outline-blue">VISUAL.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400 font-mono border-l-4 border-primary pl-6">
            Documentación fotográfica de nuestras instalaciones y la brutalidad diaria. Sin filtros.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-background-dark/95 backdrop-blur border-b-2 border-white/10 overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap">
          {(['TODAS', 'INSTALACIONES', 'HIERRO', 'COMUNIDAD'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-6 text-sm font-bold uppercase tracking-widest transition-colors border-r border-white/10 hover:bg-white hover:text-black ${
                filter === cat ? 'bg-primary text-white' : 'text-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="p-4 md:p-6 bg-neutral-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden border border-white/10 bg-black cursor-crosshair ${
                item.size === 'wide' ? 'md:col-span-2' : 
                item.size === 'tall' ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Overlay Flash */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>

              {/* HUD / Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="flex justify-between items-start">
                  <span className="inline-block px-2 py-1 border border-primary text-primary text-[10px] font-mono font-bold uppercase tracking-widest bg-black">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">{item.meta}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Crosshairs corners */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Text */}
      <div className="py-12 text-center border-t-2 border-white/10 bg-background-dark">
         <p className="font-mono text-xs text-gray-600 uppercase tracking-[0.3em] animate-pulse">
           /// Fin de la transmisión ///
         </p>
      </div>

    </main>
  );
};

export default GalleryPage;