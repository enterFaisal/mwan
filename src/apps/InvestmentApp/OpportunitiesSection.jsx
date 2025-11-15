import React, { useState, useRef } from 'react';
import SaudiMap from './SaudiMap';
import DataPanel from './DataPanel';

const OpportunitiesSection = ({ onBack }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const dataPanelRef = useRef(null);

  const handleCitySelect = (cityId) => {
    setSelectedCity(cityId);
    
    // Auto-scroll to data panel on long screens when city is selected
    if (cityId && dataPanelRef.current) {
      setTimeout(() => {
        const element = dataPanelRef.current;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100; // Offset from top
        
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
      }, 400);
    }
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
        الاستثمار في قطاع إدارة النفايات
        
        </h2>
        <p className="text-xl text-gray-300">
        بوابة نحو فرصٍ واعدة، ومستقبلٍ مستدام
        </p>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Interactive Map */}
  <div className="card border-mwan-green/30 min-h-[600px] flex flex-col">
          <div className="border-b border-white/10 pb-4 mb-4">
            <h3 className="text-2xl font-bold text-mwan-green text-center">
              خريطة المملكة التفاعلية
            </h3>
          </div>
          <div className="flex-1">
            <SaudiMap 
              selectedCity={selectedCity} 
              onCitySelect={handleCitySelect}
            />
          </div>
          {!selectedCity && (
            <div className="text-center py-6 border-t border-white/10">
              <p className="text-gray-400">
                👆 اضغط على أي مدينة لعرض التفاصيل
              </p>
            </div>
          )}
        </div>

        {/* Right Column - Data Panel */}
        <div ref={dataPanelRef} className="min-h-[600px]">
          <DataPanel selectedCity={selectedCity} />
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-orange-600/20 border-orange-500 text-center">
          <p className="text-4xl font-bold text-orange-400 mb-2">45</p>
          <p className="text-white font-semibold">مليار ريال سعودي</p>
          <p className="text-sm text-gray-300 mt-1">إجمالي القيمة الكلية والاستثمارية</p>
        </div>
        <div className="card bg-green-600/20 border-green-500 text-center">
          <p className="text-4xl font-bold text-green-400 mb-2">97%</p>
          <p className="text-white font-semibold">نسبة الاستفادة</p>
          <p className="text-sm text-gray-300 mt-1">من النفايات</p>
        </div>
        <div className="card bg-blue-600/20 border-blue-500 text-center">
          <p className="text-4xl font-bold text-blue-400 mb-2">2.8</p>
          <p className="text-white font-semibold">مليون طن/سنة</p>
          <p className="text-sm text-gray-300 mt-1">قدر النفايات المنتجة في عام 2023</p>
        </div>
        {/* <div className="card bg-purple-600/20 border-purple-500 text-center">
          <p className="text-4xl font-bold text-purple-400 mb-2">1.5</p>
          <p className="text-white font-semibold">مليون نسمة</p>
          <p className="text-sm text-gray-300 mt-1">مجموعة المدينة المنورة</p>
        </div> */}
      </div>
    </div>
  );
};

export default OpportunitiesSection;

