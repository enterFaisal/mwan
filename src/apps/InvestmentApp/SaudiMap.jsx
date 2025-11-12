import React, { useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';

const SaudiMap = ({ selectedCity, onCitySelect }) => {
  // Build a GeoJSON for KSA (id 682 is ISO numeric code for Saudi Arabia)
  const saudiGeo = useMemo(() => {
    const countries = feature(worldData, worldData.objects.countries).features;
    const sa = countries.find((f) => f.id === 682);
    return { type: 'FeatureCollection', features: sa ? [sa] : [] };
  }, []);

  // City markers with [lon, lat]
  const cities = [
    { id: 'riyadh', name: 'الرياض', coords: [46.6753, 24.7136] },
    { id: 'jeddah', name: 'جدة', coords: [39.19797, 21.48581] },
    { id: 'makkah', name: 'مكة', coords: [39.8262, 21.4225] },
    { id: 'madinah', name: 'المدينة', coords: [39.6122, 24.4709] },
    { id: 'dammam', name: 'الدمام', coords: [50.1000, 26.4333] },
    { id: 'tabuk', name: 'تبوك', coords: [36.5715, 28.3833] },
    { id: 'qassim', name: 'القصيم', coords: [43.7667, 26.3333] },
  ];

  return (
    <div className="w-full h-full p-2">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [43, 24], // Center roughly on KSA
          scale: 1400,
        }}
        width={800}
        height={600}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={saudiGeo}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(0, 157, 79, 0.12)" // brand green tint
                stroke="#009d4f"
                strokeWidth={2}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: 'rgba(0, 157, 79, 0.18)', outline: 'none' },
                  pressed: { fill: 'rgba(0, 157, 79, 0.22)', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {cities.map((city) => {
          const isSelected = selectedCity === city.id;
          const isOtherSelected = selectedCity && selectedCity !== city.id;
          return (
            <Marker
              key={city.id}
              coordinates={city.coords}
              onClick={() => onCitySelect(city.id)}
            >
              {/* Glow */}
              {isSelected && (
                <circle r={10} fill="none" stroke="#009d4f" strokeWidth={2} opacity={0.6} />
              )}
              {/* Dot */}
              <circle
                r={6}
                fill={isSelected ? '#009d4f' : '#D0E0D9'}
                stroke={isSelected ? '#FFFFFF' : '#009d4f'}
                strokeWidth={2}
                style={{
                  cursor: 'pointer',
                  opacity: isOtherSelected ? 0.5 : 1,
                }}
              />
              {/* Label */}
              <text
                y={18}
                textAnchor="middle"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                  fill: '#FFFFFF',
                  opacity: isOtherSelected ? 0.6 : 1,
                }}
              >
                {city.name}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
};

export default SaudiMap;

