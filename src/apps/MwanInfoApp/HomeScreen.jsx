import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 'dorMwan',
      title: 'دور موان ومهامه',
      icon: '../assets/icons/Briefcase.png',
      accentColor: 'mwan-blue',
      showIcon: false,
    },
    {
      id: 'anzema',
      title: 'الأنظمة والتشريعات',
      icon: '../assets/icons/Document.png',
      accentColor: 'mwan-green',
      showIcon: false,
    },
    {
      id: 'udeem',
      title: 'برنامج يديم',
      icon: '../assets/icons/Recycling_Symbol.png',
      accentColor: 'mwan-light-green',
      showIcon: false,
    },
    {
      id: 'moktasabat',
      title: 'مكتسبات الاستراتيجية الوطنية لإدارة النفايات بحلول 2040',
      icon: '../assets/icons/Target-Bullseye.png',
      accentColor: 'mwan-orange',
      showIcon: false,
    },
    {
      id: 'contact',
      title: 'تواصل معنا',
      icon: '../assets/icons/Telephone.png',
      accentColor: 'mwan-yellow',
      showIcon: false,
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
              className={`w-full h-full group btn-card p-8 min-h-[180px] landscape-card flex flex-col items-center justify-center gap-4 ${
                item.featured ? 'ring-2 ring-mwan-green/50' : ''
              }`}
            >
              {item.showIcon ? (
                <div className="transition-transform group-hover:scale-110">
                  <img src={item.icon} alt={item.title} className="w-48 h-48 object-contain" />
                </div>
              ) : (
                <h3 className="text-2xl font-bold text-white text-center leading-snug">
                  {item.title}
                </h3>
              )}
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

