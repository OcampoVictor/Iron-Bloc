import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex items-center justify-center">
      {/* Enlace a WhatsApp API */}
      <a 
        href="https://wa.me/525512345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl transition-transform hover:scale-110 group animate-shockwave"
        aria-label="Contactar por WhatsApp"
      >
        {/* SVG de WhatsApp */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Logo" 
          className="w-8 h-8 md:w-10 md:h-10 text-white z-10"
        />
        
        {/* Tooltip Estilo Brutalista */}
        <div className="absolute right-full mr-4 bg-black border border-white/20 px-3 py-1 hidden group-hover:block whitespace-nowrap">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                INICIAR CHAT
            </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;