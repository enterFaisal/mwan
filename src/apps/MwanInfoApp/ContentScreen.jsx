import React from 'react';
import { mwanInfoData } from '../../data/mwanInfoData.jsx';
import BackButton from '../../components/BackButton';

const ContentScreen = ({ screenId, onBack }) => {
  const content = mwanInfoData[screenId];

  if (!content) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-white">المحتوى غير متوفر</p>
        <BackButton onClick={onBack} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Header with Back Button */}
      <div className="mb-8">
        <BackButton onClick={onBack} />
      </div>

      {/* Content Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-mwan-green/20 overflow-hidden">
        {/* Title Section */}
        <div className="bg-gradient-to-r from-mwan-green to-emerald-600 px-10 py-8">
          <h2 className="text-4xl font-bold text-white">{content.title}</h2>
        </div>

        {/* Content Section */}
        <div className="p-10 text-white">
          {content.content}
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

