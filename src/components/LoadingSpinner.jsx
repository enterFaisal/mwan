import React from 'react';

const LoadingSpinner = ({ message = "جاري التحميل..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-mwan-green/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-mwan-green border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-xl text-white font-semibold animate-pulse">{message}</p>
    </div>
  );
};

export default LoadingSpinner;

