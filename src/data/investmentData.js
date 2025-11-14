// Data for Application 3: Investment Opportunities
// Extracted from slides 40-49

import briefcaseIcon from "../assets/icons/Briefcase.png";
import gearsCogsIcon from "../assets/icons/Gears-Cogs.png";
import dollarSignIcon from "../assets/icons/Dollar_Sign.png";
import stackOfMoneyIcon from "../assets/icons/Stack_of_Money.png";
import personToPersonIcon from "../assets/icons/PersontoPerson_Communication.png";
import targetBullseyeIcon from "../assets/icons/Target-Bullseye.png";
import recyclingSymbolIcon from "../assets/icons/Recycling_Symbol.png";
import leafIcon from "../assets/icons/Leaf.png";
import calendarIcon from "../assets/icons/Calendar.png";
import garbageBagIcon from "../assets/icons/Garbage_Bag.png";
import biohazardSymbolIcon from "../assets/icons/Biohazard_Symbol.png";
import caduceusMedicalSymbolIcon from "../assets/icons/Caduceus_(Medical_Symbol).png";
import computerMonitorIcon from "../assets/icons/Computer_Monitor.png";

export const investmentData = {
  madinah: {
    id: "madinah",
    name: "المدينة المنورة",
    nameEn: "Madinah",
    stats: {
      population: 1.5,
      populationUnit: "مليون نسمة",
      municipalities: 4,
      wasteGeneration: 2.8,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 79,
      diversionTarget: 90,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 64 },
      { type: "نفايات البناء والهدم", percentage: 20 },
      { type: "النفايات الصناعية", percentage: 9 },
      { type: "محطة استخدام السماد", percentage: 4 },
      { type: "أخرى", percentage: 3 },
    ],
    opportunities: [
      {
        id: 1,
        name: "منشأة معالجة نفايات البناء والهدم (1)",
        type: "معالجة نفايات البناء والهدم",
        capacity: "500,000",
        unit: "طن/سنة",
        investment: "150 مليون ريال",
        jobs: 80,
      },
      {
        id: 2,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "1,200,000",
        unit: "طن/سنة",
        investment: "800 مليون ريال",
        jobs: 250,
      },
      {
        id: 3,
        name: "مرفق معالجة النفايات الصناعية الخطرة",
        type: "معالجة نفايات خطرة",
        capacity: "50,000",
        unit: "طن/سنة",
        investment: "200 مليون ريال",
        jobs: 60,
      },
      {
        id: 4,
        name: "مرفق معالجة نفايات الرعاية الصحية",
        type: "معالجة نفايات طبية",
        capacity: "20,000",
        unit: "طن/سنة",
        investment: "100 مليون ريال",
        jobs: 40,
      },
      {
        id: 5,
        name: "مرفق معالجة مخلفات المسالخ",
        type: "معالجة نفايات عضوية",
        capacity: "30,000",
        unit: "طن/سنة",
        investment: "80 مليون ريال",
        jobs: 35,
      },
    ],
  },

  riyadh: {
    id: "riyadh",
    name: "الرياض",
    nameEn: "Riyadh",
    stats: {
      population: 8.0,
      populationUnit: "مليون نسمة",
      municipalities: 21,
      wasteGeneration: 7.5,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 81,
      diversionTarget: 92,
    },
    opportunities: [
      {
        id: 1,
        name: "مجمع بيئي متكامل - شمال الرياض",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "2,500,000",
        unit: "طن/سنة",
        investment: "1.5 مليار ريال",
        jobs: 450,
      },
      {
        id: 2,
        name: "منشأة معالجة نفايات البناء والهدم (1)",
        type: "معالجة نفايات البناء والهدم",
        capacity: "1,000,000",
        unit: "طن/سنة",
        investment: "280 مليون ريال",
        jobs: 120,
      },
      {
        id: 3,
        name: "منشأة معالجة نفايات البناء والهدم (2)",
        type: "معالجة نفايات البناء والهدم",
        capacity: "800,000",
        unit: "طن/سنة",
        investment: "220 مليون ريال",
        jobs: 100,
      },
      {
        id: 4,
        name: "مرفق معالجة النفايات الصناعية الخطرة",
        type: "معالجة نفايات خطرة",
        capacity: "100,000",
        unit: "طن/سنة",
        investment: "350 مليون ريال",
        jobs: 90,
      },
      {
        id: 5,
        name: "مرفق معالجة النفايات الإلكترونية",
        type: "معالجة نفايات إلكترونية",
        capacity: "40,000",
        unit: "طن/سنة",
        investment: "150 مليون ريال",
        jobs: 70,
      },
    ],
  },

  jeddah: {
    id: "jeddah",
    name: "جدة",
    nameEn: "Jeddah",
    stats: {
      population: 4.7,
      populationUnit: "مليون نسمة",
      municipalities: 17,
      wasteGeneration: 4.2,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 78,
      diversionTarget: 89,
    },
    opportunities: [
      {
        id: 1,
        name: "مجمع بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "1,800,000",
        unit: "طن/سنة",
        investment: "1.1 مليار ريال",
        jobs: 380,
      },
      {
        id: 2,
        name: "منشأة معالجة نفايات البناء والهدم",
        type: "معالجة نفايات البناء والهدم",
        capacity: "900,000",
        unit: "طن/سنة",
        investment: "250 مليون ريال",
        jobs: 110,
      },
      {
        id: 3,
        name: "مرفق معالجة النفايات الصناعية",
        type: "معالجة نفايات صناعية",
        capacity: "80,000",
        unit: "طن/سنة",
        investment: "280 مليون ريال",
        jobs: 75,
      },
    ],
  },

  makkah: {
    id: "makkah",
    name: "مكة المكرمة",
    nameEn: "Makkah",
    stats: {
      population: 2.4,
      populationUnit: "مليون نسمة",
      municipalities: 14,
      wasteGeneration: 3.5,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 87,
    },
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل - مكة",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "1,500,000",
        unit: "طن/سنة",
        investment: "950 مليون ريال",
        jobs: 320,
      },
      {
        id: 2,
        name: "منشأة معالجة نفايات البناء والهدم",
        type: "معالجة نفايات البناء والهدم",
        capacity: "600,000",
        unit: "طن/سنة",
        investment: "180 مليون ريال",
        jobs: 85,
      },
    ],
  },

  dammam: {
    id: "dammam",
    name: "الدمام",
    nameEn: "Dammam",
    stats: {
      population: 1.5,
      populationUnit: "مليون نسمة",
      municipalities: 8,
      wasteGeneration: 2.1,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 80,
      diversionTarget: 90,
    },
    opportunities: [
      {
        id: 1,
        name: "مجمع بيئي متكامل - المنطقة الشرقية",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "900,000",
        unit: "طن/سنة",
        investment: "650 مليون ريال",
        jobs: 220,
      },
      {
        id: 2,
        name: "مرفق معالجة النفايات الصناعية الخطرة",
        type: "معالجة نفايات خطرة",
        capacity: "120,000",
        unit: "طن/سنة",
        investment: "400 مليون ريال",
        jobs: 95,
      },
    ],
  },

  tabuk: {
    id: "tabuk",
    name: "تبوك",
    nameEn: "Tabuk",
    stats: {
      population: 0.9,
      populationUnit: "مليون نسمة",
      municipalities: 6,
      wasteGeneration: 0.8,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 75,
      diversionTarget: 85,
    },
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد",
        capacity: "350,000",
        unit: "طن/سنة",
        investment: "280 مليون ريال",
        jobs: 110,
      },
    ],
  },

  qassim: {
    id: "qassim",
    name: "القصيم",
    nameEn: "Qassim",
    stats: {
      population: 1.4,
      populationUnit: "مليون نسمة",
      municipalities: 13,
      wasteGeneration: 1.2,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 77,
      diversionTarget: 88,
    },
    opportunities: [
      {
        id: 1,
        name: "مجمع بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "550,000",
        unit: "طن/سنة",
        investment: "420 مليون ريال",
        jobs: 160,
      },
      {
        id: 2,
        name: "منشأة معالجة نفايات البناء والهدم",
        type: "معالجة نفايات البناء والهدم",
        capacity: "250,000",
        unit: "طن/سنة",
        investment: "95 مليون ريال",
        jobs: 55,
      },
    ],
  },

  abha: {
    id: "abha",
    name: "أبها",
    nameEn: "Abha",
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
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "400,000",
        unit: "طن/سنة",
        investment: "320 مليون ريال",
        jobs: 130,
      },
      {
        id: 2,
        name: "منشأة معالجة نفايات البناء والهدم",
        type: "معالجة نفايات البناء والهدم",
        capacity: "200,000",
        unit: "طن/سنة",
        investment: "75 مليون ريال",
        jobs: 45,
      },
    ],
  },

  jazan: {
    id: "jazan",
    name: "جازان",
    nameEn: "Jazan",
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
    opportunities: [
      {
        id: 1,
        name: "مجمع بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "600,000",
        unit: "طن/سنة",
        investment: "480 مليون ريال",
        jobs: 180,
      },
      {
        id: 2,
        name: "مرفق معالجة النفايات الصناعية",
        type: "معالجة نفايات صناعية",
        capacity: "60,000",
        unit: "طن/سنة",
        investment: "210 مليون ريال",
        jobs: 65,
      },
    ],
  },

  najran: {
    id: "najran",
    name: "نجران",
    nameEn: "Najran",
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
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد",
        capacity: "300,000",
        unit: "طن/سنة",
        investment: "240 مليون ريال",
        jobs: 95,
      },
    ],
  },

  hail: {
    id: "hail",
    name: "حائل",
    nameEn: "Hail",
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
    opportunities: [
      {
        id: 1,
        name: "مجمع بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "350,000",
        unit: "طن/سنة",
        investment: "290 مليون ريال",
        jobs: 115,
      },
    ],
  },

  baha: {
    id: "baha",
    name: "الباحة",
    nameEn: "Al-Bahah",
    stats: {
      population: 0.5,
      populationUnit: "مليون نسمة",
      municipalities: 9,
      wasteGeneration: 0.6,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 74,
      diversionTarget: 84,
    },
    wasteComposition: [
      { type: "النفايات البلدية الصلبة", percentage: 60 },
      { type: "نفايات البناء والهدم", percentage: 24 },
      { type: "النفايات الصناعية", percentage: 10 },
      { type: "أخرى", percentage: 6 },
    ],
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد",
        capacity: "250,000",
        unit: "طن/سنة",
        investment: "200 مليون ريال",
        jobs: 80,
      },
    ],
  },

  taif: {
    id: "taif",
    name: "الطائف",
    nameEn: "Taif",
    stats: {
      population: 1.0,
      populationUnit: "مليون نسمة",
      municipalities: 9,
      wasteGeneration: 1.1,
      wasteUnit: "مليون طن/سنة",
      recyclingTarget: 77,
      diversionTarget: 87,
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
        name: "مجمع بيئي متكامل",
        type: "فرز وتسميد واسترداد طاقة",
        capacity: "500,000",
        unit: "طن/سنة",
        investment: "400 مليون ريال",
        jobs: 155,
      },
      {
        id: 2,
        name: "منشأة معالجة نفايات البناء والهدم",
        type: "معالجة نفايات البناء والهدم",
        capacity: "250,000",
        unit: "طن/سنة",
        investment: "90 مليون ريال",
        jobs: 50,
      },
    ],
  },

  jouf: {
    id: "jouf",
    name: "الجوف",
    nameEn: "Al-Jouf",
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
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد",
        capacity: "280,000",
        unit: "طن/سنة",
        investment: "220 مليون ريال",
        jobs: 90,
      },
    ],
  },

  arar: {
    id: "arar",
    name: "عرعر",
    nameEn: "Arar",
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
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد",
        capacity: "180,000",
        unit: "طن/سنة",
        investment: "150 مليون ريال",
        jobs: 65,
      },
    ],
  },

  bisha: {
    id: "bisha",
    name: "بيشة",
    nameEn: "Bisha",
    stats: {
      population: 0.4,
      populationUnit: "مليون نسمة",
      municipalities: 6,
      wasteGeneration: 0.5,
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
    opportunities: [
      {
        id: 1,
        name: "مركز بيئي متكامل",
        type: "فرز وتسميد",
        capacity: "220,000",
        unit: "طن/سنة",
        investment: "180 مليون ريال",
        jobs: 75,
      },
    ],
  },
};

