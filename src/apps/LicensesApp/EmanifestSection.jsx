import React, { useState } from 'react';
import { emanifestIntro } from '../../data/emanifestData.js';
import BackButton from '../../components/BackButton';
import ProducerJourney from './journeys/ProducerJourney';
import TransporterJourney from './journeys/TransporterJourney';
import DriverJourney from './journeys/DriverJourney';
import FacilityJourney from './journeys/FacilityJourney';

const EmanifestSection = ({ onBack }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'producer',
      name: 'منتج النفايات',
      icon: '/icons/Briefcase.png',
      color: 'from-blue-600/30 to-blue-900/30',
      hoverColor: 'hover:from-blue-600/40 hover:to-blue-900/40',
      borderColor: 'border-blue-500/30 hover:border-blue-500',
      description: 'تابع رحلة إنشاء وثيقة النقل من البداية'
    },
    {
      id: 'transporter',
      name: 'ناقل النفايات',
      icon: '/icons/Garbage_Truck.png',
      color: 'from-green-600/30 to-green-900/30',
      hoverColor: 'hover:from-green-600/40 hover:to-green-900/40',
      borderColor: 'border-green-500/30 hover:border-green-500',
      description: 'استكشف دور الناقل في اعتماد الوثيقة'
    },
    {
      id: 'driver',
      name: 'السائق',
      icon: '/icons/Person_Walking.png',
      color: 'from-yellow-600/30 to-yellow-900/30',
      hoverColor: 'hover:from-yellow-600/40 hover:to-yellow-900/40',
      borderColor: 'border-yellow-500/30 hover:border-yellow-500',
      description: 'عش تجربة السائق في تنفيذ عملية النقل'
    },
    {
      id: 'facility',
      name: 'مرفق الاستقبال',
      icon: '/icons/Briefcase.png',
      color: 'from-purple-600/30 to-purple-900/30',
      hoverColor: 'hover:from-purple-600/40 hover:to-purple-900/40',
      borderColor: 'border-purple-500/30 hover:border-purple-500',
      description: 'تعرف على دور المرفق في استلام النفايات'
    }
  ];

  const renderJourney = () => {
    switch (selectedRole) {
      case 'producer':
        return <ProducerJourney onBack={() => setSelectedRole(null)} />;
      case 'transporter':
        return <TransporterJourney onBack={() => setSelectedRole(null)} />;
      case 'driver':
        return <DriverJourney onBack={() => setSelectedRole(null)} />;
      case 'facility':
        return <FacilityJourney onBack={() => setSelectedRole(null)} />;
      default:
        return null;
    }
  };

  if (selectedRole) {
    return renderJourney();
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in horizontal-layout">
      {/* Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-6">
          {emanifestIntro.title}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {emanifestIntro.description}
        </p>
      </div>

      {/* Objectives */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-mwan-green text-center mb-8">
          أهداف المنظومة
        </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 landscape-cols-3">
          {emanifestIntro.objectives.map((obj, index) => (
            <div key={index} className="card transition-all hover:border-mwan-green">
              <div className="mb-3 flex justify-center">
                <img src={obj.icon} alt="" className="w-12 h-12" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">{obj.title}</h4>
              <p className="text-sm text-gray-300">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Waste Types */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-mwan-green text-center mb-8">
          أنواع النفايات التي تغطيها الوثيقة
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {emanifestIntro.wasteTypes.map((type, index) => (
            <div key={index} className="btn-secondary py-4 text-center">
              {type}
            </div>
          ))}
        </div>
      </div>

      {/* Role Selection */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          اختر دورك لبدء المحاكاة التفاعلية
        </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 landscape-cols-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`group relative brand-block p-10 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[220px] landscape-card flex flex-col items-center justify-center gap-4`}
            >
              <div className="mb-3 transition-transform group-hover:scale-110 flex justify-center">
                <img src={role.icon} alt="" className="w-20 h-20" />
              </div>
              <h4 className="text-2xl font-bold text-mwan-dark text-center">
                {role.name}
              </h4>
              <p className="text-base text-mwan-dark/80 text-center px-4">
                {role.description}
              </p>
              <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="card border-mwan-green text-center">
        <p className="text-lg text-white">
          💡 اختر أحد الأدوار أعلاه لتجربة محاكاة تفاعلية خطوة بخطوة لرحلة وثيقة النقل الإلكترونية
        </p>
      </div>
    </div>
  );
};

export default EmanifestSection;

