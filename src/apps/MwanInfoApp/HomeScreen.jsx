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
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-5xl font-bold mb-6 text-white">
          اكتشف موان
        </h2>
        <p className="text-xl text-gray-300">
          تعرّف على المركز الوطني لإدارة النفايات ودوره في تحقيق مستقبل مستدام
        </p>
      </div>

      {/* Menu Layout - Inspired by Slide 4 design */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Top Row - 2 items */}
        <div className="md:col-span-2">
          <button
            onClick={() => onNavigate(menuItems[0].id)}
            className={`w-full group relative bg-gradient-to-br ${menuItems[0].color} ${menuItems[0].hoverColor} p-8 rounded-3xl shadow-2xl border-2 ${menuItems[0].borderColor} transition-all duration-300 transform hover:scale-105 min-h-[200px] flex flex-col items-center justify-center gap-4`}
          >
            <div className="text-6xl mb-2 transition-transform group-hover:scale-110">
              {menuItems[0].icon}
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              {menuItems[0].title}
            </h3>
          </button>
        </div>

        {/* Center - Featured item */}
        <div className="md:col-span-1">
          <button
            onClick={() => onNavigate(menuItems[1].id)}
            className={`w-full group relative bg-gradient-to-br ${menuItems[1].color} ${menuItems[1].hoverColor} p-8 rounded-3xl shadow-2xl border-2 ${menuItems[1].borderColor} transition-all duration-300 transform hover:scale-105 min-h-[200px] flex flex-col items-center justify-center gap-4 ring-4 ring-mwan-green/30`}
          >
            <div className="text-6xl mb-2 transition-transform group-hover:scale-110">
              {menuItems[1].icon}
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              {menuItems[1].title}
            </h3>
          </button>
        </div>

        {/* Top Row - 1 item */}
        <div className="md:col-span-2">
          <button
            onClick={() => onNavigate(menuItems[2].id)}
            className={`w-full group relative bg-gradient-to-br ${menuItems[2].color} ${menuItems[2].hoverColor} p-8 rounded-3xl shadow-2xl border-2 ${menuItems[2].borderColor} transition-all duration-300 transform hover:scale-105 min-h-[200px] flex flex-col items-center justify-center gap-4`}
          >
            <div className="text-6xl mb-2 transition-transform group-hover:scale-110">
              {menuItems[2].icon}
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              {menuItems[2].title}
            </h3>
          </button>
        </div>

        {/* Bottom Row - 2 items */}
        <div className="md:col-span-2 md:col-start-2">
          <button
            onClick={() => onNavigate(menuItems[3].id)}
            className={`w-full group relative bg-gradient-to-br ${menuItems[3].color} ${menuItems[3].hoverColor} p-8 rounded-3xl shadow-2xl border-2 ${menuItems[3].borderColor} transition-all duration-300 transform hover:scale-105 min-h-[200px] flex flex-col items-center justify-center gap-4`}
          >
            <div className="text-6xl mb-2 transition-transform group-hover:scale-110">
              {menuItems[3].icon}
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              {menuItems[3].title}
            </h3>
          </button>
        </div>

        <div className="md:col-span-2">
          <button
            onClick={() => onNavigate(menuItems[4].id)}
            className={`w-full group relative bg-gradient-to-br ${menuItems[4].color} ${menuItems[4].hoverColor} p-8 rounded-3xl shadow-2xl border-2 ${menuItems[4].borderColor} transition-all duration-300 transform hover:scale-105 min-h-[200px] flex flex-col items-center justify-center gap-4`}
          >
            <div className="text-6xl mb-2 transition-transform group-hover:scale-110">
              {menuItems[4].icon}
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              {menuItems[4].title}
            </h3>
          </button>
        </div>
      </div>

      {/* Help Text */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-lg">
          اختر أحد المواضيع أعلاه لاستكشاف المزيد من المعلومات
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;

