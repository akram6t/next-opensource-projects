import React from 'react';
import ProductGrid from '@/components/admin/ProductGrid';
import SearchBar from '@/components/admin/SearchBar';
import { Button } from '@headlessui/react';
import { Plus, Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <div className="p-4 space-y-6 dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Products</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New product
        </Button>
      </div>
      
      <div className="flex space-x-4">
        <SearchBar placeholder="Search product..." className="flex-grow" />
        <Button>
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>
      
      <ProductGrid />
    </div>
  );
};

export default ProductsPage;