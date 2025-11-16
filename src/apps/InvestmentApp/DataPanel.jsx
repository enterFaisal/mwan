import React, { useState, useRef, useEffect } from 'react';
import { investmentData } from '../../data/investmentData.js';
import ikhtarIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/اختر مدينة@4x.png';

const DataPanel = ({ selectedCity, onCitySelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Get all cities from investmentData
  const cities = Object.keys(investmentData)
    .filter(key => key !== 'title' && key !== 'subtitle' && key !== 'description' && key !== 'geographicGroups' && key !== 'introduction' && key !== 'approach' && key !== 'outputs' && key !== 'infrastructure' && key !== 'benefits')
    .map(key => ({
      id: key,
      name: investmentData[key].name,
      nameEn: investmentData[key].nameEn
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'ar'));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCityChange = (cityId) => {
    if (onCitySelect) {
      onCitySelect(cityId);
    }
    setIsDropdownOpen(false);
  };

  if (!selectedCity) {
    return (
      <div className="card bg-white/5 border-mwan-green/30 h-full flex flex-col">
        <div className="text-center py-8 flex-1 flex flex-col items-center justify-center">
          <div className="mb-6 flex justify-center">
            <img src={ikhtarIcon} alt="" className="h-20 w-auto object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            اختر مدينة
          </h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto mb-6">
            اختر مدينة من القائمة أدناه أو اضغط على أي مدينة على الخريطة لعرض الفرص الاستثمارية والإحصائيات الخاصة بها
          </p>
          
          {/* City Dropdown */}
          <div className="relative w-full max-w-md" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full card bg-gradient-to-l from-mwan-green to-green-700 border-mwan-green hover:from-mwan-green/90 hover:to-green-700/90 transition-all flex items-center justify-between p-4 cursor-pointer"
            >
              <div className="text-right flex-1">
                <p className="text-xl font-semibold text-white">اختر مدينة...</p>
              </div>
              <div className="mr-4">
                <svg
                  className={`w-6 h-6 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 z-50 card bg-mwan-dark border-mwan-green/50 max-h-96 overflow-y-auto">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCityChange(city.id)}
                    className="w-full text-right p-4 hover:bg-mwan-green/20 transition-colors border-b border-white/10 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-white">{city.name}</p>
                        <p className="text-sm text-gray-400">{city.nameEn}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const cityData = investmentData[selectedCity];

  if (!cityData) {
    return (
      <div className="card bg-white/5 border-red-500 h-full flex items-center justify-center">
        <p className="text-xl text-red-400">البيانات غير متوفرة لهذه المدينة</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* City Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full card bg-gradient-to-l from-mwan-green to-green-700 border-mwan-green hover:from-mwan-green/90 hover:to-green-700/90 transition-all flex items-center justify-between p-4 cursor-pointer"
        >
          <div className="text-right flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">{cityData.name}</h3>
            <p className="text-lg text-gray-200">{cityData.nameEn}</p>
          </div>
          <div className="mr-4">
            <svg
              className={`w-6 h-6 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50 card bg-mwan-dark border-mwan-green/50 max-h-96 overflow-y-auto">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityChange(city.id)}
                className={`w-full text-right p-4 hover:bg-mwan-green/20 transition-colors border-b border-white/10 last:border-b-0 ${
                  selectedCity === city.id ? 'bg-mwan-green/30' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-white">{city.name}</p>
                    <p className="text-sm text-gray-400">{city.nameEn}</p>
                  </div>
                  {selectedCity === city.id && (
                    <svg className="w-5 h-5 text-mwan-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Key Statistics */}
      <div className="card bg-white/5 border-mwan-green/30">
        <h4 className="text-xl font-bold text-mwan-green mb-4">المعلومات الرئيسية</h4>
        {(() => {
          // Calculate total budget
          const totalMillions = cityData.opportunities.reduce((sum, opp) => {
            const investmentStr = opp.investment;
            const numMatch = investmentStr.match(/[\d.]+/);
            if (!numMatch) return sum;
            const numValue = parseFloat(numMatch[0]);
            if (investmentStr.includes('مليار')) {
              return sum + (numValue * 1000);
            } else {
              return sum + numValue;
            }
          }, 0);
          const isBillions = totalMillions >= 1000;
          const budgetValue = isBillions 
            ? `${(totalMillions / 1000).toFixed(0)}` 
            : totalMillions.toLocaleString();
          const budgetUnit = isBillions ? 'مليار ريال' : 'مليون ريال';
          const opportunitiesCount = cityData.stats?.numberOfOpportunities || cityData.opportunities.length;
          const facilitiesCount = cityData.facilities || 0;
          
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-gray-400 mb-1">فرصة استثمارية</p>
                  <p className="text-2xl font-bold text-white">
                    {opportunitiesCount}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-gray-400 mb-1">مرفق</p>
                  <p className="text-2xl font-bold text-white">
                    {facilitiesCount}
                  </p>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-mwan-green/20 to-green-900/20 border-mwan-green">
                <div className="text-center p-4">
                  <p className="text-sm text-gray-300 mb-2">ميزانية</p>
                  <p className="text-4xl font-bold text-mwan-green mb-2">
                    {budgetValue}
                  </p>
                  <p className="text-sm text-gray-300">{budgetUnit}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Waste Composition */}
      {/* {cityData.wasteComposition && (
        <div className="card bg-white/5 border-mwan-green/30">
          <h4 className="text-xl font-bold text-mwan-green mb-4">تكوين النفايات</h4>
          <div className="space-y-3">
            {cityData.wasteComposition.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{item.type}</span>
                  <span className="text-mwan-green font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-mwan-green h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}

      {/* Summary Card */}
      {/* <div className="card bg-gradient-to-br from-mwan-green/20 to-green-900/20 border-mwan-green">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-2">إجمالي قيمة الفرص الاستثمارية</p>
          {(() => {
            const totalMillions = cityData.opportunities.reduce((sum, opp) => {
              const investmentStr = opp.investment;
              // Extract number (handles decimals)
              const numMatch = investmentStr.match(/[\d.]+/);
              if (!numMatch) return sum;
              const numValue = parseFloat(numMatch[0]);
              // Check if it's in billions (مليار) or millions (مليون)
              if (investmentStr.includes('مليار')) {
                return sum + (numValue * 1000); // Convert billions to millions
              } else {
                return sum + numValue; // Already in millions
              }
            }, 0);
            const isBillions = totalMillions >= 1000;
            const displayValue = isBillions 
              ? `${(totalMillions / 1000).toFixed(0)}` 
              : totalMillions.toLocaleString();
            const unit = isBillions ? 'مليار ريال سعودي' : 'مليون ريال سعودي';
            
            return (
              <>
                <p className="text-4xl font-bold text-mwan-green mb-2">
                  {displayValue}
                </p>
                <p className="text-sm text-gray-300">{unit}</p>
              </>
            );
          })()}
        </div>
      </div> */}
    </div>
  );
};

export default DataPanel;

