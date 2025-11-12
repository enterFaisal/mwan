import React from 'react';

const SaudiMap = ({ selectedCity, onCitySelect }) => {
  const cities = [
    { id: 'riyadh', name: 'الرياض', cx: 350, cy: 280 },
    { id: 'jeddah', name: 'جدة', cx: 180, cy: 290 },
    { id: 'makkah', name: 'مكة', cx: 200, cy: 310 },
    { id: 'madinah', name: 'المدينة', cx: 190, cy: 230 },
    { id: 'dammam', name: 'الدمام', cx: 450, cy: 270 },
    { id: 'tabuk', name: 'تبوك', cx: 220, cy: 150 },
    { id: 'qassim', name: 'القصيم', cx: 280, cy: 240 }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full max-w-2xl"
        style={{ filter: 'drop-shadow(0 0 10px rgba(29, 185, 84, 0.3))' }}
      >
        {/* Saudi Arabia Outline (Simplified) */}
        <path
          d="M 100 200 L 150 120 L 250 100 L 320 110 L 380 130 L 450 150 L 520 180 L 540 220 L 550 270 L 540 320 L 510 360 L 450 390 L 380 400 L 320 390 L 260 380 L 200 360 L 150 330 L 110 290 L 90 250 Z"
          fill="rgba(29, 185, 84, 0.1)"
          stroke="#1DB954"
          strokeWidth="3"
          className="transition-all duration-300"
        />

        {/* Grid Lines for Visual Effect */}
        <g opacity="0.1" stroke="#1DB954" strokeWidth="0.5">
          {[...Array(10)].map((_, i) => (
            <line key={`v${i}`} x1={60 + i * 50} y1="50" x2={60 + i * 50} y2="450" />
          ))}
          {[...Array(10)].map((_, i) => (
            <line key={`h${i}`} x1="60" y1={50 + i * 40} x2="560" y2={50 + i * 40} />
          ))}
        </g>

        {/* Cities */}
        {cities.map((city) => {
          const isSelected = selectedCity === city.id;
          const isOtherSelected = selectedCity && selectedCity !== city.id;
          
          return (
            <g
              key={city.id}
              onClick={() => onCitySelect(city.id)}
              className="cursor-pointer transition-all duration-300"
              style={{ 
                opacity: isOtherSelected ? 0.4 : 1,
                transform: isSelected ? 'scale(1.2)' : 'scale(1)',
                transformOrigin: `${city.cx}px ${city.cy}px`
              }}
            >
              {/* Glow Effect for Selected */}
              {isSelected && (
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r="30"
                  fill="none"
                  stroke="#1DB954"
                  strokeWidth="2"
                  opacity="0.5"
                  className="animate-pulse"
                />
              )}

              {/* City Marker */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r="12"
                fill={isSelected ? '#1DB954' : '#D0E0D9'}
                stroke={isSelected ? '#FFFFFF' : '#1DB954'}
                strokeWidth="2"
                className="transition-all duration-300 hover:fill-mwan-green hover:stroke-white"
              />

              {/* City Pin */}
              <path
                d={`M ${city.cx} ${city.cy - 12} L ${city.cx} ${city.cy - 25}`}
                stroke={isSelected ? '#1DB954' : '#D0E0D9'}
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* City Name */}
              <text
                x={city.cx}
                y={city.cy + 35}
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight={isSelected ? 'bold' : 'normal'}
                className="transition-all duration-300"
              >
                {city.name}
              </text>

              {/* Hover Effect */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r="25"
                fill="transparent"
                className="hover:fill-mwan-green hover:fill-opacity-20 transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(60, 420)">
          <circle cx="10" cy="10" r="8" fill="#1DB954" stroke="white" strokeWidth="2" />
          <text x="25" y="15" fill="white" fontSize="14">مدينة محددة</text>
          
          <circle cx="120" cy="10" r="8" fill="#D0E0D9" stroke="#1DB954" strokeWidth="2" />
          <text x="135" y="15" fill="white" fontSize="14">مدن أخرى</text>
        </g>
      </svg>
    </div>
  );
};

export default SaudiMap;

