import React from 'react';

const HomeScreen = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 'dorMwan',
      title: 'دور موان ومهامه',
      icon: '🏢',
      color: 'from-blue-600/30 to-blue-900/30',
      hoverColor: 'hover:from-blue-600/40 hover:to-blue-900/40',
      borderColor: 'border-blue-500/30 hover:border-blue-500'
    },
    {
      id: 'anzema',
      title: 'الأنظمة والتشريعات',
      icon: '📜',
      color: 'from-mwan-green/30 to-green-900/30',
      hoverColor: 'hover:from-mwan-green/40 hover:to-green-900/40',
      borderColor: 'border-mwan-green/30 hover:border-mwan-green',
      featured: true
    },
    {
      id: 'udeem',
      title: 'برنامج يديم',
      icon: '♻️',
      color: 'from-purple-600/30 to-purple-900/30',
      hoverColor: 'hover:from-purple-600/40 hover:to-purple-900/40',
      borderColor: 'border-purple-500/30 hover:border-purple-500'
    },
    {
      id: 'moktasabat',
      title: 'مكتسبات الاستراتيجية الوطنية لإدارة النفايات بحلول 2040',
      icon: '🎯',
      color: 'from-orange-600/30 to-orange-900/30',
      hoverColor: 'hover:from-orange-600/40 hover:to-orange-900/40',
      borderColor: 'border-orange-500/30 hover:border-orange-500'
    },
    {
      id: 'contact',
      title: 'تواصل معنا',
      icon: '📞',
      color: 'from-teal-600/30 to-teal-900/30',
      hoverColor: 'hover:from-teal-600/40 hover:to-teal-900/40',
      borderColor: 'border-teal-500/30 hover:border-teal-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          اكتشف موان
        </h2>
        <p className="text-xl text-mwan-light/80">
          تعرّف على المركز الوطني لإدارة النفايات ودوره في تحقيق مستقبل مستدام
        </p>
      </div>

      {/* Menu Grid - Clean 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group relative brand-block p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-h-[180px] flex flex-col items-center justify-center gap-4 ${
              item.featured ? 'ring-2 ring-mwan-green/50' : ''
            }`}
          >
            <div className="text-6xl mb-2 transition-transform group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-mwan-dark text-center leading-snug">
              {item.title}
            </h3>
            {item.featured && (
              <div className="absolute top-4 left-4 bg-mwan-green text-white text-xs font-bold px-3 py-1 rounded-full">
                مميز
              </div>
            )}
          </button>
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

