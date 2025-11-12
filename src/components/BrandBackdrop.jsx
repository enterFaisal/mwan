import React from 'react';
import pattern from '../../pattren.png';

const BrandBackdrop = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Subtle gradients per brand */}
      <div className="brand-bg absolute inset-0" />
      {/* Pattern swoosh image overlay */}
      <img
        src={pattern}
        alt=""
        className="absolute bottom-[-10%] left-0 w-[140%] max-w-none opacity-35 select-none"
        style={{ mixBlendMode: 'normal' }}
      />
    </div>
  );
};

export default BrandBackdrop;


