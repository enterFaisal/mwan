import React, { useState, useRef, useEffect } from 'react';
import { investmentData } from '../../data/investmentData.js';
import compassIcon from '../../assets/icons/Compass.png';

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
            <img src={compassIcon} alt="" className="h-20 w-auto object-contain" />
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
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">عدد السكان</p>
            <p className="text-2xl font-bold text-white">
              {cityData.stats.population} {cityData.stats.populationUnit}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">عدد البلديات</p>
            <p className="text-2xl font-bold text-white">
              {cityData.stats.municipalities}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">النفايات المنتجة</p>
            <p className="text-2xl font-bold text-white">
              {cityData.stats.wasteGeneration} {cityData.stats.wasteUnit}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-1">هدف إعادة التدوير</p>
            <p className="text-2xl font-bold text-mwan-green">
              {cityData.stats.recyclingTarget}%
            </p>
          </div>
        </div>
      </div>

      {/* Waste Composition */}
      {cityData.wasteComposition && (
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
      )}

      {/* Investment Opportunities */}
      <div className="card bg-white/5 border-orange-500/30">
        <h4 className="text-xl font-bold text-orange-400 mb-4">
          الفرص الاستثمارية ({cityData.opportunities.length})
        </h4>
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {cityData.opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all border border-orange-500/20 hover:border-orange-500"
            >
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-bold text-lg text-white flex-1">
                  {opportunity.name}
                </h5>
                <span className="bg-orange-600/30 text-orange-400 text-xs px-3 py-1 rounded-full whitespace-nowrap mr-3">
                  #{opportunity.id}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-3">{opportunity.type}</p>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-gray-400 mb-1">الطاقة الإنتاجية</p>
                  <p className="text-sm font-semibold text-white">
                    {opportunity.capacity}
                  </p>
                  <p className="text-xs text-gray-500">{opportunity.unit}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">الاستثمار المقدر</p>
                  <p className="text-sm font-semibold text-mwan-green">
                    {opportunity.investment}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">فرص العمل</p>
                  <p className="text-sm font-semibold text-blue-400">
                    {opportunity.jobs} وظيفة
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Card */}
      <div className="card bg-gradient-to-br from-mwan-green/20 to-green-900/20 border-mwan-green">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-2">إجمالي قيمة الفرص الاستثمارية</p>
          <p className="text-4xl font-bold text-mwan-green mb-2">
            {cityData.opportunities.reduce((sum, opp) => {
              const value = parseInt(opp.investment.replace(/[^\d]/g, ''));
              return sum + value;
            }, 0).toLocaleString()}
          </p>
          <p className="text-sm text-gray-300">مليون ريال سعودي</p>
        </div>
      </div>
    </div>
  );
};

export default DataPanel;

