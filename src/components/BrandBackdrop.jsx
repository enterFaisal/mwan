import React from 'react';
import pattern from '../../pattren.png';

const BrandBackdrop = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* Dark background */}
      <div className="absolute inset-0 bg-mwan-dark" />
      {/* Pattern swoosh image overlay */}
      <img
        src={pattern}
        alt=""
        className="absolute bottom-0 left-0 w-full h-auto max-w-none opacity-50 select-none"
      />
    </div>
  );
};

export default BrandBackdrop;


