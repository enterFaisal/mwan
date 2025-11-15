import React from 'react';
import BackButton from '../../components/BackButton';
import QRCodeDisplay from './components/QRCodeDisplay';

const PdfViewer = ({ title, pdfUrl, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in h-full">
      {/* Header with Back Button */}
      <div className="mb-6">
        <BackButton onClick={onBack} />
      </div>

      {/* PDF Viewer Card */}
      <div className="brand-panel rounded-3xl border overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        {/* Title Section */}
        <div className="bg-gradient-to-r from-mwan-green to-emerald-600 px-8 py-6">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>

        {/* PDF Embed Section */}
        <div className="h-full bg-white" style={{ height: 'calc(100% - 80px)' }}>
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full"
            title={title}
            style={{ border: 'none' }}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-6 flex justify-center">
        <BackButton onClick={onBack} label="العودة" />
      </div>
      <QRCodeDisplay url={pdfUrl} />
    </div>
  );
};

export default PdfViewer;

