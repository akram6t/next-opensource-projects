import React from 'react';
import { Button } from '@headlessui/react';

const SettingsForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="siteName" className="block text-sm font-medium text-foreground">
          Site Name
        </label>
        <input
          type="text"
          id="siteName"
          name="siteName"
          className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary bg-background text-foreground"
        />
      </div>
      <div>
        <label htmlFor="siteDescription" className="block text-sm font-medium text-foreground">
          Site Description
        </label>
        <textarea
          id="siteDescription"
          name="siteDescription"
          rows={3}
          className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary bg-background text-foreground"
        ></textarea>
      </div>
      <div>
        <label htmlFor="adminEmail" className="block text-sm font-medium text-foreground">
          Admin Email
        </label>
        <input
          type="email"
          id="adminEmail"
          name="adminEmail"
          className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary bg-background text-foreground"
        />
      </div>
      <Button type="submit" className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light">
        Save Settings
      </Button>
    </form>
  );
};

export default SettingsForm;