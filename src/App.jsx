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
    <div className="min-h-screen relative bg-mwan-dark">
      <BrandBackdrop />
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-6 pt-32 pb-12">
        {/* Welcome Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white font-arabic">
            مرحباً بكم في جناح موان
          </h1>
          <p className="text-xl md:text-2xl text-mwan-light/90 max-w-3xl mx-auto leading-relaxed font-arabic">
            المركز الوطني لإدارة النفايات - نحو مستقبل مستدام
          </p>
        </div>

        {/* App Selection */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-mwan-green font-arabic">
            اختر التطبيق التفاعلي
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* App 1: Discover MWAN */}
            <button
              onClick={() => navigate('/mwan-info')}
              className="group relative brand-block p-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-h-[320px] flex flex-col items-center justify-center gap-6 accent-blue"
            >
              <div className="text-7xl mb-4 transition-transform group-hover:scale-110">
                🏢
              </div>
              <h3 className="text-2xl font-bold text-mwan-dark text-center font-arabic">
                اكتشف موان
              </h3>
              <p className="text-base text-mwan-dark/80 text-center leading-relaxed font-arabic">
                تعرف على دور المركز ومهامه، الأنظمة والتشريعات، برنامج يديم، ومكتسبات الاستراتيجية
              </p>
              <div className="absolute bottom-4 right-4 text-mwan-blue opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* App 2: Licenses & E-Manifest */}
            <button
              onClick={() => navigate('/licenses')}
              className="group relative brand-block p-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-h-[320px] flex flex-col items-center justify-center gap-6 accent-green"
            >
              <div className="text-7xl mb-4 transition-transform group-hover:scale-110">
                📋
              </div>
              <h3 className="text-2xl font-bold text-mwan-dark text-center font-arabic">
                التراخيص ووثيقة النقل
              </h3>
              <p className="text-base text-mwan-dark/80 text-center leading-relaxed font-arabic">
                استكشف منظومة التراخيص والتصاريح، وجرّب محاكاة وثيقة النقل الإلكترونية
              </p>
              <div className="absolute bottom-4 right-4 text-mwan-green opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* App 3: Investment Opportunities */}
            <button
              onClick={() => navigate('/investment')}
              className="group relative brand-block p-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-h-[320px] flex flex-col items-center justify-center gap-6 accent-orange"
            >
              <div className="text-7xl mb-4 transition-transform group-hover:scale-110">
                💼
              </div>
              <h3 className="text-2xl font-bold text-mwan-dark text-center font-arabic">
                الفرص الاستثمارية
              </h3>
              <p className="text-base text-mwan-dark/80 text-center leading-relaxed font-arabic">
                اكتشف الفرص الاستثمارية على خريطة المملكة والمخطط الاستراتيجي الشامل
              </p>
              <div className="absolute bottom-4 right-4 text-mwan-orange opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="card inline-block bg-white/5">
            <p className="text-lg text-gray-300 font-arabic">
              تطبيق تفاعلي مصمم خصيصاً لجناح موان في المعارض والفعاليات
            </p>
            <p className="text-sm text-gray-400 mt-2 font-arabic">
              المس أي تطبيق للبدء في استكشاف المحتوى
            </p>
          </div>
        </div>
      </main>
      </div>
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

