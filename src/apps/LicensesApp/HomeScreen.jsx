import React from 'react';
import mktt2Icon from '../../../mktt2.png';
import mktt5Icon from '../../../mktt5.png';

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto horizontal-layout">
      {/* Title */}
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-5xl font-extrabold mb-4 text-white font-ar">
        تكاملٌ يقود تنظيم قطاع إدارة النفايات
        </h2>

      </div>

      {/* Two Main Options */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto landscape-cols-2">
        {/* Licenses Section */}
        <button
          onClick={() => onNavigate('licenses')}
          className="group btn-card p-12 min-h-[350px] landscape-card flex flex-col items-center justify-center gap-6"
        >

          {/* <h3 className="text-4xl font-bold text-white text-center">
            التراخيص والتصاريح
          </h3>
          <p className="text-xl text-white/90 text-center leading-relaxed px-4">
            تعرف على أنواع التراخيص، الإجراءات، الفوائد، وخطوات الحصول على الترخيص
          </p> */}
          <div className="transition-transform group-hover:scale-110">
            <img src={mktt5Icon} alt="Strategic Plan Icon" className="w-64 h-64 object-contain" />
          </div>
          <div className="absolute bottom-6 right-6 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        {/* E-Manifest Section */}
        <button
          onClick={() => onNavigate('emanifest')}
          className="group btn-card p-12 min-h-[350px] landscape-card flex flex-col items-center justify-center gap-6"
        >
          <div className="transition-transform group-hover:scale-110">
            <img src={mktt2Icon} alt="E-Manifest Icon" className="w-64 h-64 object-contain" />
          </div>
          <div className="absolute bottom-6 right-6 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-12 text-center">
        <p className="text-mwan-light/60 text-lg">
          اختر أحد الخيارين أعلاه للبدء في استكشاف المحتوى التفاعلي
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;

