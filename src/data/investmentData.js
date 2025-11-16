// Data for Application 3: Investment Opportunities
// Extracted from slides 40-49

// Icons from تصاميم سيتي سكيب for outputs section
import fursIcon from "../assets/تصاميم سيتي سكيب/ايقونات المخطط/فرص@4x.png";
import takhtitIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التخطيط والتطوير_@4x.png";
import istidamaIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/الاستدامة المالية وتحفيز الاستثمار_@4x.png";
import tanthimIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التنظيم والحوكمة_ 2@4x.png";
import tawiyaIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التوعية وبناء القدرات_@4x.png";
import taqleelIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/تقليل إنتاج النفايات_@4x.png";
import tadwirIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/التدويــــر والاسترداد_@4x.png";
import tawareeIcon from "../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/التوعيــــة والمعرفــــة_@4x.png";
import rafaaIcon from "../assets/تصاميم سيتي سكيب/ايقونات وثيقة النقل/ايقونات الاهداف/رفع الكفاءة.png";

// Keep other icons for infrastructure section
import briefcaseIcon from "../assets/icons/Briefcase.png";
import garbageBagIcon from "../assets/icons/Garbage_Bag.png";
import biohazardSymbolIcon from "../assets/icons/Biohazard_Symbol.png";
import caduceusMedicalSymbolIcon from "../assets/icons/Caduceus_(Medical_Symbol).png";
import computerMonitorIcon from "../assets/icons/Computer_Monitor.png";

