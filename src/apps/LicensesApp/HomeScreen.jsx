import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-5xl font-bold mb-6 text-white">
          التراخيص ووثيقة النقل الإلكترونية
        </h2>
        <p className="text-xl text-gray-300">
          استكشف منظومة التراخيص وجرّب محاكاة وثيقة النقل الإلكترونية
        </p>
      </div>

      {/* Two Main Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Licenses Section */}
        <button
          onClick={() => onNavigate('licenses')}
          className="group relative brand-block p-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[350px] flex flex-col items-center justify-center gap-6"
        >
          <div className="text-8xl mb-4 transition-transform group-hover:scale-110">
            📋
          </div>
          <h3 className="text-3xl font-bold text-mwan-dark text-center">
            التراخيص والتصاريح
          </h3>
          <p className="text-lg text-mwan-dark/80 text-center leading-relaxed px-4">
            تعرف على أنواع التراخيص، الإجراءات، الفوائد، وخطوات الحصول على الترخيص
          </p>
          <div className="absolute bottom-6 right-6 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        {/* E-Manifest Section */}
        <button
          onClick={() => onNavigate('emanifest')}
          className="group relative brand-block p-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[350px] flex flex-col items-center justify-center gap-6"
        >
          <div className="text-8xl mb-4 transition-transform group-hover:scale-110">
            📱
          </div>
          <h3 className="text-3xl font-bold text-mwan-dark text-center">
            وثيقة النقل الإلكترونية
          </h3>
          <p className="text-lg text-mwan-dark/80 text-center leading-relaxed px-4">
            جرّب محاكاة تفاعلية لرحلة وثيقة النقل من وجهة نظر 4 أطراف مختلفة
          </p>
          <div className="absolute bottom-6 right-6 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-16 text-center">
        <div className="card inline-block bg-white/5 max-w-2xl">
          <p className="text-gray-300 text-lg">
            💡 اختر أحد الخيارين أعلاه للبدء في استكشاف المحتوى التفاعلي
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

