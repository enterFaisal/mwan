import React from 'react';

const Card = ({ 
  children, 
  className = "", 
  hover = false,
  onClick = null 
}) => {
  // Brand-friendly hover: emphasize border and shadow, avoid glassy overlay
  const hoverClass = hover ? "hover:scale-105 hover:shadow-xl hover:border-mwan-green cursor-pointer" : "";
  const clickableClass = onClick ? "cursor-pointer" : "";
  
  return (
    <div
      onClick={onClick}
      className={`card ${hoverClass} ${clickableClass} ${className} transition-all duration-300`}
    >
      {children}
    </div>
  );
};

export default Card;

