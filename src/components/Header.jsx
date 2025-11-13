import React from 'react';
import logo from '../../logo.png';

const Header = () => {
  return (
    <header className="w-full px-6 py-6">
      {/* Logo positioned in top right */}
      <img
        src={logo}
        alt="MWAN"
        className="h-24 w-auto object-contain"
      />
    </header>
  );
};

export default Header;

