import React, { useState } from 'react';
import { strategicPlanData } from '../../data/investmentData.js';
import BackButton from '../../components/BackButton';

const PlanSection = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('approach');

  const tabs = [
    { id: 'approach', label: 'منهجية التخطيط', icon: '📋' },
    { id: 'objectives', label: 'الأهداف الاستراتيجية', icon: '🎯' },
    { id: 'infrastructure', label: 'البنية التحتية', icon: '🏗️' },
    { id: 'benefits', label: 'الفوائد المتوقعة', icon: '✨' }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">
          {strategicPlanData.title}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {strategicPlanData.description}
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
            <span className="text-2xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
  <div className="card border-mwan-green/30 min-h-[600px]">
        {/* Approach Tab */}
        {activeTab === 'approach' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-mwan-green mb-8 text-center">
              {strategicPlanData.approach.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicPlanData.approach.steps.map((step) => (
                <div
                  key={step.number}
                  className="card transition-all border border-mwan-green/20 hover:border-mwan-green"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-mwan-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    <h4 className="font-bold text-lg text-white">{step.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Objectives Tab */}
        {activeTab === 'objectives' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-mwan-green mb-8 text-center">
              {strategicPlanData.objectives.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicPlanData.objectives.items.map((item, index) => (
                <div
                  key={index}
                  className="card bg-gradient-to-br from-mwan-green/20 to-green-900/20 border-mwan-green hover:scale-105 transition-all"
                >
                  <div className="text-5xl mb-4 text-center">{item.icon}</div>
                  <h4 className="font-bold text-xl text-white text-center mb-3">
                    {item.title}
                  </h4>
                  {item.value && (
                    <p className="text-4xl font-bold text-mwan-green text-center mb-2">
                      {item.value}
                    </p>
                  )}
                  <p className="text-gray-300 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Infrastructure Tab */}
        {activeTab === 'infrastructure' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-mwan-green mb-4 text-center">
              {strategicPlanData.infrastructure.title}
            </h3>
            {strategicPlanData.infrastructure.description && (
              <p className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                {strategicPlanData.infrastructure.description}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategicPlanData.infrastructure.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="card transition-all border border-blue-500/20 hover:border-blue-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">{facility.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-white mb-3">
                        {facility.name}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-mwan-green mb-8 text-center">
              {strategicPlanData.benefits.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Economic Benefits */}
              <div className="card bg-gradient-to-br from-orange-600/20 to-orange-900/20 border-orange-500">
                <div className="text-5xl mb-4 text-center">💰</div>
                <h4 className="font-bold text-2xl text-orange-400 mb-4 text-center">
                  {strategicPlanData.benefits.economic.title}
                </h4>
                <ul className="space-y-3">
                  {strategicPlanData.benefits.economic.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Environmental Benefits */}
              <div className="card bg-gradient-to-br from-green-600/20 to-green-900/20 border-green-500">
                <div className="text-5xl mb-4 text-center">🌱</div>
                <h4 className="font-bold text-2xl text-green-400 mb-4 text-center">
                  {strategicPlanData.benefits.environmental.title}
                </h4>
                <ul className="space-y-3">
                  {strategicPlanData.benefits.environmental.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Benefits */}
              <div className="card bg-gradient-to-br from-blue-600/20 to-blue-900/20 border-blue-500">
                <div className="text-5xl mb-4 text-center">👥</div>
                <h4 className="font-bold text-2xl text-blue-400 mb-4 text-center">
                  {strategicPlanData.benefits.social.title}
                </h4>
                <ul className="space-y-3">
                  {strategicPlanData.benefits.social.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Key Highlights */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="card bg-mwan-green/20 border-mwan-green text-center">
          <p className="text-4xl font-bold text-mwan-green mb-2">97%</p>
          <p className="text-white font-semibold">نسبة الاستفادة من النفايات</p>
        </div>
        <div className="card bg-orange-600/20 border-orange-500 text-center">
          <p className="text-4xl font-bold text-orange-400 mb-2">45</p>
          <p className="text-white font-semibold">مليار ريال سعودي</p>
        </div>
        <div className="card bg-blue-600/20 border-blue-500 text-center">
          <p className="text-4xl font-bold text-blue-400 mb-2">90%</p>
          <p className="text-white font-semibold">نسبة التحويل من المرادم</p>
        </div>
        <div className="card bg-purple-600/20 border-purple-500 text-center">
          <p className="text-4xl font-bold text-purple-400 mb-2">2.8</p>
          <p className="text-white font-semibold">مليون طن/سنة</p>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;

