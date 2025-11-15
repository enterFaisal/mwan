import React from 'react';
import mkttIcon from '../../../mktt.png';
import dataIcon from "../../assets/icons/Certificate-Diploma.png";

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto horizontal-layout">
      {/* Title */}
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-5xl font-extrabold mb-4 text-white font-ar">
        رحلة التطوير تبدأ من التخطيط وتزدهر بالاستثمار.
             </h2>
        <p className="text-xl text-mwan-light/80">
        انتقل بين محطّاتها واكتشف مسار التنمية          </p>
      </div>

      {/* Two Main Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto landscape-cols-3">
        {/* Opportunities Section */}
        <button
          onClick={() => onNavigate('opportunities')}
          className="group btn-card p-12 min-h-[380px] landscape-card flex flex-col items-center justify-center gap-6"
        >
          <h3 className="text-4xl font-bold text-white text-center">
            الفرص الاستثمارية
          </h3>
          <p className="text-xl text-white/90 text-center leading-relaxed px-4">
            خريطة تفاعلية تعرض الفرص الاستثمارية في مختلف مناطق المملكة مع البيانات والإحصائيات
          </p>
          <div className="absolute bottom-6 right-6 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        {/* Strategic Plan Section */}
        <button
          onClick={() => onNavigate('plan')}
          className="group btn-card p-12 min-h-[380px] landscape-card flex flex-col items-center justify-center gap-6"
        >
          <div className="transition-transform group-hover:scale-110">
            <img src={mkttIcon} alt="Strategic Plan Icon" className="w-64 h-64 object-contain" />
          </div>
          <div className="absolute bottom-6 right-6 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>


      </div>
    </div>
  );
};

export default HomeScreen;

