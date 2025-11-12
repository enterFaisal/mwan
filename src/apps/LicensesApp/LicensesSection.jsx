import React, { useState } from 'react';
import { licensesData } from '../../data/licensesData.jsx';
import BackButton from '../../components/BackButton';

const LicensesSection = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = licensesData.main.sections;

  return (
    <div className="max-w-6xl mx-auto">
      {activeSection === null ? (
        // Menu View
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              التراخيص والتصاريح
            </h2>
            <p className="text-xl text-gray-300">
              اختر أحد المواضيع لاستكشاف المزيد من التفاصيل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className="group relative bg-gradient-to-br from-mwan-light/20 to-white/10 hover:from-mwan-light/30 hover:to-white/20 p-8 rounded-3xl shadow-xl border-2 border-mwan-light/30 hover:border-mwan-green transition-all duration-300 transform hover:scale-105 min-h-[180px] flex flex-col items-center justify-center gap-4"
              >
                <div className="text-5xl mb-2 transition-transform group-hover:scale-110">
                  {['📋', '📖', '✅', '🏷️', '📝'][index]}
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  {section.title}
                </h3>
                <div className="absolute bottom-4 right-4 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
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

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-mwan-green/30 overflow-hidden">
            <div className="bg-gradient-to-l from-mwan-green to-green-700 px-10 py-8">
              <h2 className="text-4xl font-bold text-white">
                {sections[activeSection].title}
              </h2>
            </div>

            <div className="p-10 text-white">
              {sections[activeSection].content}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <BackButton onClick={() => setActiveSection(null)} label="العودة للقائمة" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LicensesSection;

