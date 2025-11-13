import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto horizontal-layout">
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 landscape-cols-2">
        {/* Opportunities Section */}
        <button
          onClick={() => onNavigate('opportunities')}
          className="group relative brand-block p-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[380px] landscape-card flex flex-col items-center justify-center gap-6"
        >
          <div className="text-8xl mb-4 transition-transform group-hover:scale-110">
            🗺️
          </div>
          <h3 className="text-3xl font-bold text-mwan-dark text-center">
            الفرص الاستثمارية
          </h3>
          <p className="text-lg text-mwan-dark/80 text-center leading-relaxed px-4">
            خريطة تفاعلية تعرض الفرص الاستثمارية في مختلف مناطق المملكة مع البيانات والإحصائيات
          </p>

          <div className="absolute bottom-6 right-6 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        {/* Strategic Plan Section */}
        <button
          onClick={() => onNavigate('plan')}
          className="group relative brand-block p-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[380px] landscape-card flex flex-col items-center justify-center gap-6"
        >
          <div className="text-8xl mb-4 transition-transform group-hover:scale-110">
            📊
          </div>
          <h3 className="text-3xl font-bold text-mwan-dark text-center">
            المخطط الاستراتيجي الشامل
          </h3>
          <p className="text-lg text-mwan-dark/80 text-center leading-relaxed px-4">
            تعرف على المنهجية والأهداف والبنية التحتية المقترحة للتخطيط الاستراتيجي
          </p>

          <div className="absolute bottom-6 right-6 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
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
            💡 تتمثل مجموعة المدينة المنورة في 4 محافظات منها المدينة الصغرى وينبع الأكثر بحوالي 1.5 مليون نسمة، 
            مع إمكانية تحقيق نسبة استفادة تصل إلى 97% من النفايات وبناء بنية تحتية بقيمة 45 مليار ريال سعودي
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

