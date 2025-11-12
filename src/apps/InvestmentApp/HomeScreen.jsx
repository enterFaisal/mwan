import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-5xl font-bold mb-6 text-white">
          الفرص الاستثمارية والمخطط الاستراتيجي
        </h2>
        <p className="text-xl text-gray-300">
          استكشف فرص الاستثمار في قطاع إدارة النفايات عبر مناطق المملكة
        </p>
      </div>

      {/* Two Main Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Opportunities Section */}
        <button
          onClick={() => onNavigate('opportunities')}
          className="group relative bg-gradient-to-br from-orange-600/30 to-orange-900/30 hover:from-orange-600/40 hover:to-orange-900/40 p-12 rounded-3xl shadow-2xl border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 min-h-[380px] flex flex-col items-center justify-center gap-6"
        >
          <div className="text-8xl mb-4 transition-transform group-hover:scale-110">
            🗺️
          </div>
          <h3 className="text-3xl font-bold text-white text-center">
            الفرص الاستثمارية
          </h3>
          <p className="text-lg text-gray-300 text-center leading-relaxed px-4">
            خريطة تفاعلية تعرض الفرص الاستثمارية في مختلف مناطق المملكة مع البيانات والإحصائيات
          </p>
          <div className="card bg-orange-600/20 border-orange-500 text-center mt-4">
            <p className="text-3xl font-bold text-orange-400">420</p>
            <p className="text-sm text-white">مليار ريال قيمة الفرص</p>
          </div>
          <div className="absolute bottom-6 right-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        {/* Strategic Plan Section */}
        <button
          onClick={() => onNavigate('plan')}
          className="group relative bg-gradient-to-br from-blue-600/30 to-blue-900/30 hover:from-blue-600/40 hover:to-blue-900/40 p-12 rounded-3xl shadow-2xl border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 min-h-[380px] flex flex-col items-center justify-center gap-6"
        >
          <div className="text-8xl mb-4 transition-transform group-hover:scale-110">
            📊
          </div>
          <h3 className="text-3xl font-bold text-white text-center">
            المخطط الاستراتيجي الشامل
          </h3>
          <p className="text-lg text-gray-300 text-center leading-relaxed px-4">
            تعرف على المنهجية والأهداف والبنية التحتية المقترحة للتخطيط الاستراتيجي
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="card bg-blue-600/20 border-blue-500 text-center py-2">
              <p className="text-xl font-bold text-blue-400">79%</p>
              <p className="text-xs text-white">تدوير</p>
            </div>
            <div className="card bg-blue-600/20 border-blue-500 text-center py-2">
              <p className="text-xl font-bold text-blue-400">90%</p>
              <p className="text-xs text-white">استبعاد</p>
            </div>
            <div className="card bg-blue-600/20 border-blue-500 text-center py-2">
              <p className="text-xl font-bold text-blue-400">76K+</p>
              <p className="text-xs text-white">وظيفة</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Info Card */}
      <div className="mt-16 text-center">
        <div className="card inline-block bg-white/5 max-w-3xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            💡 يمثل قطاع إدارة النفايات فرصة استثمارية ضخمة تتجاوز 420 مليار ريال، مع إمكانية خلق
            أكثر من 76 ألف وظيفة مباشرة وتحقيق أهداف الاستدامة الوطنية
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

