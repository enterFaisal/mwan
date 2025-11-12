import React, { useState } from 'react';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import HomeScreen from './HomeScreen';
import LicensesSection from './LicensesSection';
import EmanifestSection from './EmanifestSection';

const LicensesApp = ({ onBack }) => {
  const [view, setView] = useState('home'); // 'home', 'licenses', 'emanifest'

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mwan-dark via-gray-900 to-mwan-dark">
      <Header title="التراخيص ووثيقة النقل الإلكترونية" showLogo={true} />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          {view === 'home' ? (
            <BackButton onClick={onBack} label="العودة للقائمة الرئيسية" />
          ) : (
            <BackButton onClick={handleBackToHome} label="العودة" />
          )}
        </div>

        {/* Content Area */}
        <div className="animate-fade-in">
          {view === 'home' && (
            <HomeScreen onNavigate={handleViewChange} />
          )}
          
          {view === 'licenses' && (
            <LicensesSection onBack={handleBackToHome} />
          )}
          
          {view === 'emanifest' && (
            <EmanifestSection onBack={handleBackToHome} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LicensesApp;

