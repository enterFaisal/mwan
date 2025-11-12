import React from 'react';
import logo from '../../logo.png';

const Header = () => {
  return (
    <header className="w-full relative z-20">
      {/* Logo in top right (top left in RTL) */}
      <div className="absolute top-6 right-6">
        <img
          src={logo}
          alt="MWAN"
          className="h-20 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;

