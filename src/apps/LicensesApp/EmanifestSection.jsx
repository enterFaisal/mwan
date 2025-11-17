import React, { useState } from 'react';
import { emanifestIntro } from '../../data/emanifestData.js';
import BackButton from '../../components/BackButton';
import ProducerJourney from './journeys/ProducerJourney';
import TransporterJourney from './journeys/TransporterJourney';
import DriverJourney from './journeys/DriverJourney';
import FacilityJourney from './journeys/FacilityJourney';

// New icons from تصاميم سيتي سكيب - ايقونات اختر دورك
import recycleBinIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/منتج@4x.png';
import garbageTruckIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/سلة@4x.png';
import personWalkingIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/سائق@4x.png';
import briefcaseIcon from '../../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات اختر دورك/استقبال@4x.png';

// Use case example images
import useCaseImage1 from '../../assets/simages/image1.png';
import useCaseImage2 from '../../assets/simages/image2.png';
import useCaseImage3 from '../../assets/simages/image3.png';

const EmanifestSection = ({ onBack }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

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
      color: 'from-green-600/30 to-green-900/30',
      hoverColor: 'hover:from-green-600/40 hover:to-green-900/40',
      borderColor: 'border-green-500/30 hover:border-green-500',
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

  // Sections data
  const sections = [
    {
      id: 'intro',
      title: 'تعرف على الوثيقة',
      content: 'intro'
    },
    {
      id: 'components',
      title: 'مكوناتها',
      content: 'components'
    },
    {
      id: 'wasteTypes',
      title: 'أنواع النفايات التي تغطيها',
      content: 'wasteTypes'
    },
    {
      id: 'howItWorks',
      title: 'آلية عملها',
      content: 'howItWorks'
    },
    {
      id: 'monitoring',
      title: 'منظومة الرقابة الإلكترونية ',
      content: 'monitoring'
    },
    {
      id: 'useCases',
      title: 'أمثلة على حالات الاستخدام',
      content: 'useCases'
    }
  ];

  // Render section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              أداة رقابية تعمل على رصد وتتبع وجمع وتحليل البيانات الخاصة بحركة النفايات من نقطة إنتاجها وحتى مرحلة المعالجة والتخلص النهائي باستخدام التقنيات الناشئة وتقنيات الذكاء الاصطناعي
            </p>
            
            {/* YouTube Video */}
            <div className="mt-8 mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="youtube-container relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/le8-LNdry4E?modestbranding=1&rel=0&showinfo=0&autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
                    title="وثيقة النقل الإلكترونية"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    autoplay="1"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-12">
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
          </div>
        );
      
      case 'monitoring':
        return (
          <div className="space-y-12">
            {/* منظومة الرقابة الإلكترونية */}
            <div>
              <p className="text-xl text-gray-300 leading-relaxed text-center mb-8">
                منصة رقمية مطوّرة من قبل المركز الوطني لإدارة النفايات تدعم تنفيذ الجولات التفتيشية الميدانية لرصد المخالفات وتوثيق المحاضر وإصدارها رقميا
              </p>
            </div>
          </div>
        );
      
      case 'useCases':
        return (
          <div className="space-y-12">
            {/* أمثلة على حالات الاستخدام */}
            <div>
              <h3 className="text-3xl font-bold text-mwan-green text-center mb-8">
                أمثلة على حالات الاستخدام
              </h3>
              <div className="space-y-6">
                {/* First Use Case Image */}
                <div>
                  <div className="card bg-white/5 border-mwan-green/30 p-2">
                    <img 
                      src={useCaseImage1} 
                      alt="التتبع والرصد اللحظي لمسارات النقل وتسجيل ورصد كامل سلسلة قيمة النفاية" 
                      className="w-full h-auto shadow-lg"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <p className="text-xl text-mwan-green font-bold text-right">
                      تسجيل ورصد كامل سلسلة قيمة النفاية من الانتاج وحتى مرحلة المعالجة والتخلص الآمن
                    </p>
                    <p className="text-xl text-mwan-green font-bold text-right">
                      التتبع والرصد اللحظي لمسارات النقل
                    </p>
                  </div>
                </div>

                {/* Second Use Case Image */}
                <div>
                  <div className="card bg-white/5 border-mwan-green/30 p-2">
                    <img 
                      src={useCaseImage2} 
                      alt="مراقبة ورصد الرمي العشوائي ورصد مخالفات تفريغ النفايات في مواقع غير مصرحة" 
                      className="w-full h-auto shadow-lg"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <p className="text-xl text-mwan-green font-bold text-right">
                      رصد مخالفات تفريغ النفايات في مواقع غير مصرحة
                    </p>
                    <p className="text-xl text-mwan-green font-bold text-right">
                      مراقبة ورصد الرمي العشوائي
                    </p>
                  </div>
                </div>

                {/* Third Use Case Image */}
                <div>
                  <div className="card bg-white/5 border-mwan-green/30 p-2">
                    <img 
                      src={useCaseImage3} 
                      alt="التحليل الجيومكاني للكميات المنتجة والتنبؤ للمستقبل وبناء وإصدار التقارير والإشعارات والخرائط التفاعلية" 
                      className="w-full h-auto shadow-lg"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <p className="text-xl text-mwan-green font-bold text-right">
                      بناء وإصدار التقارير والإشعارات والخرائط التفاعلية لدعم اتخاذ القرار
                    </p>
                    <p className="text-xl text-mwan-green font-bold text-right">
                      التحليل الجيومكاني للكميات المنتجة والتنبؤ للمستقبل
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'components':
        return (
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
        );
      
      case 'howItWorks':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                تعرّف على منظومة وثيقة النقل الإلكترونية
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mt-2">
                ومساهمتها في رفع كفاءة العمليات التشغيلية
              </p>
            </div>
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
        );
      
      case 'wasteTypes':
        return (
          <div className="flex flex-wrap justify-center gap-4">
            {emanifestIntro.wasteTypes.map((type, index) => (
              <div key={index} className="btn-secondary py-4 text-center w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                {type}
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in horizontal-layout">
      {/* Back Button - only show when no section is active */}
      {activeSection === null && (
        <div className="mb-6">
          <BackButton onClick={onBack} label="العودة" />
        </div>
      )}

      {/* Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-6">
          {emanifestIntro.title}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {emanifestIntro.description}
        </p>
      </div>

      {activeSection === null ? (
        // Menu View - Sections as buttons
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 landscape-cols-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="group btn-card p-8 min-h-[180px] flex flex-col items-center justify-center gap-4"
              >
                <h3 className="text-2xl font-bold text-white text-center">
                  {section.title}
                </h3>
                <div className="absolute bottom-4 right-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Content View
        <div className="mb-16">
          <div className="mb-8">
            <BackButton onClick={() => setActiveSection(null)} label="العودة للقائمة" />
          </div>

          <div className="brand-panel rounded-3xl border-2 overflow-hidden">
            <div className="bg-mwan-green px-10 py-8">
              <h2 className="text-4xl font-bold text-white">
                {activeSection === 'intro' 
                  ? 'وثيقة النقل الإلكترونية' 
                  : activeSection === 'components'
                  ? 'مكونات منظومة وثيقة النقل الإلكترونية'
                  : activeSection === 'wasteTypes'
                  ? 'أنواع النفايات التي تغطيها الوثيقة'
                  : sections.find(s => s.id === activeSection)?.title}
              </h2>
            </div>

            <div className="p-10 text-white">
              {renderSectionContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmanifestSection;

