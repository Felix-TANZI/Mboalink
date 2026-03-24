import React from 'react';

// Page utilisateur
export const UserDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tableau de bord utilisateur</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Propriétés</h3>
          <p className="text-3xl font-bold text-[#FFD700]">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Accès actifs</h3>
          <p className="text-3xl font-bold text-[#FFD700]">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Alertes</h3>
          <p className="text-3xl font-bold text-[#FFD700]">0</p>
        </div>
      </div>
    </div>
  );
};