// Data for Application 2: Licenses Section
// Extracted from slides 19-25

export const licensesData = {
  main: {
    title: "التراخيص والتصاريح",
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        content: (
          <div className="space-y-6">
            <section>
              <h3 className="text-2xl font-bold mb-4 text-mwan-green">ما هو الهدف الأساسي للنظام؟</h3>
              <p className="text-lg leading-relaxed">
                يهدف النظام الإلكتروني الخاص بمنظومة التراخيص والتصاريح إلى استلام طلبات
                التراخيص بصورة إلكترونية وإتاحة إمكانية متابعة حالة الطلب من قبل مقدّم الطلب
                دون الحاجة إلى زيارة المركز.
              </p>
            </section>
          </div>
        )
      },
      {
        id: 'definitions',
        title: 'التعريفات',
        content: (
          <div className="space-y-6">
            <div className="card bg-mwan-light/10">
              <h4 className="text-xl font-bold mb-3 text-mwan-green">التصريح:</h4>
              <p className="text-lg leading-relaxed text-white">
                موافقة من المركز تحصل عليها الجهات قبل مزاولة أي نشاط يتعلق
                بإدارة النفايات حسب ضوابط المركز واشتراطاته، قبل حصولها على التراخيص التي تصدرها
                الجهات المختصة وفق أنظمتها.
              </p>
            </div>

            <div className="card bg-mwan-light/10">
              <h4 className="text-xl font-bold mb-3 text-mwan-green">الرخصة:</h4>
              <p className="text-lg leading-relaxed text-white">
                إذن مكتوب يصدره المركز للقيام بأي نشاط يتعلق بإدارة النفايات.
                لما يحدده النظام واللائحة وذلك وفقاً.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 'benefits',
        title: 'فوائد الترخيص',
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-mwan-green">أهمية الحصول على التراخيص والتصاريح</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">الامتثال للأنظمة</h4>
                    <p className="text-base leading-relaxed">
                      ضمان الامتثال الكامل للأنظمة واللوائح الوطنية في مجال إدارة النفايات
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏢</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">حماية المنشآت</h4>
                    <p className="text-base leading-relaxed">
                      الحفاظ على حقوق المنشآت، وضمان استمرارية نشاطها، وتجنب الغرامات المفروضة على الجهات المرخصة
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📋</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">التسجيل الرسمي</h4>
                    <p className="text-base leading-relaxed">
                      المنشآت الحاصلة على التراخيص والتصاريح المطلوبة تُدرج بياناتها ضمن الجهات المرخصة والمصرحة على الموقع
                      الإلكتروني للمركز
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'types',
        title: 'أنواع التراخيص',
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-mwan-green">تصنيفات التراخيص</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-mwan-green/20 border-2 border-mwan-green">
                <h4 className="font-bold text-xl mb-4">ترخيص النقل</h4>
                <ul className="space-y-2 text-base">
                  <li>• نقل النفايات البلدية</li>
                  <li>• نقل النفايات الخطرة</li>
                  <li>• نقل نفايات البناء والهدم</li>
                  <li>• نقل النفايات الصناعية</li>
                </ul>
              </div>

              <div className="card bg-mwan-green/20 border-2 border-mwan-green">
                <h4 className="font-bold text-xl mb-4">ترخيص المعالجة</h4>
                <ul className="space-y-2 text-base">
                  <li>• معالجة النفايات البلدية</li>
                  <li>• معالجة النفايات الخطرة</li>
                  <li>• إعادة التدوير</li>
                  <li>• التخلص النهائي</li>
                </ul>
              </div>

              <div className="card bg-mwan-green/20 border-2 border-mwan-green">
                <h4 className="font-bold text-xl mb-4">ترخيص الجمع</h4>
                <ul className="space-y-2 text-base">
                  <li>• جمع النفايات البلدية</li>
                  <li>• جمع النفايات التجارية</li>
                  <li>• جمع النفايات الصناعية</li>
                </ul>
              </div>

              <div className="card bg-mwan-green/20 border-2 border-mwan-green">
                <h4 className="font-bold text-xl mb-4">ترخيص المرافق</h4>
                <ul className="space-y-2 text-base">
                  <li>• مرافق الفرز</li>
                  <li>• مرافق التسميد</li>
                  <li>• مرافق استرداد الطاقة</li>
                  <li>• المرادم الصحية</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'process',
        title: 'خطوات الحصول على الترخيص',
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-mwan-green">مراحل الترخيص</h3>
            
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "التسجيل في النظام",
                  desc: "إنشاء حساب على المنصة الإلكترونية للمركز"
                },
                {
                  step: 2,
                  title: "تقديم الطلب",
                  desc: "تعبئة نموذج الطلب وإرفاق المستندات المطلوبة"
                },
                {
                  step: 3,
                  title: "المراجعة والتقييم",
                  desc: "مراجعة الطلب من قبل الفريق المختص"
                },
                {
                  step: 4,
                  title: "التفتيش الميداني",
                  desc: "زيارة ميدانية للتحقق من الاستعداد"
                },
                {
                  step: 5,
                  title: "إصدار الترخيص",
                  desc: "الحصول على الترخيص الإلكتروني"
                },
                {
                  step: 6,
                  title: "المتابعة والتجديد",
                  desc: "متابعة دورية وتجديد الترخيص عند الانتهاء"
                }
              ].map((item) => (
                <div key={item.step} className="card flex items-center gap-6 hover:bg-white/20 transition-all">
                  <div className="bg-mwan-green text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  }
};

