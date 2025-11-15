import React, { useState } from 'react';
import compassIcon from '../../assets/icons/Compass.png';
import leafIcon from '../../assets/icons/Leaf.png';
import gearsCogsIcon from '../../assets/icons/Gears-Cogs.png';

const CityOpportunity = ({ onBack }) => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  // Waste composition data from the image - all segments in one pie chart
  const wasteComposition = [
    { type: "النفايات البلدية الصلبة", percentage: 64, color: "#14b8a6" },
    { type: "النفايات الصناعية", percentage: 20, color: "#0f766e" },
    { type: "النفايات الزراعية", percentage: 9, color: "#4ade80" },
    { type: "حمأة الصرف الصحي", percentage: 4, color: "#16a34a" },
    { type: "النفايات الخاصة", percentage: 3, color: "#22c55e" },
    { type: "نفايات الرعاية الصحية", percentage: 0.13, color: "#15803d" },
  ];

  // Calculate pie chart segments
  const calculatePieChart = (data) => {
    // Normalize percentages to ensure they sum to 100%
    const totalPercentage = data.reduce((sum, item) => sum + item.percentage, 0);
    const normalizedData = data.map(item => ({
      ...item,
      percentage: (item.percentage / totalPercentage) * 100
    }));
    
    // Ensure very small segments have a minimum visible angle (at least 2 degrees)
    const MIN_ANGLE = 2; // Minimum 2 degrees for visibility
    const totalAngle = normalizedData.reduce((sum, item) => {
      const angle = (item.percentage / 100) * 360;
      return sum + Math.max(angle, MIN_ANGLE);
    }, 0);
    
    // Adjust if total exceeds 360 due to minimum angles
    const adjustmentFactor = totalAngle > 360 ? 360 / totalAngle : 1;
    
    let currentAngle = -90; // Start from top (in degrees)
    return normalizedData.map((item, index) => {
      let angle = (item.percentage / 100) * 360;
      // Apply minimum angle for very small segments
      if (angle < MIN_ANGLE) {
        angle = MIN_ANGLE * adjustmentFactor;
      } else {
        angle = angle * adjustmentFactor;
      }
      
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;
      
      // Convert to radians for calculations
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      
      // Calculate points on circle (radius = 100, center = 100,100)
      const x1 = 100 + 100 * Math.cos(startRad);
      const y1 = 100 + 100 * Math.sin(startRad);
      const x2 = 100 + 100 * Math.cos(endRad);
      const y2 = 100 + 100 * Math.sin(endRad);
      
      // Determine if we need large arc (angle > 180)
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      // Create path data
      const pathData = [
        `M 100 100`,
        `L ${x1} ${y1}`,
        `A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        `Z`
      ].join(' ');
      
      return {
        ...item,
        startAngle,
        endAngle,
        pathData,
        x1,
        y1,
        x2,
        y2,
        largeArcFlag,
      };
    });
  };

  const pieSegments = calculatePieChart(wasteComposition);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-mwan-green mb-4">
          فرصة المدينة المنورة
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          تتمثل مجموعة المدينة المنورة عبر 4 محافظات منها المدينة المنورة وهي الأكبر بحوالي 1.5 مليون نسمة
        </p>
      </div>

      {/* Key Information Bar */}
      <div className="card bg-white/5 border-mwan-green/30 mb-8">
        <h4 className="text-xl font-bold text-mwan-green mb-6 text-center">
          المعلومات الرئيسية في مجموعة المدينة المنورة
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Population */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-mwan-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-white mb-1">1,614,425</p>
            <p className="text-sm text-gray-400">التعداد السكاني</p>
          </div>

          {/* Governorates */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={compassIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">4</p>
            <p className="text-sm text-gray-400">محافظات</p>
          </div>

          {/* Total Area */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-mwan-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-white mb-1">88,593</p>
            <p className="text-sm text-gray-400">المساحة الكلية (كم²)</p>
          </div>

          {/* Agricultural Area */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={leafIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">559</p>
            <p className="text-sm text-gray-400">المساحة الزراعية (كم²)</p>
          </div>

          {/* Industrial Areas */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={gearsCogsIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">239</p>
            <p className="text-sm text-gray-400">المناطق الصناعية</p>
          </div>
        </div>
      </div>

      {/* Waste Composition Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left: Waste Composition Charts */}
        <div className="card bg-white/5 border-mwan-green/30">
          <h4 className="text-xl font-bold text-mwan-green mb-6 text-center">
            تمثل النفايات البلدية الصلبة النسبة الكبرى من إجمالي نسبة تكوين النفايات
          </h4>
          
          <div className="flex items-center justify-center mb-8">
            {/* Main Pie Chart */}
            <div className="relative w-80 h-80">
              <svg viewBox="0 0 200 200" className="transform -rotate-90">
                {pieSegments.map((segment, index) => {
                  const isSelected = selectedSegment?.index === index;
                  return (
                    <path
                      key={index}
                      d={segment.pathData}
                      fill={segment.color}
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      style={{
                        opacity: isSelected ? 1 : selectedSegment ? 0.5 : 1,
                        filter: isSelected ? 'brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'none',
                      }}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedSegment(null);
                        } else {
                          setSelectedSegment({
                            index,
                            ...segment,
                            originalPercentage: wasteComposition[index].percentage
                          });
                        }
                      }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 space-y-3">
            {wasteComposition.map((item, index) => {
              const isSelected = selectedSegment?.index === index;
              return (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    isSelected ? 'bg-mwan-green/20 border border-mwan-green' : 'hover:bg-white/5'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedSegment(null);
                    } else {
                      setSelectedSegment({
                        index,
                        ...pieSegments[index],
                        originalPercentage: item.percentage
                      });
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className={`text-white ${isSelected ? 'font-bold' : ''}`}>
                      {item.type}
                    </span>
                  </div>
                  <span className="text-mwan-green font-bold">{item.percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Preview Panel */}
        <div className="card bg-gradient-to-br from-mwan-green/20 to-green-900/20 border-mwan-green flex items-center justify-center min-h-[400px]">
          {selectedSegment ? (
            <div className="text-center p-8 w-full animate-fade-in">
              <button
                onClick={() => setSelectedSegment(null)}
                className="mb-4 text-gray-400 hover:text-white transition-colors text-sm"
              >
                ✕ إغلاق
              </button>
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: selectedSegment.color }}
                ></div>
                <h4 className="text-2xl font-bold text-mwan-green mb-2">
                  {selectedSegment.type}
                </h4>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <p className="text-5xl font-bold text-white mb-2">
                    {selectedSegment.originalPercentage}%
                  </p>
                  <p className="text-lg text-gray-300">من إجمالي النفايات</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-xl text-white mb-2">
                    {(selectedSegment.originalPercentage / 100 * 2.8).toFixed(3)}
                  </p>
                  <p className="text-lg text-mwan-green font-semibold">مليون طن/سنة</p>
                  <p className="text-sm text-gray-400 mt-2">من إجمالي 2.8 مليون طن/سنة</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-8 animate-fade-in">
              <h4 className="text-2xl font-bold text-mwan-green mb-6">
                تقدر النفايات المنتجة في عام 2023 م
              </h4>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-4">2.8</p>
                <p className="text-2xl text-mwan-green font-semibold">مليون طن/سنة</p>
              </div>
              <p className="text-gray-400 mt-6 text-sm">
                👆 اضغط على أي قطاع في الرسم البياني لعرض التفاصيل
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CityOpportunity;

