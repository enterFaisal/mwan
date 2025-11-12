import React, { useState } from 'react';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import HomeScreen from './HomeScreen';
import OpportunitiesSection from './OpportunitiesSection';
import PlanSection from './PlanSection';
import BrandBackdrop from '../../components/BrandBackdrop';

const InvestmentApp = ({ onBack }) => {
  const [view, setView] = useState('home'); // 'home', 'opportunities', 'plan'

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className="min-h-screen relative bg-mwan-dark">
      <BrandBackdrop />
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-6 pt-32 pb-8">
        {/* Back Button - only show on sub-pages */}
        {view !== 'home' && (
          <div className="mb-6">
            <BackButton onClick={handleBackToHome} label="العودة" />
          </div>
        )}

        {/* Content Area */}
        <div className="animate-fade-in">
          {view === 'home' && (
            <HomeScreen onNavigate={handleViewChange} />
          )}
          
          {view === 'opportunities' && (
            <OpportunitiesSection onBack={handleBackToHome} />
          )}
          
          {view === 'plan' && (
            <PlanSection onBack={handleBackToHome} />
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentApp;

