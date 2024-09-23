import React from 'react';
import UserTable from '@/components/admin/UserTable';
import SearchBar from '@/components/admin/SearchBar';
import { Button } from '@headlessui/react';
import { Plus } from 'lucide-react';

const UsersPage: React.FC = () => {
  return (
    <div className="p-4 space-y-6 dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Users</h1>
        <Button
          as="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          New user
        </Button>
      </div>
      
      <SearchBar placeholder="Search user..." />
      
      <UserTable />
    </div>
  );
};

export default UsersPage;