// Data for E-Manifest Simulation
// Extracted from slides 27-34 (content.md lines 263-431)

export const emanifestIntro = {
  title: "وثيقة النقل الإلكترونية",
  description:
    "أداة رقابية تعمل على رصد وتتبع وجمع وتحليل البيانات الخاصة بحركة النفايات من نقطة إنتاجها وحتى مرحلة المعالجة والتخلص النهائي باستخدام التقنيات الناشئة وتقنيات الذكاء الاصطناعي",
  objectives: [
    {
      icon: "/icons/Bar_Graph.png",
      title: "رفع الكفاءة التشغيلية لأعمال الرقابة",
      description: "من خلال توظيف التقنيات الحديثة",
    },
    {
      icon: "/icons/Presentation_Board_(Line_Graph).png",
      title: "تعظيم الاستفادة من البيانات",
      description: "لدعم المستهدفات الوطنية",
    },
    {
      icon: "/icons/Shield_with_Checkmark.png",
      title: "زيادة معدل الامتثال والحد من الرمي العشوائي",
      description: "من خلال توظيف التقنيات الحديثة",
    },
    {
      icon: "/icons/Globe.png",
      title: "تحقيق تغطية شاملة لحركة النفايات",
      description: "على المستوى دون الحاجة للاستثمار في العامل البشري",
    },
    {
      icon: "/icons/Dollar_Sign.png",
      title: "تعزيز إطار الاستثمار",
      description: "من خلال ضمان وصول النفايات للمرافق الاستثمارية",
    },
  ],
  wasteTypes: [
    "النفايات البلدية الصلبة",
    "نفايات البناء والهدم",
    "النفايات الصناعية",
    "نفايات الحمأة",
    "النفايات الزراعية",
    "النفايات الخاصة",
    "نفايات الرعاية الصحية",
  ],
};

export const producerJourney = {
  role: "منتج النفايات",
  description: "المنتج يُنشئ الوثيقة",
  steps: [
    {
      number: 1,
      title: "تسجيل الدخول إلى النظام",
      interactiveText: "ابدأ رحلتك بتسجيل الدخول عبر بوابة موان الإلكترونية",
      description:
        "يدخل المستخدم إلى النظام عبر https://emanifest.mwan.gov.sa باستخدام رقم الهوية أو الإقامة وكلمة المرور المسجلة مسبقاً.",
      fields: [
        {
          label: "رقم الهوية / الإقامة",
          type: "text",
          placeholder: "أدخل رقم الهوية",
        },
        {
          label: "كلمة المرور",
          type: "password",
          placeholder: "أدخل كلمة المرور",
        },
      ],
      action: "تسجيل الدخول",
    },
    {
      number: 2,
      title: "إنشاء وثيقة نقل جديدة",
      interactiveText: "أنشئ وثيقتك الجديدة لتبدأ عملية النقل",
      description:
        'من قائمة "وثائق النقل"، يختار المستخدم "إنشاء وثيقة نقل"، ثم يضيف بيانات المشروع أو موقع توليد النفايات.',
      fields: [
        { label: "اسم المشروع", type: "text", placeholder: "أدخل اسم المشروع" },
        { label: "موقع التوليد", type: "text", placeholder: "حدد الموقع" },
        { label: "تاريخ التوليد", type: "date" },
      ],
      action: "المتابعة",
    },
    {
      number: 3,
      title: "تعبئة بيانات الوثيقة",
      interactiveText: "املأ تفاصيل النفايات، نوعها، وكميتها",
      description:
        "يدخل المنتج نوع النفايات (بناء وهدم – صناعية – خطرة)، الكمية التقديرية، ووصف النفايات، ويحدد ما إذا كانت معالجة أو تدوير.",
      fields: [
        {
          label: "نوع النفايات",
          type: "select",
          options: [
            "نفايات البناء والهدم",
            "نفايات صناعية",
            "نفايات خطرة",
            "نفايات بلدية",
          ],
        },
        {
          label: "الكمية التقديرية (طن)",
          type: "number",
          placeholder: "أدخل الكمية",
        },
        { label: "وصف النفايات", type: "textarea", placeholder: "وصف تفصيلي" },
        {
          label: "نوع المعالجة",
          type: "select",
          options: ["معالجة", "تدوير", "تخلص نهائي"],
        },
      ],
      action: "المتابعة",
    },
    {
      number: 4,
      title: "اختيار الناقل والمنشأة المستلمة",
      interactiveText: "اختر شركائك في العملية: الناقل والمنشأة المستلمة",
      description:
        "يختار المنتج شركة النقل من بين الشركات المرخصة في النظام، ويحدد منشأة الاستلام بناء على نوع النفايات وموقعها.",
      fields: [
        {
          label: "شركة النقل",
          type: "select",
          options: [
            "شركة النقل الأولى",
            "شركة النقل الثانية",
            "شركة النقل الثالثة",
          ],
        },
        {
          label: "منشأة الاستلام",
          type: "select",
          options: [
            "مرفق المعالجة الأول",
            "مرفق المعالجة الثاني",
            "مرفق إعادة التدوير",
          ],
        },
      ],
      action: "المتابعة",
    },
    {
      number: 5,
      title: "تأكيد البيانات وإرسال الوثيقة",
      interactiveText: "راجع التفاصيل وأرسل الوثيقة للموافقة",
      description:
        'بعد مراجعة جميع البيانات، يضغط على "إرسال"، ليتم إشعار الناقل والمنشأة المستلمة بوجود وثيقة جديدة بانتظار القبول.',
      summary: true,
      action: "إرسال الوثيقة",
    },
    {
      number: 6,
      title: "متابعة حالة الوثيقة",
      interactiveText: "تابع حالة وثيقتك في كل مرحلة",
      description:
        "يستطيع المنتج مشاهدة حالة النقل (بانتظار القبول – مقبولة – قيد النقل – مستلمة) من صفحة الوثائق، مع تحديث تلقائي لحالة الرحلة.",
      statusOptions: [
        "بانتظار القبول",
        "مقبولة",
        "قيد النقل",
        "مستلمة",
        "مكتملة",
      ],
      readOnly: true,
    },
    {
      number: 7,
      title: "تتبع الشحنة أثناء النقل",
      interactiveText: "راقب مسار النفايات حتى تصل إلى وجهتها",
      description:
        "يعرض النظام الموقع الحالي للشاحنة باستخدام نظام التتبع (GPS)، ويمكن للمنتج متابعة النقل لحظة بلحظة.",
      mapTracking: true,
      readOnly: true,
    },
  ],
};

