// Data for Application 2: Licenses Section
// Extracted from slides 19-25

const licenseItems = [
  "إستيراد نفايات غير خطرة",
  "إستيراد نفايات خطرة",
  "التخلص النهائي من النفايات البلدية الصلبة",
  "التخلص النهائي من النفايات الخطرة",
  "تصدير نفايات غير خطرة",
  "تصدير نفايات خطرة",
  "تخزين نفايات خطرة",
  "الفرز والتجهيز للنفايات القابلة للتدوير",
  "جمع ونقل النفايات غير الخطرة",
  "جمع ونقل النفايات الخطرة",
  "تقنيات إدارة النفايات",
  "معالجة النفايات الخطرة",
  "عبور نفايات",
];

export const licensesData = {
  main: {
    title: "التراخيص والتصاريح",
    sections: [
      {
        id: 'overview',
        title: 'التعريف بنظام التصاريح والتراخيص',
        content: (
          <div className="space-y-10">
            <section className="text-center">
              <div className="card bg-gradient-to-br from-mwan-green/10 to-emerald-600/10 border-2 border-mwan-green/30 p-8">
                <p className="text-2xl leading-relaxed mb-0 text-white">
                  يقدم النظام الإلكتروني الخاص بمنظومة التراخيص والتصاريح خدمات شاملة لإدارة
                  النفايات (للأشخاص، المنشآت...)إلى أخره وذلك من خلال تقديم طلباتهم عبر المنصة
                  وإنتظار الموافقة عليها!
                </p>
              </div>
            </section>

            <section className="text-center">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
                ما هو الهدف الأساسي للنظام؟
              </h3>
              <div className="card bg-white/5 p-8">
                <p className="text-xl leading-relaxed text-white">
                  يهدف النظام الإلكتروني الخاص بمنظومة التراخيص والتصاريح إلى استلام طلبات
                  التراخيص بصورة إلكترونية وإتاحة إمكانية متابعة حالة الطلب من قبل مقدّم الطلب
                  دون الحاجة إلى زيارة المركز.
                </p>
              </div>
            </section>
          </div>
        )
      },
      {
        id: 'difference',
        title: 'الفرق بين الترخيص والتصريح',
        content: (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* الرخصة */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-mwan-green/30 to-emerald-600/30 p-8 rounded-2xl border-2 border-mwan-green shadow-xl">
                  <h3 className="text-3xl font-bold mb-6 text-white text-center">الرخصة:</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <p className="text-lg leading-relaxed text-white text-center">
                      إذن مكتوب يصدره المركز للقيام بأي نشاط
                      يتعلق بإدارة النفايات، لما يحدده النظام
                      واللائحة وذلك وفقًا.
                    </p>
                  </div>
                </div>
              </div>

              {/* التصريح */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-mwan-green/30 to-emerald-600/30 p-8 rounded-2xl border-2 border-mwan-green shadow-xl">
                  <h3 className="text-3xl font-bold mb-6 text-white text-center">التصريح:</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <p className="text-lg leading-relaxed text-white text-center">
                      وثيقة يمنحها المركز لمنشآت تدوير النفايات تفيد بتحديدها
                      ضوابط المركز واشتراطاته، قبل حصولها على التراخيص التي تصدرها
                      الجهات المختصة وفق أنظمتها.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'benefits',
        title: 'مكتسبات حصول المنشآت على الرخص والتصاريح',
        content: (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
              مكتسبات حصول المنشآت على الرخص والتصاريح
            </h3>
            
            <div className="space-y-4">
              <div className="card bg-gradient-to-r from-white/5 to-white/10 hover:from-mwan-green/20 hover:to-emerald-600/20 border border-mwan-green/30 hover:border-mwan-green transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-mwan-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <p className="text-lg leading-relaxed text-white">
                    الإلتزام بالحصول على التراخيص والتصاريح المطلوبة، يحقق من دخول المنافسة على المشاريع الحكومية المتاحة
                    والاستثمارات الجديدة.
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-white/5 to-white/10 hover:from-mwan-green/20 hover:to-emerald-600/20 border border-mwan-green/30 hover:border-mwan-green transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-mwan-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <p className="text-lg leading-relaxed text-white">
                    بداية الاستثمار في قطاع إدارة النفايات، من خلال تنظيم القطاع واستبعاد الجهات غير المرخصة والعشوائية.
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-white/5 to-white/10 hover:from-mwan-green/20 hover:to-emerald-600/20 border border-mwan-green/30 hover:border-mwan-green transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-mwan-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <p className="text-lg leading-relaxed text-white">
                    المنشآت الحاصلة على التراخيص والتصاريح المطلوبة تدرج بياناتها ضمن الجهات المرخصة والمصرحة على الموقع
                    الإلكتروني للمركز.
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-white/5 to-white/10 hover:from-mwan-green/20 hover:to-emerald-600/20 border border-mwan-green/30 hover:border-mwan-green transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-mwan-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <p className="text-lg leading-relaxed text-white">
                    الحفاظ على حقوق المنشآت، وضمان استمرارية نشاطها، وتجنب الغرامات المفروضة على الجهات المرخصة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'types',
        title: 'أنواع التراخيص والتصاريح التي تصدرها موان',
        content: (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
              أنواع التراخيص والتصاريح التي تصدرها موان
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* التراخيص */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-mwan-green/20 to-emerald-600/20 p-8 rounded-3xl border-2 border-mwan-green shadow-2xl hover:shadow-mwan-green/50 transition-all">
                  <h4 className="text-3xl font-bold mb-6 text-center text-white bg-mwan-green/30 py-3 rounded-xl">التراخيص</h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {licenseItems.map((item) => (
                      <div
                        key={item}
                        className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-white hover:bg-white/25 transition-all border border-mwan-green/20"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* التصاريح */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-mwan-green/20 to-emerald-600/20 p-8 rounded-3xl border-2 border-mwan-green shadow-2xl hover:shadow-mwan-green/50 transition-all">
                  <h4 className="text-3xl font-bold mb-6 text-center text-white bg-mwan-green/30 py-3 rounded-xl">التصاريح</h4>
                  <div className="flex items-center justify-center h-full min-h-[300px]">
                    <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-mwan-green/40 hover:border-mwan-green transition-all">
                      <p className="text-2xl font-bold text-white">إنشاء منشآت إعادة التدوير</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'process',
        title: 'كل ما يسهل مسار الرخص والتصريح',
        content: (
          <div className="space-y-10">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
              كل ما يسهل مسار الرخص والتصريح
            </h3>
            
            {/* Video Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-mwan-green/10 to-emerald-600/10 border-2 border-mwan-green/30 rounded-3xl p-6 shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">دليل التسجيل</h4>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/oh_ab2qTWSU"
                    title="دليل التسجيل"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>

            {/* QR Codes Section */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Licensed Companies QR Code */}
                <div className="bg-gradient-to-br from-mwan-green/10 to-emerald-600/10 border-2 border-mwan-green/30 rounded-3xl p-8 shadow-2xl text-center">
                  <h4 className="text-2xl font-bold text-white mb-6">رابط الجهات المرخصة</h4>
                  <div className="bg-white p-6 rounded-2xl inline-block shadow-xl">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://mwan.gov.sa/licened_companies&color=000000&bgcolor=FFFFFF" 
                      alt="QR Code - الجهات المرخصة" 
                      className="w-64 h-64"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-white text-lg mt-6 font-semibold">امسح الرمز للاطلاع على الجهات المرخصة</p>
                  <a 
                    href="https://mwan.gov.sa/licened_companies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-mwan-green hover:text-emerald-400 transition-colors underline text-lg"
                  >
                    أو اضغط هنا للزيارة
                  </a>
                </div>

                {/* Permitted Companies QR Code */}
                <div className="bg-gradient-to-br from-mwan-green/10 to-emerald-600/10 border-2 border-mwan-green/30 rounded-3xl p-8 shadow-2xl text-center">
                  <h4 className="text-2xl font-bold text-white mb-6">رابط الجهات المصرحة</h4>
                  <div className="bg-white p-6 rounded-2xl inline-block shadow-xl">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://mwan.gov.sa/permited_companies&color=000000&bgcolor=FFFFFF" 
                      alt="QR Code - الجهات المصرحة" 
                      className="w-64 h-64"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-white text-lg mt-6 font-semibold">امسح الرمز للاطلاع على الجهات المصرحة</p>
                  <a 
                    href="https://mwan.gov.sa/permited_companies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-mwan-green hover:text-emerald-400 transition-colors underline text-lg"
                  >
                    أو اضغط هنا للزيارة
                  </a>
                </div>
              </div>
            </section>
          </div>
        )
      }
    ]
  }
};

