// Data for Application 1: Discover MWAN
// Extracted from slides 4-14

const socials = [
  {
    name: 'X',
    href: 'https://x.com/ncwmsa',
    // Use high-quality brand icon from CDN
    iconUrl: 'https://cdn.simpleicons.org/x/FFFFFF',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC0Fl3my86TrSTqOgsjRsTmA',
    iconPath: 'M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.26 5 12 5 12 5s-6.26 0-7.82.44c-.86.23-1.52.9-1.76 1.75C2 8.05 2 12 2 12s0 3.95.42 4.81c.23.86.9 1.52 1.76 1.75C5.74 19 12 19 12 19s6.26 0 7.82-.44c.86-.23 1.52-.9 1.76-1.75C22 15.95 22 12 22 12s0-3.95-.42-4.81zM9.54 15.58V8.42L15.82 12l-6.28 3.58z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mwansa/',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
];

export const mwanInfoData = {
  dorMwan: {
    title: "دور موان ومهامه",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-mwan-green">نبذة عن موان</h3>
          <p className="text-lg leading-relaxed mb-6">
            تم تأسيس المركز الوطني لإدارة النفايات بموجب قرار مجلس الوزراء رقم 457 بتاريخ 1440/8/11هـ،
            بهدف تنظيم أنشطة إدارة النفايات والإشراف عليها، وتحفيز الاستثمار فيها، والارتقاء بها إلى
            على مبدأ الاقتصاد الدائري في إدارة النفايات لتحقيق أهداف التنمية المستدامة.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 text-mwan-green">مهام المركز</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">♻️</div>
              <h4 className="font-bold text-xl mb-2">التخطيط والتطوير</h4>
              <p className="text-sm">تطوير وتنفيذ الخطط والاستراتيجيات الوطنية لإدارة النفايات</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="font-bold text-xl mb-2">التنظيم والحوكمة</h4>
              <p className="text-sm">وضع الأنظمة واللوائح والمعايير لإدارة النفايات</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-bold text-xl mb-2">الاستدامة المالية وتحفيز الاستثمار</h4>
              <p className="text-sm">تطوير نماذج التمويل المستدامة وجذب الاستثمارات</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="font-bold text-xl mb-2">التوعية وبناء القدرات</h4>
              <p className="text-sm">رفع مستوى الوعي وبناء القدرات الوطنية</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">💹</div>
              <h4 className="font-bold text-xl mb-2">الترخيص والرقابة للعمر الأفضل</h4>
              <p className="text-sm">إصدار التراخيص ومراقبة الامتثال للمعايير</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="font-bold text-xl mb-2">التحول الرقمي والدعم الصناعي</h4>
              <p className="text-sm">تطوير الحلول الرقمية ودعم الابتكار</p>
            </div>
          </div>
        </section>
      </div>
    )
  },

  anzema: {
    title: "الأنظمة والتشريعات",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-mwan-green">الإطار التنظيمي</h3>
          <p className="text-lg leading-relaxed mb-6">
            يعمل المركز الوطني لإدارة النفايات على تطوير وتنفيذ الأنظمة والتشريعات اللازمة لضمان
            إدارة فعالة ومستدامة للنفايات في المملكة العربية السعودية.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 text-mwan-green">الأنظمة الرئيسية</h3>
          <div className="space-y-4">
            <a 
              href="https://drive.google.com/file/d/1CnBBEkFJdK_BrFQefKrgJYVcctHmQgJd/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card hover:bg-white/20 transition-all cursor-pointer block"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                نظام إدارة النفايات
                <span className="text-sm text-mwan-green">📄 عرض PDF</span>
              </h4>
              <p className="text-base leading-relaxed">
                النظام الأساسي الذي يحدد الإطار العام لإدارة النفايات في المملكة، بما في ذلك
                الأدوار والمسؤوليات والآليات التنظيمية.
              </p>
            </a>

            <a 
              href="https://drive.google.com/file/d/1KaIw7ieouDRkUsqBteO1RU-jSet-xJ5k/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card hover:bg-white/20 transition-all cursor-pointer block"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                اللائحة التنفيذية لنظام إدارة النفايات
                <span className="text-sm text-mwan-green">📄 عرض PDF</span>
              </h4>
              <p className="text-base leading-relaxed">
                تفصيل الإجراءات والمتطلبات التنفيذية لنظام إدارة النفايات، بما في ذلك
                معايير الترخيص والتشغيل والرقابة.
              </p>
            </a>

            <a 
              href="https://drive.google.com/drive/folders/1WmkWAltGeK89VALemajr4mYDweaWRu4H" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card hover:bg-white/20 transition-all cursor-pointer block"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                جدول تصنيف المخالفات لنظام إدارة النفايات
                <span className="text-sm text-mwan-green">📁 فتح المجلد</span>
              </h4>
              <p className="text-base leading-relaxed">
                جدول شامل يحدد تصنيف المخالفات المتعلقة بنظام إدارة النفايات والعقوبات المقررة لها.
              </p>
            </a>

            <a 
              href="https://drive.google.com/drive/folders/1jN30NmvlX71rPfnR-dODIDuDzEpCYa3G" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card hover:bg-white/20 transition-all cursor-pointer block"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                الأدلة الفنية
                <span className="text-sm text-mwan-green">📁 فتح المجلد</span>
              </h4>
              <p className="text-base leading-relaxed">
                مجموعة من الأدلة والمواصفات الفنية لمختلف أنشطة إدارة النفايات،
                بما في ذلك الجمع والنقل والمعالجة والتخلص.
              </p>
            </a>
          </div>
        </section>
      </div>
    )
  },

  udeem: {
    title: "برنامج يديم",
    content: (
      <div className="space-y-8">
        {/* Introduction */}
        <section className="text-center">
          <p className="text-2xl leading-relaxed mb-6">
            برنامج يعنى بتنظيم وتمكين مبادرات سلوكية شتى ممارسات سليمة لدعم التحول نحو الاقتصاد الدائري ضمن
            منظومة متكاملة لدعم المبادرين بالمعرفة والابتكار وتقديم الحلول.
          </p>
        </section>

        {/* Targeted Sectors */}
        <section>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
            القطاعات المستهدفة
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Public Sector */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl border border-gray-600 hover:border-mwan-green transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🏛️</div>
                <h4 className="text-xl font-bold">القطاع العــــــام</h4>
              </div>
            </div>

            {/* Private Sector */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl border border-gray-600 hover:border-mwan-green transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🏭</div>
                <h4 className="text-xl font-bold">القطاع الخـــاص</h4>
              </div>
            </div>

            {/* Non-profit Sector */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl border border-gray-600 hover:border-mwan-green transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🤝</div>
                <h4 className="text-xl font-bold">القطاع غير الربحــــي</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Program Tracks */}
        <section>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
            مسارات البرنامج
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Track 1 - التوعية والمعرفة */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-center">💡</div>
              <h4 className="text-lg font-bold mb-3 text-center">التوعيــــة والمعرفــــة</h4>
              <p className="text-sm text-center leading-relaxed">
                نشر ثقافة الاقتصاد الدائري وبناء المعرفة بالممارسات السليمة لإدارة النفايات.
              </p>
            </div>

            {/* Track 2 - الابتكار الدائري */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h4 className="text-lg font-bold mb-3 text-center">الابتكار الدائــــري</h4>
              <p className="text-sm text-center leading-relaxed">
                تشجيع تطوير واعتماد تقنيات وأنظمة مبتكرة تقدم حلولاً مستدامة في إدارة النفايات.
              </p>
            </div>

            {/* Track 3 - التدوير والاسترداد */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-center">♻️</div>
              <h4 className="text-lg font-bold mb-3 text-center">التدويــــر والاسترداد</h4>
              <p className="text-sm text-center leading-relaxed">
                تعزيز إعادة توجيه النفايات من خلال إعادة التدوير واسترداد الموارد لإطالة دورة حياة المنتجات.
              </p>
            </div>

            {/* Track 4 - تقليل إنتاج النفايات */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-center">🌿</div>
              <h4 className="text-lg font-bold mb-3 text-center">تقليل إنتاج النفايات</h4>
              <p className="text-sm text-center leading-relaxed">
                التركيز على تبني ممارسات تحد من إنتاج النفايات من المصدر، واستهلاك الموارد غير الضروري
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section with QR Code */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-mwan-green/20 to-emerald-600/20 border border-mwan-green/30 p-8 rounded-3xl">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-4">نحو يدعوكم لتكونوا جزءًا من المبادرات التي تصنع الاستدامة البيئية.</h3>
              <p className="text-xl">ولكن بدأنا معه نحو بيئة نحو.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
              {/* QR Code */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://mwan.gov.sa/en/about/udeem" 
                  alt="QR Code - برنامج يديم" 
                  className="w-48 h-48"
                />
                <p className="text-gray-800 text-sm mt-3 text-center font-semibold">امسح الرمز لزيارة الموقع</p>
              </div>

              {/* Website Preview */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-full h-full bg-mwan-green/20 rounded-2xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-mwan-green/40 p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-mwan-green/30">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-mwan-light/60">mwan.gov.sa</div>
                    </div>
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">♻️</div>
                      <h4 className="text-2xl font-bold mb-3">مرحبًا بكم في برنامج يديم</h4>
                      <p className="text-sm text-mwan-light/80 mb-4">
                        معًا نحو مستقبل مستدام
                      </p>
                      <a 
                        href="https://mwan.gov.sa/en/about/udeem" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-mwan-green hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105"
                      >
                        زيارة الموقع الإلكتروني
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },

  moktasabat: {
    title: "مكتسبات الاستراتيجية الوطنية لإدارة النفايات بحلول 2040",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-mwan-green">الإنجازات الرئيسية</h3>
          <p className="text-lg leading-relaxed mb-6">
            حققت المملكة العربية السعودية تقدماً ملموساً في تنفيذ الاستراتيجية الوطنية
            لإدارة النفايات، مع تحقيق العديد من المستهدفات الطموحة.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~1.2</div>
              <p className="text-lg font-semibold">مليار طن</p>
              <p className="text-sm mt-2">من النفايات المعالجة</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~76</div>
              <p className="text-lg font-semibold">ألف وظيفة</p>
              <p className="text-sm mt-2">المساهمة في توليد</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~650</div>
              <p className="text-lg font-semibold">مليار ر.س</p>
              <p className="text-sm mt-2">المساهمة في الناتج المحلي الإجمالي</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~848</div>
              <p className="text-lg font-semibold">مرافق رئيسية</p>
              <p className="text-sm mt-2">لمعالجة النفايات</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~37</div>
              <p className="text-lg font-semibold">مليون طن متري</p>
              <p className="text-sm mt-2">مساهمة قطاع إدارة النفايات في تجنب انبعاثات مكافئ ثاني أكسيد الكربون</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~420</div>
              <p className="text-lg font-semibold">مليار ر.س</p>
              <p className="text-sm mt-2">قيمة فرص القطاع الخاص</p>
              <p className="text-xs mt-1">(CAPEX + OPEX)</p>
            </div>
          </div>
        </section>
      </div>
    )
  },

  contact: {
    title: "تواصل معنا",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-6 text-mwan-green">معلومات التواصل</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-3xl">📧</span>
                البريد الإلكتروني
              </h4>
              <p className="text-lg" dir="ltr">info@mwan.gov.sa</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-3xl">🌐</span>
                الموقع الإلكتروني
              </h4>
              <p className="text-lg" dir="ltr">www.mwan.gov.sa</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-3xl">📞</span>
                الهاتف
              </h4>
              <p className="text-lg" dir="ltr">920009110</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                العنوان
              </h4>
              <p className="text-lg"> 3186 طريق الأمير محمد بن سلمان بن عبدالعزيز، حي, قرطبة، الرياض 13248-6329</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="card bg-mwan-green/10 text-center">
            <h4 className="font-bold text-2xl mb-6">منصات التواصل الاجتماعي</h4>
            <div className="flex gap-8 justify-center items-center mt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-mwan-light hover:text-mwan-green transition-colors duration-300"
                >
                  {social.iconUrl ? (
                    <img
                      src={social.iconUrl}
                      alt={social.name}
                      className="w-10 h-10"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d={social.iconPath} fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
};


