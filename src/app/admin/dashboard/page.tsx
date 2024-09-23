import React from 'react';
import { ChevronUp, ChevronDown, Users, ShoppingBag, MessageSquare } from 'lucide-react';
import StatCard from '@/components/admin/StatCard';
import Chart from '@/components/admin/Chart';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-4 space-y-6 dark:bg-gray-900">
      <h1 className="text-2xl font-bold dark:text-white">Hi, Welcome back 👋</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Weekly sales"
          value="714k" 
          change={2.6} 
          icon={<ShoppingBag className="w-6 h-6" />}
        />
        <StatCard 
          title="New users" 
          value="1.35m" 
          change={-0.1} 
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard 
          title="Purchase orders" 
          value="1.72m" 
          change={2.8} 
          icon={<ShoppingBag className="w-6 h-6" />} 
        />
        <StatCard 
          title="Messages" 
          value="234" 
          change={3.6} 
          icon={<MessageSquare className="w-6 h-6" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Chart title="Current visits" type="pie" />
        <Chart title="Website visits" type="bar" />
      </div>
    </div>
  );
};

export default DashboardPage;