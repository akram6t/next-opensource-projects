import React from 'react';

const ProductGrid: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, stock: 100 },
    { id: 2, name: 'Product 2', price: 29.99, stock: 50 },
    { id: 3, name: 'Product 3', price: 39.99, stock: 75 },
    // Add more mock products as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-base p-4 rounded-lg shadow-md">
          <h3 className="text-foreground text-lg font-medium mb-2">{product.name}</h3>
          <p className="text-muted">Price: ${product.price}</p>
          <p className="text-muted">Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;