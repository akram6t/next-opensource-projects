import React from 'react';
import AdminSidebar from '@/components/admin/Sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar/>
      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;