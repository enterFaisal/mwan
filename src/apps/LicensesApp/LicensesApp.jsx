import React, { useState } from 'react';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import HomeScreen from './HomeScreen';
import LicensesSection from './LicensesSection';
import EmanifestSection from './EmanifestSection';
import BrandBackdrop from '../../components/BrandBackdrop';

const LicensesApp = ({ onBack }) => {
  const [view, setView] = useState('home'); // 'home', 'licenses', 'emanifest'
  const [showBackButton, setShowBackButton] = useState(true);

  const handleViewChange = (newView) => {
    setView(newView);
    setShowBackButton(true);
  };

  const handleBackToHome = () => {
    setView('home');
    setShowBackButton(true);
  };

  return (
    <div className="min-h-screen relative bg-mwan-dark">
      <BrandBackdrop />
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-6 pt-32 pb-8">
        {/* Back Button - only show on sub-pages and when LicensesSection is not showing its own */}
        {view !== 'home' && showBackButton && (
          <div className="mb-6">
            <BackButton onClick={handleBackToHome} label="العودة" />
          </div>
        )}

        {/* Content Area */}
        <div className="animate-fade-in">
          {view === 'home' && (
            <HomeScreen onNavigate={handleViewChange} />
          )}
          
          {view === 'licenses' && (
            <LicensesSection onBack={handleBackToHome} setShowParentBackButton={setShowBackButton} />
          )}
          
          {view === 'emanifest' && (
            <EmanifestSection onBack={handleBackToHome} />
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default LicensesApp;

