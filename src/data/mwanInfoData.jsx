// Data for Application 1: Discover MWAN
// Extracted from slides 4-14

import recyclingSymbolIcon from '../assets/icons/Recycling_Symbol.png';
import barGraphIcon from '../assets/icons/Bar_Graph.png';
import dollarSignIcon from '../assets/icons/Dollar_Sign.png';
import personToPersonIcon from '../assets/icons/PersontoPerson_Communication.png';
import documentIcon from '../assets/icons/Document.png';
import globeIcon from '../assets/icons/Globe.png';
import folderIcon from '../assets/icons/Folder.png';
import lightbulbIcon from '../assets/icons/Lightbulb_(Idea).png';
import leafIcon from '../assets/icons/Leaf.png';
import envelopeIcon from '../assets/icons/Envelope.png';
import telephoneIcon from '../assets/icons/Telephone.png';
import compassIcon from '../assets/icons/Compass.png';
import podiumLecternIcon from '../assets/icons/Shield_with_Star_and_Laurels.png';
import briefcaseIcon from '../assets/icons/Briefcase.png';
import handWithCoinIcon from '../assets/icons/Hand_with_Coin_(Donation).png';
import udeemWebImage from '../../udeemWebImage.png';

// New icons from تصاميم سيتي سكيب
// مهام المركز icons
import takhtitIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التخطيط والتطوير_@4x.png';
import tanzimIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التنظيم والحوكمة_ 2@4x.png';
import istidamaIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/الاستدامة المالية وتحفيز الاستثمار_@4x.png';
import tawiyaIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التوعية وبناء القدرات_@4x.png';
import tarjizIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/الترخيص والرقابة لتعزيز الامتثال_@4x.png';
import tahawulIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات مهام المركز/التحول الرقمي والذكاء الاصطناعي_@4x.png';

// برنامج يديم icons
import qitaaHukumiIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/القطاع الحــــكومــــي_@4x.png';
import qitaaKhasIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/القطاع الخـــاص_@4x.png';
import qitaaGhairRibhiIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/القطاع غير الربحــــي_@4x.png';
import tawiyaMaarifaIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/التوعيــــة والمعرفــــة_@4x.png';
import tadwirIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/التدويــــر والاسترداد_@4x.png';
import taqleelIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات برنامج يديم/تقليل إنتاج النفايات_@4x.png';

// تواصل معنا icons
import emailIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات تواصل معنا/ايميل@4x.png';
import phoneIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات تواصل معنا/تلفون@4x.png';
import addressIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات تواصل معنا/عنوان@4x.png';
import websiteIcon from '../assets/تصاميم سيتي سكيب/ايقونات اكتشف موان/ايقونات تواصل معنا/موقع@4x.png';

