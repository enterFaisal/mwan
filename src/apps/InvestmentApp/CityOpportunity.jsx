import React, { useState } from 'react';
// Icons from تصاميم سيتي سكيب - ايقونات الفرص الاستثمارية
import khareetaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/خريطة@4x.png';
import ikhtarIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/اختر مدينة@4x.png';
import fursIcon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/فرص@4x.png';
import furs1Icon from '../../assets/تصاميم سيتي سكيب/ايقونات الفرص الاستثمارية/فرص_1@4x.png';
// Icons from تصاميم سيتي سكيب - ايقونات المخطط
import makhrajatIcon from '../../assets/تصاميم سيتي سكيب/ايقونات المخطط/مخرجات المخطط@4x.png';
import nabdhaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات المخطط/نبذة@4x.png';
// Icons from تصاميم سيتي سكيب - ايقونات مهام المركز
import istidamaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/الاستدامة المالية وتحفيز الاستثمار_@4x.png';
import takhtitIcon from '../../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التخطيط والتطوير_@4x.png';
import madinaImage from '../../assets/simages/madina.png';
import madina2Image from '../../assets/simages/madina2.png';
import blueprintImage from '../../assets/simages/blueprint.png';

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
              <img src={ikhtarIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">1,614,425</p>
            <p className="text-sm text-gray-400">التعداد السكاني</p>
          </div>

          {/* Governorates */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={khareetaIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">4</p>
            <p className="text-sm text-gray-400">محافظات</p>
          </div>

          {/* Total Area */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={makhrajatIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">88,593</p>
            <p className="text-sm text-gray-400">المساحة الكلية (كم²)</p>
          </div>

          {/* Agricultural Area */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={nabdhaIcon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">559</p>
            <p className="text-sm text-gray-400">المساحة الزراعية (كم²)</p>
          </div>

          {/* Industrial Areas */}
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={furs1Icon} alt="" className="w-8 h-8 object-contain" />
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
              <div className="mb-6">
                <img 
                  src={madinaImage} 
                  alt="خريطة منطقة المدينة المنورة" 
                  className="w-full max-w-full h-auto rounded-2xl mx-auto"
                />
              </div>
              <h4 className="text-2xl font-bold text-mwan-green mb-6">
                تقدر النفايات المنتجة في عام 2023 م
              </h4>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-4">2.8</p>
                <p className="text-2xl text-mwan-green font-semibold">مليون طن/سنة</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Infrastructure Section */}
      <div className="mb-8">
        <h4 className="text-2xl font-bold text-mwan-green mb-6 text-center">
          تم تحديد البنية التحتية المقترحة لمعالجة النفايات والتخلص منها في مجموعة المدينة المنورة
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Infrastructure Facilities */}
          <div className="card bg-white/5 border-mwan-green/30">
            <h5 className="text-xl font-bold text-mwan-green mb-6 text-center">
              أمثلة لأهم مرافق البنية التحتية
            </h5>
            <div className="space-y-4">
              {/* Facility 1 - Red Circle */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">
                    مراكز بيئية متكاملة لمعالجة النفايات
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    تشمل مصانع الفرز والتسميد واستعادة الطاقة
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    مواقع: خيبر، المدينة المنورة (2)، المهد
                  </p>
                </div>
              </div>

              {/* Facility 2 - Green Hexagon */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 flex items-center justify-center text-white font-bold" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">
                    مرفق معالجة مخلفات المسالخ
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    معالجة النفايات العضوية من المسالخ
                  </p>
                </div>
              </div>

              {/* Facility 3 - Light Blue Square */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-400 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">
                    مرفق لمعالجة النفايات الصناعية الخطرة
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    معالجة متخصصة للنفايات الخطرة
                  </p>
                </div>
              </div>

              {/* Facility 4 - Purple Hexagon */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 flex items-center justify-center text-white font-bold" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">
                    مرفق لمعالجة نفايات الرعاية الصحية الخطرة
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    معالجة آمنة للنفايات الطبية الخطرة
                  </p>
                </div>
              </div>

              {/* Facility 5 - Yellow Circle */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">
                    مرافق لمعالجة النفايات الخاصة
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    معالجة النفايات الإلكترونية والخاصة الأخرى
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Image */}
          <div className="card bg-white/5 border-mwan-green/30">
            <div className="w-full">
              <img 
                src={madina2Image} 
                alt="خريطة مرافق البنية التحتية للمدينة المنورة" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Key Performance Indicators Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* 97% Diversion */}
          <div className="card bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500 text-center p-6">
            <div className="flex items-center justify-center mb-4">
              <img src={takhtitIcon} alt="" className="w-12 h-12 object-contain" />
            </div>
            <p className="text-6xl font-bold text-green-400 mb-2">97%</p>
            <p className="text-xl text-white font-semibold">نسبة الاستبعاد عن المرادم</p>
          </div>

          {/* Breakdown Stat 1 */}
          <div className="card bg-green-600/20 border-green-500 text-center p-4 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-green-400 mb-1">29%</p>
            <p className="text-sm text-white">تحويل النفايات إلى طاقة</p>
          </div>

          {/* Breakdown Stat 2 */}
          <div className="card bg-green-600/20 border-green-500 text-center p-4 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-green-400 mb-1">83%</p>
            <p className="text-sm text-white">إعادة التدوير والتسميد</p>
          </div>

          {/* Investment Opportunities */}
          <div className="card bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500 text-center p-6">
            <div className="flex items-center justify-center mb-4">
              <img src={istidamaIcon} alt="" className="w-12 h-12 object-contain" />
            </div>
            <p className="text-4xl font-bold text-orange-400 mb-2">45</p>
            <p className="text-xl text-white font-semibold mb-1">مليار ريال سعودي</p>
            <p className="text-sm text-gray-300">إجمالي قيمة الفرص الاستثمارية</p>
          </div>
        </div>
      </div>

      {/* Strategic Plan Blueprint Section */}
      <div className="mb-8">
        <div className="card bg-white/5 border-mwan-green/30">
          <p className="text-lg text-gray-300 mb-6 text-center leading-relaxed">
            مثال على المخطط الاستراتيجي باستخدام النهج التكاملي لإدارة النفايات لتحقيق أعلى المستويات في الاستفادة والاستراداد
          </p>
          <div className="w-full">
            <img 
              src={blueprintImage} 
              alt="مخطط استراتيجي للنهج التكاملي لإدارة النفايات" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityOpportunity;

