import React from 'react';
import logo from '../../logo.png';

const Header = ({ title, showLogo = true }) => {
  return (
    <header className="w-full bg-mwan-dark shadow-xl">
      {/* Brand top accent */}
      <div className="h-2 bg-mwan-green w-full" />
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {showLogo && (
          <div className="flex items-center gap-4">
            {/* Logo slot - replace src with official asset when available */}
            <img
              src={logo}
              alt="MWAN"
              className="w-64 h-24 object-contain hidden sm:block"
            />

          </div>
        )}

        {title && (
          <h2 className="text-3xl font-extrabold text-white text-center flex-1">{title}</h2>
        )}
      </div>
    </header>
  );
};

export default Header;

