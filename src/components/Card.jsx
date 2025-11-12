import React from 'react';

const Card = ({ 
  children, 
  className = "", 
  hover = false,
  onClick = null 
}) => {
  const hoverClass = hover ? "hover:bg-white/20 hover:scale-105 cursor-pointer" : "";
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