export const transporterJourney = {
  role: "ناقل النفايات",
  description: "ناقل النفايات يعتمد الوثيقة ويضيف المركبة والسائق",
  steps: [
    {
      number: 1,
      title: "استعراض الطلبات",
      interactiveText: "اطلع على الطلبات الواردة من المنتجين",
      description:
        "يستعرض الناقل الطلبات الواردة من المنتجين عبر النظام الإلكتروني.",
      readOnly: true,
      listView: true,
    },
    {
      number: 2,
      title: "اختيار الوثيقة",
      interactiveText: "اختر وثيقة النقل الجاهزة للتنفيذ",
      description:
        "يختار وثيقة النقل التي تنتظر اعتماد شركته لتنفيذ عملية النقل.",
      action: "اختيار الوثيقة",
    },
    {
      number: 3,
      title: "تعيين السائق والمركبة",
      interactiveText: "حدد السائق والمركبة المكلفة بالرحلة",
      description: "يحدد المركبة والسائق المكلفين بتنفيذ الرحلة.",
      fields: [
        {
          label: "اختر المركبة",
          type: "select",
          options: ["مركبة 1 - ABC123", "مركبة 2 - DEF456", "مركبة 3 - GHI789"],
        },
        {
          label: "اختر السائق",
          type: "select",
          options: ["أحمد محمد", "خالد عبدالله", "محمد علي"],
        },
      ],
      action: "تعيين",
    },
    {
      number: 4,
      title: "تعبئة تفاصيل الشحنة",
      interactiveText: "أدخل تفاصيل الشحنة لتوثيقها في النظام",
      description:
        "يدخل تفاصيل الشحنة مثل الكمية، نوع المركبة، وتاريخ التحميل والتفريغ.",
      fields: [
        {
          label: "الكمية الفعلية (طن)",
          type: "number",
          placeholder: "أدخل الكمية",
        },
        { label: "تاريخ التحميل المتوقع", type: "datetime-local" },
        { label: "تاريخ التفريغ المتوقع", type: "datetime-local" },
        {
          label: "ملاحظات",
          type: "textarea",
          placeholder: "أي ملاحظات إضافية",
        },
      ],
      action: "حفظ التفاصيل",
    },
    {
      number: 5,
      title: "إرسال الوثيقة للسائق",
      interactiveText: "تم إرسال الوثيقة إلكترونياً للسائق لاستكمال الرحلة",
      description:
        "يرسل الوثيقة إلكترونياً إلى السائق لاستكمال النقل عبر النظام.",
      action: "إرسال للسائق",
    },
    {
      number: 6,
      title: "متابعة حالة الوثيقة",
      interactiveText: "راقب حالة النقل في كل مرحلة حتى الوصول",
      description: "يتابع حالة الشحن من خلال لوحة التحكم حتى اكتمال الاستلام.",
      statusTracking: true,
      readOnly: true,
    },
    {
      number: 7,
      title: "إغلاق الوثيقة",
      interactiveText: "اكتملت عملية النقل وتم توثيقها بنجاح",
      description:
        "بعد استلام التأكيد من المنشأة المستلمة، تغلق الوثيقة إلكترونياً.",
      readOnly: true,
      completed: true,
    },
  ],
};

