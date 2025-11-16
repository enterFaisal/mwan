import React, { useState, useRef } from 'react';
import SaudiMap from './SaudiMap';
import DataPanel from './DataPanel';
import CityOpportunity from './CityOpportunity';
import ConstructionDemolitionOpportunities from './ConstructionDemolitionOpportunities';

// New icons from تصاميم سيتي سكيب - ايقونات الفرص الاستثمارية
import khareetaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/خريطة@4x.png';
import ikhtarIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/اختر مدينة@4x.png';
import fursIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/فرص@4x.png';
import furs1Icon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/فرص_1@4x.png';
// Icons from تصاميم سيتي سكيب - ايقونات وثيقة النقل
import sallaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/سلة@4x.png';
import muntajIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/منتج@4x.png';
import istiqbalIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/استقبال@4x.png';
import tataabIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات المكونات/التتبع@4x.png';
import rafaaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات الاهداف/رفع الكفاءة.png';
// Icons from تصاميم سيتي سكيب - ايقونات مهام المركز
import takhtitIcon from '../../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التخطيط والتطوير_@4x.png';
// Icons from تصاميم سيتي سكيب - ايقونات التراخيص
import anwaaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات التراخيص/أنواع التراخيص والتصاريح@4x.png';

const OpportunitiesSection = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('map');
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

  const tabs = [
    { id: 'map', label: 'خريطة', icon: khareetaIcon, activeIcon: khareetaIcon },
    { id: 'city', label: 'فرصة المدينة المنورة', icon: ikhtarIcon, activeIcon: ikhtarIcon },
    { id: 'construction', label: 'الفرص استثمارية في البناء والهدم', icon: fursIcon, activeIcon: fursIcon },
    { id: 'waste-areas', label: 'مجالات الاستثمار في النفايات', icon: sallaIcon, activeIcon: sallaIcon }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">
          الاستثمار في قطاع إدارة النفايات
        </h2>
        <p className="text-2xl text-mwan-green leading-relaxed max-w-4xl mx-auto mb-4">
          بوابة نحو فرصٍ واعدة، ومستقبلٍ مستدام
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
              activeTab === tab.id
                ? 'bg-mwan-green text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <img src={activeTab === tab.id ? tab.activeIcon : tab.icon} alt="" className="h-8 w-auto object-contain" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="card border-mwan-green/30 min-h-[600px]">
        {/* Map Tab */}
        {activeTab === 'map' && (
          <div className="animate-fade-in p-6">
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
              <div ref={dataPanelRef} className="min-h-[600px] flex flex-col">
                <DataPanel selectedCity={selectedCity} onCitySelect={handleCitySelect} />
                {/* Medina Details Button */}
                {selectedCity === 'madinah' && (
                  <div className="mt-6 animate-fade-in">
                    <button
                      onClick={() => setActiveTab('city')}
                      className="w-full card bg-gradient-to-br from-mwan-green/30 to-green-800/30 border-mwan-green/50 hover:border-mwan-green hover:from-mwan-green/40 hover:to-green-800/40 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      <img src={ikhtarIcon} alt="" className="h-6 w-auto object-contain transition-transform group-hover:scale-110" />
                      <span className="text-lg">عرض تفاصيل المدينة المنورة</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Summary Stats */}
            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div> */}
          </div>
        )}

        {/* City Opportunity Tab */}
        {activeTab === 'city' && (
          <div className="animate-fade-in p-6">
            <CityOpportunity onBack={onBack} />
          </div>
        )}

        {/* Construction & Demolition Opportunities Tab */}
        {activeTab === 'construction' && (
          <div className="animate-fade-in p-6">
            <ConstructionDemolitionOpportunities onBack={onBack} />
          </div>
        )}

        {/* Waste Investment Areas Tab */}
        {activeTab === 'waste-areas' && (
          <div className="animate-fade-in p-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-mwan-green mb-4">
                مجالات الاستثمار في النفايات
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Solid Municipal Waste */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={sallaIcon} alt="البلدية الصلبة" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">البلدية الصلبة</p>
              </div>

              {/* Industrial Waste */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={anwaaIcon} alt="الصناعية" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">الصناعية</p>
              </div>

              {/* Healthcare Waste */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={istiqbalIcon} alt="الرعاية الصحية" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">الرعاية الصحية</p>
              </div>

              {/* Construction and Demolition */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={takhtitIcon} alt="البناء والهدم" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">البناء والهدم</p>
              </div>

              {/* Sludge */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={tataabIcon} alt="الحمأة" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">الحمأة</p>
              </div>

              {/* Agricultural Waste */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={rafaaIcon} alt="الزراعية" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">الزراعية</p>
              </div>

              {/* Special Waste */}
              <div className="card bg-white/5 border-mwan-green/30 text-center p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center p-3">
                    <img src={muntajIcon} alt="النفايات الخاصة" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">النفايات الخاصة</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpportunitiesSection;

