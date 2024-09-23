import React from 'react';
import SettingsForm from '@/components/admin/SettingsForm';

const SettingsPage: React.FC = () => {
  return (
    <div className="p-4 space-y-6 dark:bg-gray-900">
      <h1 className="text-2xl font-bold dark:text-white">Settings</h1>
      <SettingsForm />
    </div>
  );
};

export default SettingsPage;