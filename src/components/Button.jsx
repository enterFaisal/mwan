import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  disabled = false,
  type = "button"
}) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    back: "btn-back"
  };

  const baseClass = variants[variant] || variants.primary;
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