export const strategicPlanData = {
  title: "المخطط الاستراتيجي الشامل",
  subtitle: "خارطة طريق تنظم وتوجه مستقبل إدارة النفايات",
  description:
    "يعد المخطط الاستراتيجي الشامل أحد أهم البرامج التي ينفذها المركز في سبيل تطوير قطاع إدارة النفايات الوطني، و يضع الاستراتيجية الوطنية لإدارة النفايات. ففيصمح جداولاً و يستخدم النفايات في كل منطقة من مناطق المملكة، وضع قاعدة بيانات حط الأساس الوطني، تم يصدر خطة شاملة ومتكاملة وطنياً لكل منطقة جغرافية تشمل حل مخاطر ومستدام.",
  geographicGroups: 25,

  introduction: {
    title: "نبذة تعريفية عن المخطط الاستراتيجي الشامل",
    content:
      "يعد المخطط الاستراتيجي الشامل أحد أهم البرامج التي ينفذها المركز في سبيل تطوير قطاع إدارة النفايات الوطني، و يضع الاستراتيجية الوطنية لإدارة النفايات. ففيصمح جداولاً و يستخدم النفايات في كل منطقة من مناطق المملكة، وضع قاعدة بيانات حط الأساس الوطني، تم يصدر خطة شاملة ومتكاملة وطنياً لكل منطقة جغرافية تشمل حل مخاطر ومستدام.",
    geographicGroups: 25,
  },

  approach: {
    title: "منهجية عملية المخطط الاستراتيجي الشامل",
    description:
      "تم وضع المخطط الاستراتيجي الشامل لكل مجموعة من خلال نهج متعدد الخطوات على النحو التالي",
    steps: [
      {
        number: 1,
        title: "إجراء تقييم الوضع الراهن",
        description:
          "تحليل خط الأساس للوضع الراهن ومقارنة الأداء في إدارة النفايات بين مناطق المملكة المختلفة",
      },
      {
        number: 2,
        title: "إجراء تحليل الفجوات",
        description:
          "تحديد الفجوات بين الوضع الراهن والوضع المستهدف ومتطلبات تطوير منظومة إدارة النفايات",
      },
      {
        number: 3,
        title: "تطوير السيناريوهات",
        description:
          "وضع السيناريوهات للاستجابة للطلب المتزايد على الخدمات بالتعاون مع الجهات ذات العلاقة وتقدير التكاليف المالية والاقتصادية",
      },
      {
        number: 4,
        title: "تنظيم ورش العمل لتحديد السيناريو الأنسب",
        description:
          "إشراك الجهات ذات العلاقة في مناقشة نتائج السيناريوهات للوصول إلى التصور النهائي للمخطط",
      },
      {
        number: 5,
        title: "المرحلة التفصيلية",
        description:
          "تفصيل عناصر المخطط الاستراتيجي الشامل وبناء إطار عمل وخطط البرامج التنفيذية مع تحديد الحلول المناسبة لكل عنصر",
      },
      {
        number: 6,
        title: "إعداد الفرص الاستثمارية والخطة التنفيذية",
        description:
          "تطوير النموذج المالي لبناء العروض الاستثمارية ووضع خطة تنفيذية متكاملة لضمان تحقيق الأهداف",
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
        icon: briefcaseIcon,
        title: "فرصة استثمارية",
        value: "+500",
        color: "orange",
      },
      {
        icon: gearsCogsIcon,
        title: "بنية تحتية مخطط لها",
        value: "~900",
        color: "green",
      },
      {
        icon: dollarSignIcon,
        title: "مليار ريال",
        value: "~750",
        description: "حجم الاستثمارات",
        color: "blue",
      },
      {
        icon: stackOfMoneyIcon,
        title: "مليار ريال خلال فترة الاستثمار",
        value: "650",
        description: "تتجاوز المساهمة في الناتج المحلي",
        color: "teal",
      },
    ],
    bottomStats: [
      {
        icon: personToPersonIcon,
        title: "تتجاوز 76 ألف وظيفة",
        description: "مباشرة",
      },
      {
        icon: targetBullseyeIcon,
        title: "90% نسبة الاستبعاد عن",
        description: "المرادم التي سيتم تحقيقها",
      },
      {
        icon: recyclingSymbolIcon,
        title: "79% نسبة إعادة التدوير",
        description: "التي سيتم تحقيقها",
      },
      {
        icon: leafIcon,
        title: "حياد صفري في أنشطة",
        description: "إدارة النفايات",
      },
      {
        icon: calendarIcon,
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