export const investmentData = {
  madinah: {
    id: "madinah",
    name: "المدينة المنورة",
    nameEn: "Madinah",
    facilities: 26,
    stats: {
      population: 1614425,
      populationUnit: "نسمة",
      municipalities: 4,
      totalArea: 88593,
      totalAreaUnit: "كم²",
      agriculturalArea: 559,
      agriculturalAreaUnit: "كم²",
      industrialAreas: 239,
      wasteGeneration: 2.8,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 79,
      diversionTarget: 90,
      numberOfOpportunities: 19,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 64 },
      { type: "النفايات الصناعية", percentage: 20 },
      { type: "النفايات الزراعية", percentage: 9 },
      { type: "حمأة الصرف الصحي", percentage: 4 },
      { type: "النفايات الخاصة", percentage: 3 },
      { type: "نفايات الرعاية الصحية", percentage: 0.13 },
    ],
    opportunities: [
      {
        id: 1,
        name: "فرصة استثمارية",
        type: "فرص استثمارية",
        capacity: "-",
        unit: "",
        investment: "53 مليار ريال",
        jobs: 0,
      },
    ],
  },

  riyadh: {
    id: "riyadh",
    name: "الرياض",
    nameEn: "Riyadh",
    facilities: 38,
    stats: {
      population: 8.0,
      populationUnit: "مليون نسمة",
      municipalities: 21,
      wasteGeneration: 7.5,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 81,
      diversionTarget: 92,
    },
    opportunities: Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(66 / 24).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  jeddah: {
    id: "jeddah",
    name: "جدة",
    nameEn: "Jeddah",
    facilities: 14,
    stats: {
      population: 4.7,
      populationUnit: "مليون نسمة",
      municipalities: 17,
      wasteGeneration: 4.2,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 78,
      diversionTarget: 89,
    },
    opportunities: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(30 / 25).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  makkah: {
    id: "makkah",
    name: "مكة المكرمة",
    nameEn: "Makkah",
    facilities: 20,
    stats: {
      population: 2.4,
      populationUnit: "مليون نسمة",
      municipalities: 14,
      wasteGeneration: 3.5,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 87,
    },
    opportunities: Array.from({ length: 13 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(57 / 13).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  dammam: {
    id: "dammam",
    name: "الدمام",
    nameEn: "Dammam",
    facilities: 68,
    stats: {
      population: 1.5,
      populationUnit: "مليون نسمة",
      municipalities: 8,
      wasteGeneration: 2.1,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 80,
      diversionTarget: 90,
    },
    opportunities: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(132 / 30).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  tabuk: {
    id: "tabuk",
    name: "تبوك",
    nameEn: "Tabuk",
    facilities: 13,
    stats: {
      population: 0.9,
      populationUnit: "مليون نسمة",
      municipalities: 6,
      wasteGeneration: 0.8,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 85,
    },
    opportunities: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(12 / 12).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  qassim: {
    id: "qassim",
    name: "القصيم",
    nameEn: "Qassim",
    facilities: 16,
    stats: {
      population: 1.4,
      populationUnit: "مليون نسمة",
      municipalities: 13,
      wasteGeneration: 1.2,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 77,
      diversionTarget: 88,
    },
    opportunities: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(10 / 20).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  abha: {
    id: "abha",
    name: "عسير",
    nameEn: "Asir",
    facilities: 51,
    stats: {
      population: 0.6,
      populationUnit: "مليون نسمة",
      municipalities: 5,
      wasteGeneration: 0.9,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 76,
      diversionTarget: 86,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 62 },
      { type: "نفايات البناء والهدم", percentage: 22 },
      { type: "النفايات الصناعية", percentage: 10 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: Array.from({ length: 26 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(50 / 26).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  jazan: {
    id: "jazan",
    name: "جازان",
    nameEn: "Jazan",
    facilities: 27,
    stats: {
      population: 1.6,
      populationUnit: "مليون نسمة",
      municipalities: 17,
      wasteGeneration: 1.4,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 77,
      diversionTarget: 87,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 63 },
      { type: "نفايات البناء والهدم", percentage: 21 },
      { type: "النفايات الصناعية", percentage: 11 },
      { type: "أخرى", percentage: 5 },
    ],
    opportunities: Array.from({ length: 26 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(26 / 26).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  najran: {
    id: "najran",
    name: "نجران",
    nameEn: "Najran",
    facilities: 12,
    stats: {
      population: 0.6,
      populationUnit: "مليون نسمة",
      municipalities: 8,
      wasteGeneration: 0.7,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 85,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 61 },
      { type: "نفايات البناء والهدم", percentage: 23 },
      { type: "النفايات الصناعية", percentage: 10 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(10 / 10).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  hail: {
    id: "hail",
    name: "حائل",
    nameEn: "Hail",
    facilities: 19,
    stats: {
      population: 0.7,
      populationUnit: "مليون نسمة",
      municipalities: 8,
      wasteGeneration: 0.8,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 76,
      diversionTarget: 86,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 62 },
      { type: "نفايات البناء والهدم", percentage: 21 },
      { type: "النفايات الصناعية", percentage: 11 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(14 / 10).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  baha: {
    id: "baha",
    name: "الباحة",
    nameEn: "Al-Bahah",
    facilities: 18,
    stats: {
      population: 0.5,
      populationUnit: "مليون نسمة",
      municipalities: 9,
      wasteGeneration: 0.6,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 74,
      diversionTarget: 84,
      numberOfOpportunities: 12,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 60 },
      { type: "نفايات البناء والهدم", percentage: 24 },
      { type: "النفايات الصناعية", percentage: 10 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(7 / 2).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  taif: {
    id: "taif",
    name: "الطائف",
    nameEn: "Taif",
    facilities: 14,
    stats: {
      population: 1.0,
      populationUnit: "مليون نسمة",
      municipalities: 9,
      wasteGeneration: 1.1,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 77,
      diversionTarget: 87,
      numberOfOpportunities: 17,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 63 },
      { type: "نفايات البناء والهدم", percentage: 21 },
      { type: "النفايات الصناعية", percentage: 10 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: [
      {
        id: 1,
        name: "فرصة استثمارية",
        type: "فرص استثمارية",
        capacity: "-",
        unit: "",
        investment: "30 مليار ريال",
        jobs: 0,
      },
    ],
  },

  jouf: {
    id: "jouf",
    name: "الجوف",
    nameEn: "Al-Jouf",
    facilities: 26,
    stats: {
      population: 0.5,
      populationUnit: "مليون نسمة",
      municipalities: 5,
      wasteGeneration: 0.6,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 85,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 61 },
      { type: "نفايات البناء والهدم", percentage: 22 },
      { type: "النفايات الصناعية", percentage: 11 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: Array.from({ length: 13 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(27 / 13).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  arar: {
    id: "arar",
    name: "الحدود الشمالية",
    nameEn: "Northern Borders",
    facilities: 25,
    stats: {
      population: 0.3,
      populationUnit: "مليون نسمة",
      municipalities: 4,
      wasteGeneration: 0.4,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 74,
      diversionTarget: 84,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 60 },
      { type: "نفايات البناء والهدم", percentage: 23 },
      { type: "النفايات الصناعية", percentage: 11 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: Array.from({ length: 14 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(15 / 14).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  ahsa: {
    id: "ahsa",
    name: "الأحساء",
    nameEn: "Al-Ahsa",
    facilities: 18,
    stats: {
      population: 1.2,
      populationUnit: "مليون نسمة",
      municipalities: 10,
      wasteGeneration: 1.5,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 78,
      diversionTarget: 88,
    },
    opportunities: Array.from({ length: 13 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(35 / 13).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  yanbu: {
    id: "yanbu",
    name: "ينبع",
    nameEn: "Yanbu",
    facilities: 13,
    stats: {
      population: 0.3,
      populationUnit: "مليون نسمة",
      municipalities: 3,
      wasteGeneration: 0.5,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 76,
      diversionTarget: 86,
    },
    opportunities: Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(11 / 11).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  hafr: {
    id: "hafr",
    name: "حفر الباطن",
    nameEn: "Hafar Al-Batin",
    facilities: 16,
    stats: {
      population: 0.4,
      populationUnit: "مليون نسمة",
      municipalities: 5,
      wasteGeneration: 0.6,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 85,
    },
    opportunities: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `فرصة استثمارية ${i + 1}`,
      type: "فرص استثمارية",
      capacity: "-",
      unit: "",
      investment: `${(10 / 10).toFixed(2)} مليار ريال`,
      jobs: 0,
    })),
  },

  qunfudhah: {
    id: "qunfudhah",
    name: "القنفذة",
    nameEn: "Qunfudhah",
    facilities: 11,
    stats: {
      population: 0.3,
      populationUnit: "مليون نسمة",
      municipalities: 4,
      wasteGeneration: 0.4,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 85,
      numberOfOpportunities: 8,
    },
    opportunities: [
      {
        id: 1,
        name: "فرصة استثمارية",
        type: "فرص استثمارية",
        capacity: "-",
        unit: "",
        investment: "10 مليار ريال",
        jobs: 0,
      },
    ],
  },
};

export const strategicPlanData = {
  title: "المخطط الاستراتيجي الشامل",
  subtitle: "خارطة طريق تنظم وتوجه مستقبل إدارة النفايات",
  description:
    "يعد المخطط الاستراتيجي الشامل أهم البرامج التي ينفذها المركز في سبيل تطوير قطاع إدارة النفايات الوطني، ويضع الاستراتيجية الوطنية لإدارة النفايات، فيمسح ميدانياً ويشخص النفايات في كل منطقة من مناطق المملكة، ويصنع قاعدة بيانات خط الأساس الوطني، ثم يصدر خطة شاملة ومتكاملة وطنياً لكل منطقة جغرافية تشمل حل متكامل ومستدام",
  geographicGroups: 25,

  introduction: {
    title: "نبذة تعريفية عن المخطط الاستراتيجي الشامل",
    content:
      "يعد المخطط الاستراتيجي الشامل أهم البرامج التي ينفذها المركز في سبيل تطوير قطاع إدارة النفايات الوطني، ويضع الاستراتيجية الوطنية لإدارة النفايات، فيمسح ميدانياً ويشخص النفايات في كل منطقة من مناطق المملكة، ويصنع قاعدة بيانات خط الأساس الوطني، ثم يصدر خطة شاملة ومتكاملة وطنياً لكل منطقة جغرافية تشمل حل متكامل ومستدام.",
    geographicGroups: 25,
  },

  approach: {
    // title: "منهجية عملية المخطط الاستراتيجي الشامل",
    description:
      "تم وضع المخطط الاستراتيجي الشامل لكل مجموعة من خلال نهج متعدد الخطوات على النحو التالي",
    steps: [
      {
        number: 1,
        title: "إجراء تقييم الوضع الراهن",
        description:
          "تحليل خط الأساس للوضع الراهن لإدارة النفايات في مدن مختلفة في المملكة",
      },
      {
        number: 2,
        title: "إجراء تحليل الفجوات",
        description: "تحديد الفجوات بين الوضع الراهن والوضع المستهدف",
      },
      {
        number: 3,
        title: "تطوير السيناريوهات",
        description:
          "وضع السيناريوهات المتاحة للاستفادة من النفايات باستخدام أفضل القنيات الحديثة BAT وأفضل الممارسات",
      },
      {
        number: 4,
        title: "تنظيم ورش العمل لتحديد السيناريو الأنسب",
        description:
          "العمل مع الشركاء وأصحاب المصلحة للمواءمة على تحديد السيناريو الأنسب بالأخذ بعين الاعتبار المحددات الاقتصادية والبيئية والاجتماعية",
      },
      {
        number: 5,
        title: "المرحلة التفصيلية",
        description:
          "تفصيل كل عنصر من عناصر المخطط الإستراتيجي الشامل بناءً على إطار عمل واضح للمخطط الإستراتيجي الشامل على كامل سلسلة القيمة",
      },
      {
        number: 6,
        title: "إعداد الفرص الاستثمارية والخطة التنفيذية",
        description:
          "تطوير النموذج المالي اللازم لبناء الفرص الاستثمارية وعمل الخطط التنفيذية المناسبة لها",
      },
    ],
    partners: [
      "صندوق التنمية السياحي",
      "البحر الأحمر الدولية",
      "الشركة السعودية الاستثمارية لإعادة التدوير (SIRC)",
      "القدية",
      "نيوم",
      "شركة المياه الوطنية",
      "مدن",
      "أمانة منطقة الرياض",
      "أمانة منطقة المدينة المنورة",
      "أمانة منطقة القصيم",
      "أمانة الأحساء",
      "أمانة منطقة جازان",
      "الهيئة الملكية للجبيل وينبع",
      "الهيئة الملكية لمدينة الرياض",
      "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة",
      "وزارة الاستثمار",
      "وزارة الصحة",
      "وزارة الطاقة",
      "وزارة الصناعة والثروة المعدنية",
      "وزارة الشؤون البلدية والقروية والإسكان",
      "وزارة البيئة والمياه والزراعة",
    ],
  },

  outputs: {
    title: "مخرجات المخطط",
    subtitle: "تنمية اقتصادية وطنية تحافظ على الموارد وترتقي بالبيئة والمجتمع",
    mainStats: [
      {
        icon: fursIcon,
        title: "فرصة استثمارية",
        value: "+500",
        color: "green",
      },
      {
        icon: takhtitIcon,
        title: "بنية تحتية مخطط لها",
        value: "~900",
        color: "green",
      },
      {
        icon: istidamaIcon,
        title: "مليار ريال",
        value: "~750",
        description: "حجم الاستثمارات",
        color: "green",
      },
      {
        icon: tanthimIcon,
        title: "مليار ريال خلال فترة الاستثمار",
        value: "650",
        description: "تتجاوز المساهمة في الناتج المحلي",
        color: "teal",
      },
    ],
    bottomStats: [
      {
        icon: tawiyaIcon,
        title: "تتجاوز 76 ألف وظيفة",
        description: "مباشرة",
      },
      {
        icon: taqleelIcon,
        title: "90% نسبة الاستبعاد عن",
        description: "المرادم التي سيتم تحقيقها",
      },
      {
        icon: tadwirIcon,
        title: "79% نسبة إعادة التدوير",
        description: "التي سيتم تحقيقها",
      },
      {
        icon: tawareeIcon,
        title: "حياد صفري في أنشطة",
        description: "إدارة النفايات",
      },
      {
        icon: rafaaIcon,
        title: "مدة الاستثمار 20 - 25 سنة",
        description: "",
      },
    ],
  },

  infrastructure: {
    title: "البنية التحتية المقترحة",
    description:
      "تم تحديد البنية التحتية المقترحة لمعالجة النفايات والتخلص منها في مجموعة المدينة المنورة",
    facilities: [
      {
        name: "مراكز بيئية متكاملة لمعالجة النفايات",
        description: "تشمل مصانع الفرز والتسميد واستعادة الطاقة",
        icon: briefcaseIcon,
        color: "red",
      },
      {
        name: "مرافق معالجة مخلفات المسالخ",
        description: "معالجة النفايات العضوية من المسالخ",
        icon: garbageBagIcon,
        color: "green",
      },
      {
        name: "مرافق معالجة النفايات الصناعية الخطرة",
        description: "معالجة متخصصة للنفايات الخطرة",
        icon: biohazardSymbolIcon,
        color: "cyan",
      },
      {
        name: "مرافق معالجة نفايات الرعاية الصحية الخطرة",
        description: "معالجة آمنة للنفايات الطبية الخطرة",
        icon: caduceusMedicalSymbolIcon,
        color: "purple",
      },
      {
        name: "مرافق معالجة النفايات الخاصة",
        description: "معالجة النفايات الإلكترونية والخاصة الأخرى",
        icon: computerMonitorIcon,
        color: "yellow",
      },
    ],
  },

  benefits: {
    title: "الفوائد المتوقعة",
    economic: {
      title: "الفوائد الاقتصادية",
      items: [
        "خلق فرص استثمارية بقيمة 420 مليار ريال",
        "توفير أكثر من 76 ألف وظيفة مباشرة",
        "تحفيز الاقتصاد الدائري والاستدامة",
        "تقليل تكاليف التخلص من النفايات",
      ],
    },
    environmental: {
      title: "الفوائد البيئية",
      items: [
        "تقليل الانبعاثات الكربونية",
        "الحفاظ على الموارد الطبيعية",
        "حماية البيئة والصحة العامة",
        "تحقيق أهداف الحياد الصفري",
      ],
    },
    social: {
      title: "الفوائد الاجتماعية",
      items: [
        "تحسين جودة الحياة",
        "رفع مستوى الوعي البيئي",
        "تطوير المهارات والكفاءات الوطنية",
        "خلق مجتمع مستدام",
      ],
    },
  },
};
