import React, { useState } from 'react';
import { driverJourney } from '../../../data/emanifestData.js';
import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';

const DriverJourney = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const journey = driverJourney;
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
      <div className="card bg-gradient-to-l from-yellow-600/30 to-yellow-900/30 border-yellow-500 mb-8">
        <div className="flex items-center gap-6">
          <div className="flex justify-center">
            <img src="../assets/icons/Person_Walking.png" alt="" className="h-16 w-auto object-contain" />
          </div>
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
            className="bg-yellow-500 h-full transition-all duration-500 rounded-full"
            style={{ width: `${((currentStep + 1) / journey.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
  <div className="card border-yellow-500/50 min-h-[500px]">
        <div className="border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-500 text-mwan-dark rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl">
              {step.number}
            </div>
            <h3 className="text-3xl font-bold text-white">{step.title}</h3>
          </div>
          <p className="text-xl text-yellow-400 font-semibold mb-3">
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
                  {field.type === 'file' ? (
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-yellow-500 transition-colors">
                      <div className="mb-2 flex justify-center">
                        <img src="../assets/icons/Upload_Arrow.png" alt="" className="h-12 w-auto object-contain" />
                      </div>
                      <p className="text-white">اضغط لرفع الصورة</p>
                      <input
                        type="file"
                        accept={field.accept}
                        className="hidden"
                      />
                    </div>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      rows="3"
                      placeholder={field.placeholder}
                      onChange={(e) => handleInputChange(field.label, e.target.value)}
                      value={formData[field.label] || ''}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-500 transition-colors"
                      placeholder={field.placeholder}
                      onChange={(e) => handleInputChange(field.label, e.target.value)}
                      value={formData[field.label] || ''}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {step.notification && (
            <div className="card bg-yellow-600/20 border-yellow-500">
              <div className="flex items-center gap-4">
                <div className="flex justify-center">
                  <img src="../assets/icons/Speech_Bubble.png" alt="" className="h-12 w-auto object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">إشعار جديد!</p>
                  <p className="text-gray-300">تم استلام وثيقة نقل جديدة من الناقل</p>
                </div>
              </div>
            </div>
          )}

          {step.detailsView && (
            <div className="card bg-yellow-600/10 border-yellow-500">
              <h4 className="text-xl font-bold text-white mb-4">تفاصيل الشحنة</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">نوع النفايات</p>
                  <p className="text-white font-semibold">نفايات البناء والهدم</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">الكمية المقدرة</p>
                  <p className="text-white font-semibold">15 طن</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">موقع التحميل</p>
                  <p className="text-white font-semibold">الرياض - حي النرجس</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">موقع التفريغ</p>
                  <p className="text-white font-semibold">مرفق المعالجة - شمال الرياض</p>
                </div>
              </div>
            </div>
          )}

          {step.gpsTracking && (
            <div className="card bg-green-600/10 border-green-500">
              <div className="text-center py-12">
                <div className="mb-4 flex justify-center">
                  <img src="../assets/icons/Compass.png" alt="" className="h-16 w-auto object-contain" />
                </div>
                <p className="text-xl text-white font-semibold">التتبع النشط بنظام GPS</p>
                <p className="text-green-400 mt-2">جارٍ تسجيل المسار الفعلي للرحلة</p>
                <div className="mt-4 text-gray-300">
                  <p>السرعة: 80 كم/س | المسافة المتبقية: 12 كم</p>
                </div>
              </div>
            </div>
          )}

          {step.completed && (
            <div className="card bg-green-600/20 border-green-500">
              <div className="text-center py-8">
                <div className="text-7xl mb-4">✓</div>
                <p className="text-2xl text-green-400 font-bold">تم تسليم الشحنة بنجاح!</p>
                <p className="text-gray-300 mt-2">في انتظار تأكيد المرفق</p>
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
                  ? 'bg-yellow-500 w-8'
                  : index < currentStep
                  ? 'bg-yellow-500/50'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {currentStep < journey.steps.length - 1 ? (
          <Button onClick={handleNext} variant="primary" className="bg-yellow-600 hover:bg-yellow-700">
            {step.action || 'التالي'} →
          </Button>
        ) : (
          <Button onClick={handleReset} variant="primary" className="bg-yellow-600 hover:bg-yellow-700">
            ✓ إنهاء وإعادة البدء
          </Button>
        )}
      </div>
    </div>
  );
};

export default DriverJourney;

