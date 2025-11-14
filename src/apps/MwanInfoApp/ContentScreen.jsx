import React from 'react';
import { mwanInfoData } from '../../data/mwanInfoData.jsx';
import BackButton from '../../components/BackButton';
import mktt3Icon from '../../../mktt3.png';

const ContentScreen = ({ screenId, onBack, onPdfView }) => {
  const content = mwanInfoData[screenId];

  if (!content) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-white">المحتوى غير متوفر</p>
        <BackButton onClick={onBack} />
      </div>
    );
  }

  // Render content with PDF view handler if provided
  const renderedContent = typeof content.content === 'function' 
    ? content.content(onPdfView) 
    : content.content;

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Header with Back Button */}
      <div className="mb-8">
        <BackButton onClick={onBack} />
      </div>

      {/* Content Card */}
  <div className="brand-panel rounded-3xl border overflow-hidden">
        {/* Title Section */}
        <div className="bg-gradient-to-r from-mwan-green to-emerald-600 px-10 py-8">
          <h2 className="text-4xl font-bold text-white">{content.title}</h2>
        </div>

        {/* Content Section */}
        <div className="p-10 text-white">
          {/* Udeem Logo - only show for udeem page */}
          {screenId === 'udeem' && (
            <div className="flex justify-center mb-8">
              <img src={mktt3Icon} alt="برنامج يديم" className="w-64 h-64 object-contain" />
            </div>
          )}
          {renderedContent}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-center">
        <BackButton onClick={onBack} label="العودة للقائمة الرئيسية" />
      </div>
    </div>
  );
};

export default ContentScreen;

