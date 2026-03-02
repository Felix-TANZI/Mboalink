import React from 'react';

// Page admin
export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tableau de bord administrateur</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Utilisateurs</h3>
          <p className="text-3xl font-bold text-[#FFD700]">120</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Propriétés</h3>
          <p className="text-3xl font-bold text-[#FFD700]">85</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Uptime</h3>
          <p className="text-3xl font-bold text-[#FFD700]">99.9%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="text-3xl font-bold text-[#FFD700]">24/7</p>
        </div>
      </div>
    </div>
  );
};