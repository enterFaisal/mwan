import React from 'react';

const ConstructionDemolitionOpportunities = ({ onBack }) => {
  const wasteManagementOpportunities = [
    { id: 1, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(1)' },
    { id: 2, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(2)' },
    { id: 3, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(3)' },
    { id: 4, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(4)' },
    { id: 5, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(5)' },
    { id: 6, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(6)' },
    { id: 7, group: 'جدة', name: 'منشأة معالجة نفايات البناء والهدم(7)' },
    { id: 8, group: 'الدمام', name: 'منشأة معالجة نفايات البناء والهدم(8)' },
    { id: 9, group: 'الاحساء', name: 'منشأة معالجة نفايات البناء والهدم(9)' },
    { id: 10, group: 'جدة', name: 'خلية هندسية لنفايات البناء والهدم' },
    { id: 11, group: 'الدمام', name: 'خلية هندسية لنفايات البناء والهدم' },
    { id: 12, group: 'الأحساء', name: 'خلية هندسية لنفايات البناء والهدم' },
    { id: 13, group: 'مكة المكرمة', name: 'مردم نفايات البناء والهدم- 01' },
    { id: 14, group: 'ينبع', name: 'منشآت معالجة نفايات البناء والهدم - 1 و02' },
    { id: 15, group: 'ينبع', name: 'مردم نفايات البناء والهدم - 01' },
    { id: 16, group: 'جدة', name: 'مردم نفايات البناء والهدم - 01' },
    { id: 17, group: 'جدة', name: 'مرفق معالجة نفايات البناء والهدم - 04' },
    { id: 18, group: 'جدة', name: 'مرفق معالجة نفايات البناء والهدم - 05' },
    { id: 19, group: 'جدة', name: 'مرفق معالجة نفايات البناء والهدم - 06' },
    { id: 20, group: 'جدة', name: 'مرفق معالجة نفايات البناء والهدم - 07' },
    { id: 21, group: 'مكة', name: 'مرفق معالجة نفايات البناء والهدم النوع 1 – 01 و02' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-mwan-green mb-4">
          الفرص استثماريه في البناء والهدم
        </h3>
      </div>

      {/* Waste Management Opportunities Section */}
      <div className="card bg-white/5 border-mwan-green/30 mb-6">
        <div className="p-6">
          <h4 className="text-2xl font-bold text-mwan-green mb-6 text-right">
          </h4>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-mwan-green/50">
                  <th className="px-4 py-3 text-mwan-green font-bold text-sm">#</th>
                  <th className="px-4 py-3 text-mwan-green font-bold text-sm">المجموعة الجغرافية</th>
                  <th className="px-4 py-3 text-mwan-green font-bold text-sm">اسم الفرصة الاستثمارية</th>
                </tr>
              </thead>
              <tbody>
                {wasteManagementOpportunities.map((opportunity, index) => (
                  <tr 
                    key={opportunity.id}
                    className={`border-b border-white/10 hover:bg-mwan-green/10 transition-colors ${
                      index % 2 === 0 ? 'bg-white/5' : 'bg-white/2'
                    }`}
                  >
                    <td className="px-4 py-3 text-white">{opportunity.id}</td>
                    <td className="px-4 py-3 text-white">{opportunity.group}</td>
                    <td className="px-4 py-3 text-white">{opportunity.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionDemolitionOpportunities;

