import React from 'react';
import pattern from '../../pattren.png';
import bgImage1 from '../../bg (1).jpg';
import bgImage2 from '../../bg (2).jpg';

const BrandBackdrop = () => {
  // Randomly select one of the background images
  const backgroundImage = Math.random() > 0.5 ? bgImage1 : bgImage2;
  
  return (
    <>
      {/* Background images - lowest layer */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none blur-sm"
        />
      </div>
      
      {/* Dark blue overlay - on top of background images */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute inset-0 bg-mwan-dark/85" />
      </div>
      
      {/* Pattern swoosh - separate layer, always visible under content */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5]">
        <img
          src={pattern}
          alt=""
          className="absolute bottom-5 lg:-bottom-10 -left-10 w-full h-auto max-w-none opacity-50 select-none"
        />
      </div>
    </>
  );
};

export default BrandBackdrop;


