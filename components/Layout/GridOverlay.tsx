import React from 'react';

const GridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 max-w-[1600px] mx-auto px-0 md:px-0 hidden md:block">
      <div className="h-full w-full grid grid-cols-12 gap-0">
        <div className="border-l border-white/5 h-full col-start-1"></div>
        <div className="border-l border-white/5 h-full col-start-4"></div>
        <div className="border-l border-white/5 h-full col-start-7"></div>
        <div className="border-l border-white/5 h-full col-start-10"></div>
        <div className="border-r border-white/5 h-full col-end-13"></div>
      </div>
    </div>
  );
};

export default GridOverlay;