export const driverJourney = {
  role: "السائق",
  description: "السائق يبدأ النقل ويُحدَّث الحالة",
  steps: [
    {
      number: 1,
      title: "استلام الوثيقة",
      interactiveText: "استلم الوثيقة إلكترونياً عبر النظام",
      description:
        "يتلقى السائق إشعاراً بالوثيقة الجديدة المرسلة من الناقل عبر النظام.",
      notification: true,
      action: "عرض الوثيقة",
    },
    {
      number: 2,
      title: "مراجعة البيانات",
      interactiveText: "اطلع على تفاصيل الوثيقة واستعد للرحلة",
      description: "يستعرض تفاصيل الشحنة والموقع ويبدأ رحلته من موقع المنتج.",
      detailsView: true,
      action: "بدء الرحلة",
    },
    {
      number: 3,
      title: "تأكيد التحميل",
      interactiveText: "أكد عملية الرفع من الموقع وابدأ الرحلة",
      description: "عند التحميل، يؤكد رفع النفايات من موقع المنتج عبر النظام.",
      fields: [
        {
          label: "الكمية المحملة (طن)",
          type: "number",
          placeholder: "أدخل الكمية الفعلية",
        },
        { label: "صورة التحميل", type: "file", accept: "image/*" },
        { label: "ملاحظات", type: "textarea" },
      ],
      action: "تأكيد التحميل",
    },
    {
      number: 4,
      title: "أثناء النقل",
      interactiveText: "انطلق نحو المرفق وتابع المسار الآمن",
      description:
        "يتابع نظام التتبع (GPS) موقع المركبة أثناء النقل لضمان الأمان والشفافية.",
      gpsTracking: true,
      mapView: true,
      readOnly: true,
    },
    {
      number: 5,
      title: "تسجيل الوصول",
      interactiveText: "سجل وقت الوصول وتفريغ الحمولة",
      description: "عند الوصول إلى المرفق، يسجل وقت الوصول وتفريغ الحمولة.",
      fields: [
        { label: "وقت الوصول", type: "datetime-local" },
        { label: "صورة التفريغ", type: "file", accept: "image/*" },
        { label: "ملاحظات", type: "textarea" },
      ],
      action: "تسجيل الوصول",
    },
    {
      number: 6,
      title: "إنهاء الرحلة",
      interactiveText: "تم تحديث حالة الوثيقة بانتظار اعتماد المرفق",
      description:
        "بعد التفريغ، يتم تحديث حالة الوثيقة تلقائياً بانتظار اعتماد المرفق.",
      readOnly: true,
      completed: true,
    },
  ],
};

