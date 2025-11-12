import React from 'react';

const BackButton = ({ onClick, label = "رجوع" }) => {
  return (
    <button
      onClick={onClick}
      className="btn-back group"
    >
      <svg 
        className="w-5 h-5 transition-transform group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
      <span>{label}</span>
    </button>
  );
};

export default BackButton;

