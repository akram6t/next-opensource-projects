import React from 'react';

interface ChartProps {
  title: string;
  type: 'pie' | 'bar';
}

const Chart: React.FC<ChartProps> = ({ title, type }) => {
  return (
    <div className="bg-base p-4 rounded-lg shadow-md">
      <h3 className="text-foreground text-lg font-medium mb-4">{title}</h3>
      <div className="h-64 flex items-center justify-center">
        <p className="text-muted">
          {type === 'pie' ? 'Pie' : 'Bar'} chart placeholder
        </p>
      </div>
    </div>
  );
};

export default Chart;