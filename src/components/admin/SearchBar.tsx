import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, className }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
    </div>
  );
};

export default SearchBar;