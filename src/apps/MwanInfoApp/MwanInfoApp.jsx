import React, { useState } from 'react';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import HomeScreen from './HomeScreen';
import ContentScreen from './ContentScreen';

const MwanInfoApp = ({ onBack }) => {
  const [activeScreen, setActiveScreen] = useState('home');

  const handleScreenChange = (screenId) => {
    setActiveScreen(screenId);
  };

  const handleBackToHome = () => {
    setActiveScreen('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mwan-dark via-gray-900 to-mwan-dark">
      <Header title="اكتشف موان" showLogo={true} />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back to Main Menu Button */}
        <div className="mb-6">
          <BackButton onClick={onBack} label="العودة للقائمة الرئيسية" />
        </div>

        {/* Content Area */}
        <div className="animate-fade-in">
          {activeScreen === 'home' ? (
            <HomeScreen onNavigate={handleScreenChange} />
          ) : (
            <ContentScreen 
              screenId={activeScreen} 
              onBack={handleBackToHome} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MwanInfoApp;

