// Data for Application 1: Discover MWAN
// Extracted from slides 4-14

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
            <div className="card">
              <h4 className="font-bold text-xl mb-3">نظام إدارة النفايات</h4>
              <p className="text-base leading-relaxed">
                النظام الأساسي الذي يحدد الإطار العام لإدارة النفايات في المملكة، بما في ذلك
                الأدوار والمسؤوليات والآليات التنظيمية.
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-3">اللائحة التنفيذية</h4>
              <p className="text-base leading-relaxed">
                تفصيل الإجراءات والمتطلبات التنفيذية لنظام إدارة النفايات، بما في ذلك
                معايير الترخيص والتشغيل والرقابة.
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-3">المعايير الفنية</h4>
              <p className="text-base leading-relaxed">
                مجموعة من المعايير والمواصفات الفنية لمختلف أنشطة إدارة النفايات،
                بما في ذلك الجمع والنقل والمعالجة والتخلص.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  },

  udeem: {
    title: "برنامج يديم",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-mwan-green">نبذة عن برنامج يديم</h3>
          <p className="text-lg leading-relaxed mb-6">
            برنامج يديم هو مبادرة وطنية تهدف إلى تعزيز الاستدامة في إدارة النفايات
            من خلال تطوير البنية التحتية وتحفيز الاستثمار وبناء القدرات الوطنية.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 text-mwan-green">أهداف البرنامج</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-bold text-xl mb-3">🎯 تحقيق الأهداف الوطنية</h4>
              <p className="text-base">
                دعم تحقيق مستهدفات رؤية 2030 في إدارة النفايات والاستدامة البيئية
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-3">🏗️ تطوير البنية التحتية</h4>
              <p className="text-base">
                إنشاء وتطوير المرافق والمنشآت اللازمة لمعالجة النفايات بكفاءة
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-3">💼 تعزيز الاستثمار</h4>
              <p className="text-base">
                خلق فرص استثمارية جاذبة في قطاع إدارة النفايات
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-3">👥 بناء القدرات</h4>
              <p className="text-base">
                تطوير الكفاءات الوطنية وتوفير فرص العمل في القطاع
              </p>
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
              <div className="text-5xl font-bold mb-2 text-mwan-green">420</div>
              <p className="text-lg font-semibold">مليار ريال سعودي</p>
              <p className="text-sm mt-2">قيمة فرص القطاع الخاص</p>
              <p className="text-xs mt-1">(CAPEX + OPEX)</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">85%</div>
              <p className="text-lg font-semibold">معدل التحويل</p>
              <p className="text-sm mt-2">من المرادم</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">95%</div>
              <p className="text-lg font-semibold">نسبة الاستبعاد</p>
              <p className="text-sm mt-2">عن المرادم</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-bold mb-6 text-mwan-green">القطاعات المستهدفة</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "النفايات البلدية",
              "نفايات البناء والهدم",
              "النفايات الصناعية",
              "النفايات الطبية",
              "النفايات الزراعية",
              "النفايات الخطرة"
            ].map((sector, idx) => (
              <div key={idx} className="btn-secondary py-3">
                {sector}
              </div>
            ))}
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
              <p className="text-lg" dir="ltr">920000000</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                العنوان
              </h4>
              <p className="text-lg">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="card bg-mwan-green/10">
            <h4 className="font-bold text-2xl mb-4">منصات التواصل الاجتماعي</h4>
            <div className="flex gap-6 justify-center mt-6">
              <div className="text-5xl hover:scale-110 transition-transform cursor-pointer">🐦</div>
              <div className="text-5xl hover:scale-110 transition-transform cursor-pointer">📘</div>
              <div className="text-5xl hover:scale-110 transition-transform cursor-pointer">📷</div>
              <div className="text-5xl hover:scale-110 transition-transform cursor-pointer">▶️</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