const socials = [
  {
    name: 'X',
    username: 'ncwmsa@',
    href: 'https://x.com/ncwmsa',
    // Use high-quality brand icon from CDN
    iconUrl: 'https://cdn.simpleicons.org/x/FFFFFF',
  },
  {
    name: 'YouTube',
    username: 'MWAN-SA@',
    href: 'https://www.youtube.com/channel/UC0Fl3my86TrSTqOgsjRsTmA',
    iconPath: 'M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.26 5 12 5 12 5s-6.26 0-7.82.44c-.86.23-1.52.9-1.76 1.75C2 8.05 2 12 2 12s0 3.95.42 4.81c.23.86.9 1.52 1.76 1.75C5.74 19 12 19 12 19s6.26 0 7.82-.44c.86-.23 1.52-.9 1.76-1.75C22 15.95 22 12 22 12s0-3.95-.42-4.81zM9.54 15.58V8.42L15.82 12l-6.28 3.58z',
  },
  {
    name: 'LinkedIn',
    username: 'mwansa@',
    href: 'https://www.linkedin.com/company/mwansa/',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
];

export const mwanInfoData = {
  dorMwan: {
    title: "نبذة عنه",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-mwan-green">نبذة عن موان</h3>
          <p className="text-lg leading-relaxed mb-6">
          تم تأسيس المركز الوطني لإدارة النفايات بموجب قرار مجلس الوزراء رقم 457 بتاريخ 1440/8/11هـ. بهدف تنظيم أنشطة إدارة النفايات والإشراف عليها، وتحفيز الاستثمار فيها، والارتقاء بجودتها بناءً على مبدأ الاقتصاد الدائري في إدارة النفايات لتحقيق أهداف التنمية المستدامة.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 text-mwan-green">مهام المركز</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card hover:bg-white/20 transition-all">
              <img src={takhtitIcon} alt="" className="h-16 w-auto object-contain mb-4" />
              <h4 className="font-bold text-xl mb-2">التخطيط والتطوير</h4>
              <p className="text-sm">تطوير وتنفيذ الخطط والاستراتيجيات الوطنية لإدارة النفايات</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <img src={tanzimIcon} alt="" className="h-16 w-auto object-contain mb-4" />
              <h4 className="font-bold text-xl mb-2">التنظيم والحوكمة</h4>
              <p className="text-sm">وضع الأنظمة واللوائح والمعايير لإدارة النفايات</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <img src={istidamaIcon} alt="" className="h-16 w-auto object-contain mb-4" />
              <h4 className="font-bold text-xl mb-2">الاستدامة المالية وتحفيز الاستثمار</h4>
              <p className="text-sm">تطوير نماذج التمويل المستدامة وجذب الاستثمارات</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <img src={tawiyaIcon} alt="" className="h-16 w-auto object-contain mb-4" />
              <h4 className="font-bold text-xl mb-2">التوعية وبناء القدرات</h4>
              <p className="text-sm">رفع مستوى الوعي وبناء القدرات الوطنية</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <img src={tarjizIcon} alt="" className="h-16 w-auto object-contain mb-4" />
              <h4 className="font-bold text-xl mb-2">الترخيص والرقابة لتعزيز الامتثال</h4>
              <p className="text-sm">إصدار التراخيص ومراقبة الامتثال للمعايير</p>
            </div>

            <div className="card hover:bg-white/20 transition-all">
              <img src={tahawulIcon} alt="" className="h-16 w-auto object-contain mb-4" />
              <h4 className="font-bold text-xl mb-2">التحول الرقمي والذكاء الاصطناعي</h4>
              <p className="text-sm">تطوير الحلول الرقمية ودعم الابتكار</p>
            </div>
          </div>
        </section>
      </div>
    )
  },

  anzema: {
    title: "الأنظمة والتشريعات",
    content: (onPdfView) => (
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
            <button 
              onClick={() => onPdfView({
                type: 'single',
                title: 'نظام إدارة النفايات',
                url: 'https://drive.google.com/file/d/1CnBBEkFJdK_BrFQefKrgJYVcctHmQgJd/preview'
              })}
              className="card hover:bg-white/20 transition-all cursor-pointer block w-full text-right"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                نظام إدارة النفايات
                <span className="text-sm text-mwan-green flex items-center gap-2">
                  <img src={documentIcon} alt="" className="h-5 w-auto object-contain" />
                  عرض PDF
                </span>
              </h4>
              <p className="text-base leading-relaxed">
                النظام الأساسي الذي يحدد الإطار العام لإدارة النفايات في المملكة، بما في ذلك
                الأدوار والمسؤوليات والآليات التنظيمية.
              </p>
            </button>

            <button 
              onClick={() => onPdfView({
                type: 'single',
                title: 'اللائحة التنفيذية لنظام إدارة النفايات',
                url: 'https://drive.google.com/file/d/1KaIw7ieouDRkUsqBteO1RU-jSet-xJ5k/preview'
              })}
              className="card hover:bg-white/20 transition-all cursor-pointer block w-full text-right"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                اللائحة التنفيذية لنظام إدارة النفايات
                <span className="text-sm text-mwan-green flex items-center gap-2">
                  <img src={documentIcon} alt="" className="h-5 w-auto object-contain" />
                  عرض PDF
                </span>
              </h4>
              <p className="text-base leading-relaxed">
                تفصيل الإجراءات والمتطلبات التنفيذية لنظام إدارة النفايات، بما في ذلك
                معايير الترخيص والتشغيل والرقابة.
              </p>
            </button>

            <button 
              onClick={() => onPdfView({
                type: 'list',
                title: 'جدول تصنيف المخالفات لنظام إدارة النفايات',
                description: 'جدول شامل يحدد تصنيف المخالفات المتعلقة بنظام إدارة النفايات والعقوبات المقررة لها',
                pdfs: [
                  {
                    title: 'مخالفات أحكام التراخيص والتصاريح',
                    url: 'https://drive.google.com/file/d/1v61_I_HQi-o1sPV__L19ue5Zkw3Y3DyL/preview',
                    // description: 'المخالفات المتعلقة بالتراخيص والتصاريح'
                  },
                  {
                    title: 'مخالفات أحكام مسؤولية المنتج الممتد',
                    url: 'https://drive.google.com/file/d/13y11I4zX6NGgP03KZgHTxKI6kq8Ae2BC/preview',
                    // description: 'المخالفات المتعلقة بمسؤولية المنتج الممتد'
                  },
                  {
                    title: 'مخالفات أحكام سلسلة القيمة للنفايات',
                    url: 'https://drive.google.com/file/d/1RVWDpHK5x9K6yfd_PRMkTR6U1rkxuPi8/preview',
                    // description: 'المخالفات المتعلقة بسلسلة القيمة للنفايات'
                  },
                  {
                    title: 'مخالفات أحكام التعاقد على خدمات إدارة النفايات',
                    url: 'https://drive.google.com/file/d/1cTN95gPDJcKSNKbN3CS375dso3pVnXQ0/preview',
                    // description: 'المخالفات المتعلقة بالتعاقد على الخدمات'
                  },
                  {
                    title: 'مخالفات أحكام استيراد وتصدير النفايات',
                    url: 'https://drive.google.com/file/d/1rg7_JGM4_BGC3rgZERRaLYyvigT_bf5r/preview',
                    // description: 'المخالفات المتعلقة باستيراد وتصدير النفايات'
                  },
                  {
                    title: 'مخالفات أحكام خطط إدارة النفايات',
                    url: 'https://drive.google.com/file/d/1dtESDiZCHlkTNmrpD58Z65vIgHVpm4CZ/preview',
                    // description: 'المخالفات المتعلقة بخطط إدارة النفايات'
                  },
                  {
                    title: 'مخالفات أحكام التفتيش والتحقيق',
                    url: 'https://drive.google.com/file/d/1W9arvueSGnBnVk0ZZXjUTk2cmipbNia/preview',
                    // description: 'المخالفات المتعلقة بالتفتيش والتحقيق'
                  },
                  {
                    title: 'مخالفات عامة',
                    url: 'https://drive.google.com/file/d/1t3gMv_hT-FuQ9v6myrs4ySp31iWGvqUw/preview',
                    // description: 'المخالفات العامة'
                  },
                  {
                    title: 'كامل ملف المخالفات',
                    url: 'https://drive.google.com/file/d/1UKWQujryEfZ0A1nTTMtWJ5W-zb3k_OTK/preview',
                    description: 'الملف الشامل لجميع المخالفات'
                  }
                ]
              })}
              className="card hover:bg-white/20 transition-all cursor-pointer block w-full text-right"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                جدول تصنيف المخالفات لنظام إدارة النفايات
                <span className="text-sm text-mwan-green flex items-center gap-2">
                  <img src={folderIcon} alt="" className="h-5 w-auto object-contain" />
                  عرض المستندات
                </span>
              </h4>
              <p className="text-base leading-relaxed">
                جدول شامل يحدد تصنيف المخالفات المتعلقة بنظام إدارة النفايات والعقوبات المقررة لها.
              </p>
            </button>

            <button 
              onClick={() => onPdfView({
                type: 'list',
                title: 'الأدلة الفنية',
                description: 'مجموعة من الأدلة والمواصفات الفنية لمختلف أنشطة إدارة النفايات',
                pdfs: [
                  {
                    title: 'الضوابط والأدلة الفنية لإدارة نفايات الرعاية الصحية',
                    url: 'https://drive.google.com/file/d/1kzjROGnONF35Caa0rX6wrXq5Ia_QPmV_/preview',
                    description: 'الضوابط والإرشادات لإدارة نفايات الرعاية الصحية'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لتصميم مرافق استرداد المواد وإنشائها وتشغيلها',
                    url: 'https://drive.google.com/file/d/1LLnt3ODLDRKyJMlkmT-nzKLXSwWuH8H6/preview',
                    description: 'معايير تصميم وتشغيل مرافق استرداد المواد'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لتصميم وإنشاء وتشغيل منشآت المعالجة الفيزيائية الكيميائية',
                    url: 'https://drive.google.com/file/d/127ZMVWnlFk2gKlyKGorE7XUATaZ6TmMi/preview',
                    description: 'معايير منشآت المعالجة الفيزيائية والكيميائية'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لتصنيف النفايات',
                    url: 'https://drive.google.com/file/d/1hD_sCSUxcm8S-5ow7Uc-HZ9qMPeMLnJR/preview',
                    description: 'معايير تصنيف أنواع النفايات المختلفة'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لخطط إدارة النفايات',
                    url: 'https://drive.google.com/file/d/1RkUIRk12RstsTUo1ixWKQGjmC_yXmNBg/preview',
                    description: 'إرشادات إعداد خطط إدارة النفايات'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية للتخزين المؤقت للنفايات',
                    url: 'https://drive.google.com/file/d/1Ka12am8vjO3ROAUI6VATYxgdCMNUdtkJ/preview',
                    description: 'معايير التخزين المؤقت الآمن للنفايات'
                  },
                  {
                    title: 'الضوابط و الأدلة الفنية لترخيص الأنشطة والمنشآت',
                    url: 'https://drive.google.com/file/d/1stKIAW18FtvmyQ0IS3zQFtN9f2X9Ecro/preview',
                    description: 'متطلبات وإجراءات الحصول على التراخيص'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية للتفتيش والتدقيق',
                    url: 'https://drive.google.com/file/d/1T4itGzsjB-Vpl8LqgjhR7x3R5zrVIk-P/preview',
                    description: 'معايير وإجراءات التفتيش والتدقيق'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية للمعالجة البيولوجية للنفايات',
                    url: 'https://drive.google.com/file/d/1EqlVQNKFcOP8hc3Nh5y9vwb6Mwx5wiOM/preview',
                    description: 'معايير المعالجة البيولوجية للنفايات'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية للمعالجة الميكانيكية البيولوجية للنفايات',
                    url: 'https://drive.google.com/file/d/1cPPC4sBPleuGq-WdlnTdVv2KpX9bqTU8/preview',
                    description: 'معايير المعالجة الميكانيكية البيولوجية'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لمعايير قبول النفايات في المرادم',
                    url: 'https://drive.google.com/file/d/11CIXsbN47TFlHovwLwXlEmD5aM_Nr6zg/preview',
                    description: 'معايير قبول النفايات في المرادم الصحية'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لنقل النفايات',
                    url: 'https://drive.google.com/file/d/1n0rZyxSfmjxZd4ACaEBNrWsQ29bR6Ut1/preview',
                    description: 'المواصفات الفنية لعمليات نقل النفايات'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لتصميم مرافق حرق النفايات وإنشائها وتشغيلها',
                    url: 'https://drive.google.com/file/d/1Da7lvlVxfPMuI6KW26Yl1S4MV-kpdK5g/preview',
                    description: 'معايير تصميم وتشغيل مرافق الحرق'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لتصميم وإنشاء وتشغيل المرادم',
                    url: 'https://drive.google.com/file/d/1c4QAhRN6d6bKY4RMnmbNxPFB2o8iQNu7/preview',
                    description: 'المواصفات الفنية لتصميم وتشغيل المرادم'
                  },
                  {
                    title: 'الضوابط والاشتراطات للمبادرات التطوعية في قطاع إدارة النفايات',
                    url: 'https://drive.google.com/file/d/1NJd9oFi93QfWCGyrEntnqNX1Fw3UkMjK/preview',
                    description: 'اشتراطات المبادرات التطوعية'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لإدارة نفايات مسالخ الدواجن',
                    url: 'https://drive.google.com/file/d/1CaWlA-h619CORJXiMYdYD10UuQaI3P4T/preview',
                    description: 'إرشادات إدارة نفايات مسالخ الدواجن'
                  },
                  {
                    title: 'الضوابط والأدلة الفنية لإدارة نفايات مسالخ المواشي',
                    url: 'https://drive.google.com/file/d/1383gtWurSe1LI6WvMHGvFFMc6c4RhqHr/preview',
                    description: 'إرشادات إدارة نفايات مسالخ المواشي'
                  },
                  {
                    title: 'نظام إدارة ميزان الشاحنات الإلكتروني عند مدخل منشأة استلام النفايات',
                    url: 'https://drive.google.com/file/d/1UMpSeGpsh_AZHiP5kzoailj42Z8kuoCj/preview',
                    description: 'متطلبات نظام الميزان الإلكتروني'
                  }
                ]
              })}
              className="card hover:bg-white/20 transition-all cursor-pointer block w-full text-right"
            >
              <h4 className="font-bold text-xl mb-3 flex items-center justify-between">
                الأدلة الفنية
                <span className="text-sm text-mwan-green flex items-center gap-2">
                  <img src={folderIcon} alt="" className="h-5 w-auto object-contain" />
                  عرض المستندات
                </span>
              </h4>
              <p className="text-base leading-relaxed">
                مجموعة من الأدلة والمواصفات الفنية لمختلف أنشطة إدارة النفايات،
                بما في ذلك الجمع والنقل والمعالجة والتخلص.
              </p>
            </button>
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
          برنامج يعنى بتنظيم وتمكين مبادرات مسؤولة تتبنى ممارسات سليمة لدعم التحول نحو الاقتصاد الدائري ضمن
          منظومة متكاملة تدعم المبادرين بالمعرفة والأفكار وتقيس الأثر وتقدّر الجهود.
                    </p>
        </section>

        {/* Targeted Sectors */}
        <section>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-mwan-green to-emerald-500 bg-clip-text text-transparent">
            القطاعات المستهدفة
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Public Sector */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600 hover:border-mwan-green transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src={qitaaHukumiIcon} alt="" className="h-12 w-auto object-contain" />
                <h4 className="text-xl font-bold">القطاع الحــــكومــــي</h4>
              </div>
            </div>

            {/* Private Sector */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600 hover:border-mwan-green transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src={qitaaKhasIcon} alt="" className="h-12 w-auto object-contain" />
                <h4 className="text-xl font-bold">القطاع الخـــاص</h4>
              </div>
            </div>

            {/* Non-profit Sector */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600 hover:border-mwan-green transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src={qitaaGhairRibhiIcon} alt="" className="h-12 w-auto object-contain" />
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
              <div className="mb-4 text-center flex justify-center">
                <img src={tawiyaMaarifaIcon} alt="" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-center">التوعيــــة والمعرفــــة</h4>
              <p className="text-sm text-center leading-relaxed">
                نشر ثقافة الاقتصاد الدائري وبناء المعرفة بالممارسات السليمة لإدارة النفايات.
              </p>
            </div>

            {/* Track 2 - الابتكار الدائري */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 text-center flex justify-center">
                <img src={tawiyaIcon} alt="" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-center">الابتكار الدائــــري</h4>
              <p className="text-sm text-center leading-relaxed">
                تشجيع تطوير واعتماد تقنيات وأنظمة مبتكرة تقدم حلولاً مستدامة في إدارة النفايات.
              </p>
            </div>

            {/* Track 3 - التدوير والاسترداد */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 text-center flex justify-center">
                <img src={tadwirIcon} alt="" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-center">التدويــــر والاسترداد</h4>
              <p className="text-sm text-center leading-relaxed">
                تعزيز إعادة توجيه النفايات من خلال إعادة التدوير واسترداد الموارد لإطالة دورة حياة المنتجات.
              </p>
            </div>

            {/* Track 4 - تقليل إنتاج النفايات */}
            <div className="bg-gradient-to-br from-mwan-green to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 text-center flex justify-center">
                <img src={taqleelIcon} alt="" className="h-16 w-auto object-contain" />
              </div>
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
              <h3 className="text-3xl font-bold mb-4">ندعوكم لتكونوا جزءًا من المبادرات التي تصنع الاستدامة البيئية.</h3>
              <p className="text-xl">ولتكن بدايتنا مع يُديم نحو بيئةٍ تدوم.</p>
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
                  <div className="relative brand-panel--soft border border-mwan-green/40 p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-mwan-green/30">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-mwan-light/60">mwan.gov.sa</div>
                    </div>
                    <div className="py-4">
                      <a 
                        href="https://mwan.gov.sa/en/about/udeem" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <img 
                          src={udeemWebImage} 
                          alt="Udeem Program Website" 
                          className="w-full h-auto rounded-lg"
                        />
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
              <div className="text-5xl font-bold mb-2 text-mwan-green">~1.2</div>
              <p className="text-lg font-semibold">مليار طن</p>
              <p className="text-sm mt-2">من النفايات المعالجة</p>
            </div>

            <div className="card bg-mwan-green/20 border-mwan-green">
              <div className="text-5xl font-bold mb-2 text-mwan-green">~76</div>
              <p className="text-lg font-semibold">ألف وظيفة</p>
              <p className="text-sm mt-2">ساهم في توليدها</p>
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
                <img src={emailIcon} alt="" className="h-8 w-auto object-contain" />
                البريد الإلكتروني
              </h4>
              <p className="text-lg" dir="ltr">info@mwan.gov.sa</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <img src={websiteIcon} alt="" className="h-8 w-auto object-contain" />
                الموقع الإلكتروني
              </h4>
              <p className="text-lg" dir="ltr">www.mwan.gov.sa</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <img src={phoneIcon} alt="" className="h-8 w-auto object-contain" />
                الهاتف
              </h4>
              <p className="text-lg" dir="ltr">920009110</p>
            </div>

            <div className="card">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                <img src={addressIcon} alt="" className="h-8 w-auto object-contain" />
                العنوان
              </h4>
              <p className="text-lg"> 3186 طريق الأمير محمد بن سلمان بن عبدالعزيز، حي, قرطبة، الرياض 13248-6329</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="card bg-mwan-green/10 text-center">
            <h4 className="font-bold text-2xl mb-6">منصات التواصل الاجتماعي</h4>
            <div className="flex gap-8 justify-center items-center mt-4 flex-wrap">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex flex-col items-center gap-2 text-mwan-light hover:text-mwan-green transition-colors duration-300"
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
                  <span className="text-sm font-medium">{social.username}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
};


