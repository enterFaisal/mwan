import React, { useState, useEffect, useRef } from 'react';
import { strategicPlanData } from '../../data/investmentData.js';
import { getPartnerLogo } from '../../data/partnersLogos.js';
import BackButton from '../../components/BackButton';

// New icons from تصاميم سيتي سكيب - ايقونات المخطط
import nabdhaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات المخطط/نبذة@4x.png';
import fursManhajiaIcon from '../../assets/تصاميم سيتي سكيب/ايقونات المخطط/فرص@4x.png';
import makhrajatIcon from '../../assets/تصاميم سيتي سكيب/ايقونات المخطط/مخرجات المخطط@4x.png';

// Animated Counter Component
const AnimatedCounter = ({ value, isActive }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }

    if (!isActive) {
      setDisplayValue(0);
      return;
    }

    // Extract prefix (like "+" or "~") and numeric value
    const match = value.match(/^([^\d]*)(\d+)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNumber = parseInt(match[2], 10);
    
    setDisplayValue(0);

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    animationRef.current = setInterval(() => {
      currentStep++;
      const nextValue = Math.min(Math.floor(increment * currentStep), targetNumber);
      setDisplayValue(nextValue);

      if (nextValue >= targetNumber) {
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
        setDisplayValue(targetNumber);
      }
    }, stepDuration);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isActive, value]);

  // Extract prefix and format the display
  const match = value.match(/^([^\d]*)(\d+)$/);
  if (!match) {
    return <span>{value}</span>;
  }

  const prefix = match[1] || '';
  return <span>{prefix}{displayValue.toLocaleString()}</span>;
};

const PlanSection = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('introduction');

  const tabs = [
    { id: 'introduction', label: 'نبذة تعريفية عن المخطط الاستراتيجي الشامل', icon: nabdhaIcon, activeIcon: nabdhaIcon },
    { id: 'approach', label: 'منهجية عمل المخطط', icon: fursManhajiaIcon, activeIcon: fursManhajiaIcon },
    { id: 'outputs', label: 'مخرجات المخطط', icon: makhrajatIcon, activeIcon: makhrajatIcon }
  ];

  // Display plain Western digits for step numbers (e.g., 1, 2, 3 ... 6)
  const formatStepNumber = (num) => String(num);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">
          {strategicPlanData.title}
        </h2>
        <p className="text-2xl text-mwan-green leading-relaxed max-w-4xl mx-auto mb-4">
          {strategicPlanData.subtitle}
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
        {/* Introduction Tab */}
        {activeTab === 'introduction' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-mwan-green mb-6 text-center">
              {strategicPlanData.introduction.title}
            </h3>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed text-center mb-8">
                {strategicPlanData.introduction.content}
              </p>
              
              {/* Geographic Groups Display with Image */}
              <div className="mt-8 flex justify-center">
                <img 
                  src="/uimage.png" 
                  alt="25 مجموعة جغرافية - خريطة توضح التوزيع الجغرافي للمجموعات في المملكة" 
                  className="w-full max-w-4xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* Approach Tab */}
        {activeTab === 'approach' && (
          <div className="animate-fade-in" dir="rtl">
            <div className="bg-white/5 border border-mwan-green/30 rounded-3xl overflow-hidden shadow-lg shadow-black/10">
              <div className="bg-[#0b6b4f] text-white text-xl font-bold text-center py-4">
                {strategicPlanData.approach.title}
              </div>

              <p className="text-lg text-gray-200 text-center px-8 py-6 leading-relaxed max-w-5xl mx-auto">
                {strategicPlanData.approach.description}
              </p>

              <div className="overflow-x-auto">
                <div className="min-w-max flex flex-row gap-4 px-8 pb-10">
                  {strategicPlanData.approach.steps.map((step, index) => (
                    <div
                      key={step.number}
                      className="relative w-96 text-white"
                      style={{
                        clipPath: 'polygon(0% 50%, 10% 0%, 100% 0%, 90% 50%, 100% 100%, 10% 100%)',
                        background: index % 2 === 0
                          ? 'linear-gradient(225deg, #1f8a5b 0%, #0e4933 100%)'
                          : 'linear-gradient(225deg, #1f6d92 0%, #103452 100%)'
                      }}
                    >
                      <div className="flex flex-col gap-4 h-full px-8 py-6">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-2xl font-bold flex-shrink-0">
                            {formatStepNumber(index + 1)}
                          </span>
                          <h4 className="font-bold text-lg leading-snug">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm leading-relaxed text-white/90 break-words px-4">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {strategicPlanData.approach.partners && (
                <div className="border-t border-white/10 bg-white/5 px-6 py-8">
                  <p className="text-center text-mwan-green font-semibold text-2xl mb-8">
                    شركاء التخطيط والتنفيذ
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {strategicPlanData.approach.partners.map((partner, index) => {
                      const partnerData = getPartnerLogo(partner);
                      return (
                        <div
                          key={partner + index}
                          className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                          title={partnerData.nameEn}
                        >
                          <div className="w-full h-24 flex items-center justify-center mb-3 relative overflow-hidden">
                            <img
                              src={partnerData.logo}
                              alt={partnerData.name}
                              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = partnerData.fallbackLogo;
                              }}
                            />
                          </div>
                          <p className="text-xs text-center text-gray-800 font-medium leading-tight line-clamp-2">
                            {partnerData.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Outputs Tab */}
        {activeTab === 'outputs' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-mwan-green mb-4 text-center">
              {strategicPlanData.outputs.title}
            </h3>
            <div className="card bg-gradient-to-r from-green-600/20 to-mwan-green/20 border-mwan-green mb-8">
              <p className="text-2xl text-white text-center font-semibold">
                {strategicPlanData.outputs.subtitle}
              </p>
            </div>
            
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {strategicPlanData.outputs.mainStats.map((stat, index) => (
                <div
                  key={index}
                  className={`card bg-${stat.color}-600/20 border-${stat.color}-500 text-center hover:scale-105 transition-all`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <img src={stat.icon} alt="" className="h-16 w-16 object-contain" />
                    </div>
                  </div>
                  <p className="text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} isActive={activeTab === 'outputs'} />
                  </p>
                  <p className="text-lg font-semibold text-white mb-1">
                    {stat.title}
                  </p>
                  {stat.description && (
                    <p className="text-sm text-gray-300 mt-2">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {strategicPlanData.outputs.bottomStats.map((stat, index) => (
                <div
                  key={index}
                  className="card bg-white/5 border-mwan-green/30 text-center hover:border-mwan-green transition-all"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <img src={stat.icon} alt="" className="h-12 w-12 object-contain" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-white mb-2">
                    {stat.title}
                  </p>
                  {stat.description && (
                    <p className="text-sm text-gray-300">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default PlanSection;

