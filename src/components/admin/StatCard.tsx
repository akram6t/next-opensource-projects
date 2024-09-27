import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-muted text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <div className="flex items-baseline">
        <p className="text-foreground text-2xl font-semibold">{value}</p>
        <p className={`ml-2 flex items-baseline text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ChevronUp className="w-3 h-3 mr-1" /> : <ChevronDown className="w-3 h-3 mr-1" />}
          {Math.abs(change)}%
        </p>
      </div>
    </div>
  );
};

export default StatCard;