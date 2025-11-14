import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 'dorMwan',
      title: 'دور موان ومهامه',
      icon: '/icons/Briefcase.png',
      accentColor: 'mwan-blue',
    },
    {
      id: 'anzema',
      title: 'الأنظمة والتشريعات',
      icon: '/icons/Document.png',
      accentColor: 'mwan-green',
    },
    {
      id: 'udeem',
      title: 'برنامج يديم',
      icon: '/icons/Recycling_Symbol.png',
      accentColor: 'mwan-light-green',
    },
    {
      id: 'moktasabat',
      title: 'مكتسبات الاستراتيجية الوطنية لإدارة النفايات بحلول 2040',
      icon: '/icons/Target-Bullseye.png',
      accentColor: 'mwan-orange',
    },
    {
      id: 'contact',
      title: 'تواصل معنا',
      icon: '/icons/Telephone.png',
      accentColor: 'mwan-yellow',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto horizontal-layout">
      {/* Title */}
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-5xl font-extrabold mb-4 text-white font-ar">
          اكتشف موان
        </h2>
        <p className="text-xl text-mwan-light/80">
          تعرّف على المركز الوطني لإدارة النفايات ودوره في تحقيق مستقبل مستدام
        </p>
      </div>

      {/* Flexbox container for menu items */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto landscape-cols-3">
        {menuItems.map((item) => (
          <div key={item.id} className="w-full md:w-2/5 lg:w-1/3">
            <button
              onClick={() => onNavigate(item.id)}
              className={`w-full h-full group relative bg-gradient-to-bl from-[#06a35b] to-[#035a38] hover:brightness-110 p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-h-[180px] landscape-card flex flex-col items-center justify-center gap-4 ${
                item.featured ? 'ring-2 ring-mwan-green/50' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-white text-center leading-snug">
                {item.title}
              </h3>
              {item.featured && (
                <div className="absolute top-4 left-4 bg-mwan-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  مميز
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Help Text */}
      <div className="mt-12 text-center">
        <p className="text-mwan-light/60 text-lg">
          اختر أحد المواضيع أعلاه لاستكشاف المزيد من المعلومات
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;

