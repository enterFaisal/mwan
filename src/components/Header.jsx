import React from 'react';

const Header = ({ title, showLogo = true }) => {
  return (
    <header className="w-full bg-gradient-to-l from-mwan-dark to-gray-800 border-b-4 border-mwan-green shadow-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {showLogo && (
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-mwan-green rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              ♻️
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">موان MWAN</h1>
              <p className="text-sm text-gray-300">المركز الوطني لإدارة النفايات</p>
            </div>
          </div>
        )}
        
        {title && (
          <h2 className="text-3xl font-bold text-white text-center flex-1">{title}</h2>
        )}
      </div>
    </header>
  );
};

export default Header;

