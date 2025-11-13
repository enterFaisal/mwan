import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MwanInfoApp from './apps/MwanInfoApp/MwanInfoApp';
import LicensesApp from './apps/LicensesApp/LicensesApp';
import InvestmentApp from './apps/InvestmentApp/InvestmentApp';
import BrandBackdrop from './components/BrandBackdrop';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-mwan-dark flex flex-col">
      <BrandBackdrop />
      
      {/* Top 25% - Logo only (unreachable area) */}
      <div className="relative z-20 h-[25vh] flex items-center justify-end px-6">
        <Header />
      </div>

      {/* Bottom 75% - All interactive content */}
      <main className="relative z-10 flex-1 container mx-auto px-6 pb-8 horizontal-layout flex flex-col justify-center">
        {/* Welcome Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-arabic">
            مرحباً بكم في جناح موان
          </h1>
          <p className="text-lg md:text-xl text-mwan-light/90 max-w-3xl mx-auto leading-relaxed font-arabic">
            المركز الوطني لإدارة النفايات - نحو مستقبل مستدام
          </p>
        </div>

        {/* App Selection */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-mwan-green font-arabic">
            اختر التطبيق التفاعلي
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 landscape-cols-3">
            {/* App 1: Discover MWAN */}
            <button
              onClick={() => navigate('/mwan-info')}
              className="group relative brand-block p-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-h-[200px] landscape-card flex flex-col items-center justify-center gap-4 accent-blue"
            >
              <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                <img src="/icons/Briefcase.png" alt="" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold text-mwan-dark text-center font-arabic">
                اكتشف موان
              </h3>
              <p className="text-sm text-mwan-dark/80 text-center leading-relaxed font-arabic">
                تعرف على دور المركز ومهامه، الأنظمة والتشريعات، برنامج يديم، ومكتسبات الاستراتيجية
              </p>
              <div className="absolute bottom-3 right-3 text-mwan-blue opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* App 2: Licenses & E-Manifest */}
            <button
              onClick={() => navigate('/licenses')}
              className="group relative brand-block p-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-h-[200px] landscape-card flex flex-col items-center justify-center gap-4 accent-green"
            >
              <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                <img src="/icons/Checklist.png" alt="" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold text-mwan-dark text-center font-arabic">
                التراخيص ووثيقة النقل
              </h3>
              <p className="text-sm text-mwan-dark/80 text-center leading-relaxed font-arabic">
                استكشف منظومة التراخيص والتصاريح، وجرّب محاكاة وثيقة النقل الإلكترونية
              </p>
              <div className="absolute bottom-3 right-3 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* App 3: Investment Opportunities */}
            <button
              onClick={() => navigate('/investment')}
              className="group relative brand-block p-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-h-[200px] landscape-card flex flex-col items-center justify-center gap-4 accent-orange"
            >
              <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                <img src="/icons/Briefcase.png" alt="" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold text-mwan-dark text-center font-arabic">
                الفرص الاستثمارية
              </h3>
              <p className="text-sm text-mwan-dark/80 text-center leading-relaxed font-arabic">
                اكتشف الفرص الاستثمارية على خريطة المملكة والمخطط الاستراتيجي الشامل
              </p>
              <div className="absolute bottom-3 right-3 text-mwan-orange opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center animate-fade-in">
          <div className="card inline-block bg-white/5">
            <p className="text-base text-gray-300 font-arabic">
              تطبيق تفاعلي مصمم خصيصاً لجناح موان في المعارض والفعاليات
            </p>
            <p className="text-sm text-gray-400 mt-1 font-arabic">
              المس أي تطبيق للبدء في استكشاف المحتوى
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const backHome = () => navigate('/');

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/mwan-info" element={<MwanInfoApp onBack={backHome} />} />
      <Route path="/licenses" element={<LicensesApp onBack={backHome} />} />
      <Route path="/investment" element={<InvestmentApp onBack={backHome} />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;

