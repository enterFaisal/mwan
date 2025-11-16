import React, { useState, useEffect, useRef } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }

    // Extract prefix (like "~") and numeric value (including decimals)
    const match = value.match(/^([^\d]*)([\d.]+)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(match[2]);
    const isDecimal = targetNumber % 1 !== 0;
    
    // Reset to 0 and start animation immediately
    setDisplayValue(0);

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    animationRef.current = setInterval(() => {
      currentStep++;
      let nextValue = increment * currentStep;
      
      // For integer targets, use floor during animation for smoother effect
      // For decimal targets, keep the decimal precision
      if (!isDecimal) {
        nextValue = Math.floor(nextValue);
      }
      
      nextValue = Math.min(nextValue, targetNumber);
      setDisplayValue(nextValue);

      if (nextValue >= targetNumber) {
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
        setDisplayValue(targetNumber);
      }
    }, stepDuration);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [value]);

  // Extract prefix and format the display
  const match = value.match(/^([^\d]*)([\d.]+)$/);
  if (!match) {
    return <span>{value}</span>;
  }

  const prefix = match[1] || '';
  // Format number with proper decimal handling
  // Check if original value had decimals
  const originalHasDecimal = value.includes('.');
  const formattedValue = originalHasDecimal 
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();
  
  return <span>{prefix}{formattedValue}</span>;
};

const MoktasabatContent = () => {
  return (
    <div className="space-y-8">
      {/* <section>
        <h3 className="text-2xl font-bold mb-4 text-mwan-green">الإنجازات الرئيسية</h3>
        <p className="text-lg leading-relaxed mb-6">
          حققت المملكة العربية السعودية تقدماً ملموساً في تنفيذ الاستراتيجية الوطنية
          لإدارة النفايات، مع تحقيق العديد من المستهدفات الطموحة.
        </p>
      </section> */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-mwan-green/20 border-mwan-green">
            <div className="text-5xl font-bold mb-2 text-mwan-green">
              <AnimatedCounter value="~1.2" />
            </div>
            <p className="text-lg font-semibold">مليار طن</p>
            <p className="text-sm mt-2">من النفايات المعالجة</p>
          </div>

          <div className="card bg-mwan-green/20 border-mwan-green">
            <div className="text-5xl font-bold mb-2 text-mwan-green">
              <AnimatedCounter value="~76" />
            </div>
            <p className="text-lg font-semibold">ألف وظيفة</p>
            <p className="text-sm mt-2">ساهم في توليدها</p>
          </div>

          <div className="card bg-mwan-green/20 border-mwan-green">
            <div className="text-5xl font-bold mb-2 text-mwan-green">
              <AnimatedCounter value="~650" />
            </div>
            <p className="text-lg font-semibold">مليار ر.س</p>
            <p className="text-sm mt-2">المساهمة في الناتج المحلي الإجمالي</p>
          </div>

          <div className="card bg-mwan-green/20 border-mwan-green">
            <div className="text-5xl font-bold mb-2 text-mwan-green">
              <AnimatedCounter value="~848" />
            </div>
            <p className="text-lg font-semibold">مرافق رئيسية</p>
            <p className="text-sm mt-2">لمعالجة النفايات</p>
          </div>

          <div className="card bg-mwan-green/20 border-mwan-green">
            <div className="text-5xl font-bold mb-2 text-mwan-green">
              <AnimatedCounter value="~37" />
            </div>
            <p className="text-lg font-semibold">مليون طن متري</p>
            <p className="text-sm mt-2">مساهمة قطاع إدارة النفايات في تجنب انبعاثات مكافئ ثاني أكسيد الكربون</p>
          </div>

          <div className="card bg-mwan-green/20 border-mwan-green">
            <div className="text-5xl font-bold mb-2 text-mwan-green">
              <AnimatedCounter value="~420" />
            </div>
            <p className="text-lg font-semibold">مليار ر.س</p>
            <p className="text-sm mt-2">قيمة فرص القطاع الخاص</p>
            <p className="text-xs mt-1">(CAPEX + OPEX)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoktasabatContent;

