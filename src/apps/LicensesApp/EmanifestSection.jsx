import React, { useState } from 'react';
import { emanifestIntro } from '../../data/emanifestData.js';
import BackButton from '../../components/BackButton';
import ProducerJourney from './journeys/ProducerJourney';
import TransporterJourney from './journeys/TransporterJourney';
import DriverJourney from './journeys/DriverJourney';
import FacilityJourney from './journeys/FacilityJourney';

import recycleBinIcon from '../../assets/icons_white/Recycle_Bin.png';
import garbageTruckIcon from '../../assets/icons_white/Garbage_Truck.png';
import personWalkingIcon from '../../assets/icons_white/Person_Walking.png';
import briefcaseIcon from '../../assets/icons_white/Briefcase.png';

const EmanifestSection = ({ onBack }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'producer',
      name: 'منتج النفايات',
      icon: recycleBinIcon,
      color: 'from-blue-600/30 to-blue-900/30',
      hoverColor: 'hover:from-blue-600/40 hover:to-blue-900/40',
      borderColor: 'border-blue-500/30 hover:border-blue-500',
      description: 'تابع رحلة إنشاء وثيقة النقل من البداية'
    },
    {
      id: 'transporter',
      name: 'ناقل النفايات',
      icon: garbageTruckIcon,
      color: 'from-green-600/30 to-green-900/30',
      hoverColor: 'hover:from-green-600/40 hover:to-green-900/40',
      borderColor: 'border-green-500/30 hover:border-green-500',
      description: 'استكشف دور الناقل في اعتماد الوثيقة'
    },
    {
      id: 'driver',
      name: 'السائق',
      icon: personWalkingIcon,
      color: 'from-yellow-600/30 to-yellow-900/30',
      hoverColor: 'hover:from-yellow-600/40 hover:to-yellow-900/40',
      borderColor: 'border-yellow-500/30 hover:border-yellow-500',
      description: 'عش تجربة السائق في تنفيذ عملية النقل'
    },
    {
      id: 'facility',
      name: 'مرفق الاستقبال',
      icon: briefcaseIcon,
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
                <img src={obj.icon} alt="" className="h-12 w-auto object-contain" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">{obj.title}</h4>
              <p className="text-sm text-gray-300">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>



      {/* System Components */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-mwan-green text-center mb-8">
          مكونات منظومة وثيقة النقل الإلكترونية
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emanifestIntro.systemComponents.map((component, index) => (
            <div key={index} className="card bg-white/5 border-mwan-green/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-mwan-green"></div>
                    <div className="ml-3">
                      <img src={component.icon} alt="" className="h-20 w-20 object-contain" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-mwan-green mb-4 text-right">
                      {component.title}
                    </h4>
                    <ul className="space-y-3 text-right">
                      {component.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-white/90 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-mwan-green flex-shrink-0 text-xl font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* Waste Types */}
            <div className="mb-16">
        <h3 className="text-3xl font-bold text-mwan-green text-center mb-8">
          أنواع النفايات التي تغطيها الوثيقة
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {emanifestIntro.wasteTypes.map((type, index) => (
            <div key={index} className="btn-secondary py-4 text-center w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className="group btn-card flex flex-col items-center justify-center text-center p-6 min-h-[200px]"
            >
              <div className="mb-4 transition-transform group-hover:scale-110">
                <img src={role.icon} alt="" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {role.name}
              </h4>
              <p className="text-sm text-white/90">
                {role.description}
              </p>
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

