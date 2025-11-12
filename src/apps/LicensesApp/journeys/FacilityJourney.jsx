import React, { useState } from 'react';
import { facilityJourney } from '../../../data/emanifestData.js';
import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';

const FacilityJourney = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const journey = facilityJourney;
  const step = journey.steps[currentStep];

  const handleNext = () => {
    if (currentStep < journey.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (fieldLabel, value) => {
    setFormData({ ...formData, [fieldLabel]: value });
  };

  const handleReset = () => {
    setCurrentStep(0);
    setFormData({});
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <BackButton onClick={onBack} label="العودة لاختيار الدور" />
        <button
          onClick={handleReset}
          className="btn-back bg-orange-700 hover:bg-orange-600"
        >
          🔄 إعادة البدء
        </button>
      </div>

      {/* Role Header */}
      <div className="card bg-gradient-to-l from-purple-600/30 to-purple-900/30 border-purple-500 mb-8">
        <div className="flex items-center gap-6">
          <div className="text-6xl">🏢</div>
          <div>
            <h2 className="text-3xl font-bold text-white">{journey.role}</h2>
            <p className="text-lg text-gray-300">{journey.description}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-semibold">
            الخطوة {currentStep + 1} من {journey.steps.length}
          </span>
          <span className="text-gray-400">
            {Math.round(((currentStep + 1) / journey.steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-purple-600 h-full transition-all duration-500 rounded-full"
            style={{ width: `${((currentStep + 1) / journey.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="card bg-white/5 border-purple-500/50 min-h-[500px]">
        <div className="border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl">
              {step.number}
            </div>
            <h3 className="text-3xl font-bold text-white">{step.title}</h3>
          </div>
          <p className="text-xl text-purple-400 font-semibold mb-3">
            {step.interactiveText}
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            {step.description}
          </p>
        </div>

        <div className="space-y-6">
          {step.fields && step.fields.length > 0 && (
            <div className="space-y-4">
              {step.fields.map((field, index) => (
                <div key={index} className="space-y-2">
                  <label className="block text-white font-semibold text-lg">
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                      onChange={(e) => handleInputChange(field.label, e.target.value)}
                      value={formData[field.label] || ''}
                    >
                      <option value="">اختر...</option>
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option} className="bg-mwan-dark">
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'file' ? (
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-purple-500 transition-colors">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-white">اضغط لرفع الصورة</p>
                      <input
                        type="file"
                        accept={field.accept}
                        className="hidden"
                      />
                    </div>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      rows="3"
                      placeholder={field.placeholder}
                      onChange={(e) => handleInputChange(field.label, e.target.value)}
                      value={formData[field.label] || ''}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder={field.placeholder}
                      onChange={(e) => handleInputChange(field.label, e.target.value)}
                      value={formData[field.label] || ''}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {step.listView && (
            <div className="card bg-purple-600/10 border-purple-500">
              <h4 className="text-xl font-bold text-white mb-4">الوثائق الواردة</h4>
              <div className="space-y-3">
                {[
                  { id: '#1234', status: 'قيد النقل', color: 'yellow' },
                  { id: '#1235', status: 'بانتظار القبول', color: 'blue' },
                  { id: '#1236', status: 'في الطريق', color: 'green' }
                ].map((doc, index) => (
                  <div key={index} className="px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex justify-between items-center">
                    <div>
                      <span className="text-white font-semibold">وثيقة نقل {doc.id}</span>
                      <p className="text-sm text-gray-400">منتج: شركة البناء الحديث</p>
                    </div>
                    <span className={`text-${doc.color}-400 text-sm px-3 py-1 bg-${doc.color}-600/20 rounded-full`}>
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step.certificate && (
            <div className="card bg-green-600/20 border-green-500">
              <div className="text-center py-8">
                <div className="text-7xl mb-4">📜</div>
                <p className="text-2xl text-green-400 font-bold mb-4">شهادة المعالجة النهائية</p>
                <div className="bg-white/10 rounded-xl p-6 max-w-md mx-auto text-right">
                  <p className="text-white mb-2"><strong>رقم الوثيقة:</strong> #1234</p>
                  <p className="text-white mb-2"><strong>المنتج:</strong> شركة البناء الحديث</p>
                  <p className="text-white mb-2"><strong>الكمية:</strong> 15 طن</p>
                  <p className="text-white mb-2"><strong>نوع المعالجة:</strong> إعادة تدوير</p>
                  <p className="text-white mb-4"><strong>التاريخ:</strong> 2024/01/15</p>
                  <button className="btn-primary w-full py-2 text-sm">
                    تحميل الشهادة PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          {step.reportsView && (
            <div className="card bg-purple-600/10 border-purple-500">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-xl text-white font-semibold mb-4">الأرشيف والتقارير الدورية</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-3xl font-bold text-purple-400">142</p>
                    <p className="text-sm text-gray-300 mt-1">وثيقة مكتملة</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-3xl font-bold text-purple-400">2,450</p>
                    <p className="text-sm text-gray-300 mt-1">طن تم استقباله</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-3xl font-bold text-purple-400">87%</p>
                    <p className="text-sm text-gray-300 mt-1">نسبة الاسترداد</p>
                  </div>
                </div>
                <button className="btn-secondary mt-6">
                  تصدير التقرير الشهري
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="secondary"
          className={currentStep === 0 ? 'invisible' : ''}
        >
          ← السابق
        </Button>

        <div className="flex gap-3">
          {journey.steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentStep
                  ? 'bg-purple-600 w-8'
                  : index < currentStep
                  ? 'bg-purple-600/50'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {currentStep < journey.steps.length - 1 ? (
          <Button onClick={handleNext} variant="primary" className="bg-purple-600 hover:bg-purple-700">
            {step.action || 'التالي'} →
          </Button>
        ) : (
          <Button onClick={handleReset} variant="primary" className="bg-purple-600 hover:bg-purple-700">
            ✓ إنهاء وإعادة البدء
          </Button>
        )}
      </div>
    </div>
  );
};

export default FacilityJourney;

