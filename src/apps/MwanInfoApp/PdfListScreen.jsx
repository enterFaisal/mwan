import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import PdfViewer from './PdfViewer';

const PdfListScreen = ({ title, description, pdfs, onBack }) => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  if (selectedPdf) {
    return (
      <PdfViewer
        title={selectedPdf.title}
        pdfUrl={selectedPdf.url}
        onBack={() => setSelectedPdf(null)}
      />
    );
  }

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
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          {description && (
            <p className="text-white/90 text-lg">{description}</p>
          )}
        </div>

        {/* PDF List Section */}
        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfs.map((pdf, index) => (
              <button
                key={index}
                onClick={() => setSelectedPdf(pdf)}
                className="brand-block p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-right group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform flex justify-center">
                    <img src="../assets/icons/Document.png" alt="" className="h-12 w-auto object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mwan-light-green transition-colors">
                      {pdf.title}
                    </h3>
                    {pdf.description && (
                      <p className="text-sm text-gray-300">
                        {pdf.description}
                      </p>
                    )}
                  </div>
                  <div className="text-mwan-light-green text-2xl flex-shrink-0 group-hover:translate-x-[-4px] transition-transform">
                    ←
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-center">
        <BackButton onClick={onBack} label="العودة للقائمة الرئيسية" />
      </div>
    </div>
  );
};

export default PdfListScreen;

