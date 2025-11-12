import React from 'react';
import { investmentData } from '../../data/investmentData.js';

const DataPanel = ({ selectedCity }) => {
  if (!selectedCity) {
    return (
      <div className="card bg-white/5 border-mwan-green/30 h-full flex items-center justify-center">
        <div className="text-center py-12">
          <div className="text-7xl mb-6">🗺️</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            اختر مدينة على الخريطة
          </h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            اضغط على أي مدينة على الخريطة لعرض الفرص الاستثمارية والإحصائيات الخاصة بها
          </p>
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
      {/* City Header */}
      <div className="card bg-gradient-to-l from-mwan-green to-green-700 border-mwan-green">
        <h3 className="text-3xl font-bold text-white mb-2">{cityData.name}</h3>
        <p className="text-lg text-gray-200">{cityData.nameEn}</p>
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

