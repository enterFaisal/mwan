import React, { useState } from 'react';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import HomeScreen from './HomeScreen';
import ContentScreen from './ContentScreen';
import PdfViewer from './PdfViewer';
import PdfListScreen from './PdfListScreen';
import BrandBackdrop from '../../components/BrandBackdrop';

const MwanInfoApp = ({ onBack }) => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [pdfViewData, setPdfViewData] = useState(null);

  const handleScreenChange = (screenId) => {
    setActiveScreen(screenId);
    setPdfViewData(null);
  };

  const handleBackToHome = () => {
    setActiveScreen('home');
    setPdfViewData(null);
  };

  const handlePdfView = (data) => {
    setPdfViewData(data);
  };

  const handleBackFromPdf = () => {
    setPdfViewData(null);
  };

  return (
    <div className="min-h-screen relative bg-mwan-dark">
      <BrandBackdrop />
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-6 pt-32 pb-8">
        {/* Content Area */}
        <div className="animate-fade-in">
          {pdfViewData ? (
            pdfViewData.type === 'single' ? (
              <PdfViewer
                title={pdfViewData.title}
                pdfUrl={pdfViewData.url}
                onBack={handleBackFromPdf}
              />
            ) : (
              <PdfListScreen
                title={pdfViewData.title}
                description={pdfViewData.description}
                pdfs={pdfViewData.pdfs}
                onBack={handleBackFromPdf}
              />
            )
          ) : activeScreen === 'home' ? (
            <HomeScreen onNavigate={handleScreenChange} />
          ) : (
            <ContentScreen 
              screenId={activeScreen} 
              onBack={handleBackToHome}
              onPdfView={handlePdfView}
            />
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MwanInfoApp;

