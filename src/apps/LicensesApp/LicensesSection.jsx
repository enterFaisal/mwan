import React, { useState } from 'react';
import { licensesData } from '../../data/licensesData.jsx';
import BackButton from '../../components/BackButton';

// New icons from تصاميم سيتي سكيب
import iconTaarif from '../../assets/تصاميم سيتي سكيب/ايقونات التراخيص/التعريف بنظام التصاريح والتراخيص_@4x.png';
import iconFarq from '../../assets/تصاميم سيتي سكيب/ايقونات التراخيص/الفرق بين الترخيص والتصريح_@4x.png';
import iconMaktasabat from '../../assets/تصاميم سيتي سكيب/ايقونات التراخيص/مكتسبات حصول المنشآت @4x.png';
import iconAnwaa from '../../assets/تصاميم سيتي سكيب/ايقونات التراخيص/أنواع التراخيص والتصاريح@4x.png';
import iconKulMa from '../../assets/تصاميم سيتي سكيب/ايقونات التراخيص/كل ما يسهل مسار@4x.png';

const LicensesSection = ({ onBack, setShowParentBackButton }) => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = licensesData.main.sections;
  const sectionIcons = [iconTaarif, iconFarq, iconMaktasabat, iconAnwaa, iconKulMa];

  // Hide parent back button when viewing a section
  React.useEffect(() => {
    if (setShowParentBackButton) {
      setShowParentBackButton(activeSection === null);
    }
  }, [activeSection, setShowParentBackButton]);

  return (
    <div className="max-w-6xl mx-auto horizontal-layout">
      {activeSection === null ? (
        // Menu View
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
            خطوتك الأولى نحو الامتثال      
            
                  </h2>
            {/* <p className="text-xl text-gray-300">
              اختر أحد المواضيع لاستكشاف المزيد من التفاصيل
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 landscape-cols-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className="group btn-card p-8 min-h-[180px] flex flex-col items-center justify-center gap-4"
              >
                <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                  <img src={sectionIcons[index]} alt="" className="h-16 w-auto object-contain" />
                </div>
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
        <div className="animate-fade-in">
          <div className="mb-8">
            <BackButton onClick={() => setActiveSection(null)} label="العودة للقائمة" />
          </div>

          <div className="brand-panel rounded-3xl border-2 overflow-hidden">
            <div className="bg-mwan-green px-10 py-8">
              <h2 className="text-4xl font-bold text-white">
                {sections[activeSection].title}
              </h2>
            </div>

            <div className="p-10 text-white">
              {sections[activeSection].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LicensesSection;