export const facilityJourney = {
  role: "مرفق الاستقبال",
  description: "مرفق الاستقبال يستلم ويغلق الوثيقة",
  steps: [
    {
      number: 1,
      title: "تسجيل الدخول إلى النظام",
      interactiveText: "ابدأ من هنا لتستقبل الوثائق الجديدة",
      description:
        "يدخل مدير المنشأة أو المفوض عبر https://emanifest.mwan.gov.sa باستخدام بياناته المسجلة في النظام.",
      fields: [
        {
          label: "اسم المستخدم",
          type: "text",
          placeholder: "أدخل اسم المستخدم",
        },
        {
          label: "كلمة المرور",
          type: "password",
          placeholder: "أدخل كلمة المرور",
        },
      ],
      action: "تسجيل الدخول",
    },
    {
      number: 2,
      title: "مراجعة الوثائق الواردة",
      interactiveText: "اطلع على الوثائق المرسلة من المنتجين",
      description:
        "تظهر في لوحة التحكم جميع الوثائق الجديدة التي حددت منشأتك كمستلم للنفايات، مع حالة كل وثيقة.",
      listView: true,
      readOnly: true,
    },
    {
      number: 3,
      title: "قبول أو رفض الوثيقة",
      interactiveText: "هل منشأتك جاهزة للاستلام؟ اختر القبول أو الرفض",
      description:
        "يراجع المستلم بيانات النفايات والكميات ونوعها، ثم يوافق على الوثيقة إذا كانت متوافقة مع نوع الترخيص والمنشأة.",
      fields: [
        {
          label: "القرار",
          type: "select",
          options: ["قبول الوثيقة", "رفض الوثيقة"],
        },
        {
          label: "سبب الرفض (إن وجد)",
          type: "textarea",
          placeholder: "اذكر السبب",
        },
      ],
      action: "تأكيد القرار",
    },
    {
      number: 4,
      title: "الاستعداد للاستلام",
      interactiveText: "جهز المنشأة لاستقبال الشحنة",
      description:
        "بعد قبول الوثيقة، تدرج ضمن الوثائق النشطة، ويتم التنسيق مع الناقل لاستلام الشحنة في الموعد المحدد.",
      fields: [
        { label: "تاريخ الاستلام المتوقع", type: "date" },
        { label: "ملاحظات التحضير", type: "textarea" },
      ],
      action: "حفظ",
    },
    {
      number: 5,
      title: "استلام الشحنة في المنشأة",
      interactiveText: "استقبل الشحنة ودوّن الكميات الفعلية",
      description:
        "عند وصول الشاحنة، يتحقق المستلم من بيانات الناقل والكمية، ويسجل القيم الفعلية المستلمة داخل النظام.",
      fields: [
        {
          label: "الكمية المستلمة (طن)",
          type: "number",
          placeholder: "الكمية الفعلية",
        },
        {
          label: "حالة النفايات",
          type: "select",
          options: ["مطابقة", "غير مطابقة", "تحتاج مراجعة"],
        },
        { label: "صورة الاستلام", type: "file", accept: "image/*" },
        { label: "ملاحظات", type: "textarea" },
      ],
      action: "تسجيل الاستلام",
    },
    {
      number: 6,
      title: "تأكيد الاستلام وإغلاق الوثيقة",
      interactiveText: "أكد استلامك لتغلق الوثيقة رسمياً",
      description:
        'بعد مطابقة البيانات، يضغط المستلم على "تأكيد الاستلام"، لتغلق الوثيقة إلكترونياً وترسل إشعارات الإتمام إلى المنتج والناقل.',
      action: "تأكيد وإغلاق",
    },
    {
      number: 7,
      title: "إصدار شهادة المعالجة النهائية",
      interactiveText: "وثق نهاية الرحلة",
      description:
        "يصدر النظام تلقائياً شهادة تؤكد استلام النفايات ومعالجتها أو تدويرها حسب نوع النشاط، ويمكن تحميلها بصيغة PDF من النظام.",
      certificate: true,
      readOnly: true,
    },
    {
      number: 8,
      title: "الأرشفة والتقارير",
      interactiveText: "تابع أداءك واحتفظ بسجلك الرقمي",
      description:
        "جميع الوثائق المغلقة تحفظ في سجل المنشأة، ويمكن تصدير تقارير دورية عن كميات وأنواع النفايات المستلمة والمعالجة.",
      reportsView: true,
      readOnly: true,
    },
  ],
};
