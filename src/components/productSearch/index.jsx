import React, { useState } from "react";

const ProductSearch = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar productos basados en el término de búsqueda
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <div className="w-full max-w-md mx-auto mt-8">
    <div className="flex w-full max-w-md mx-auto justify-center aitems-center">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm m-auto focus:outline-none focus:border-blue-500"
      />
{/* 
      <ul className="mt-4 space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li
              key={product.id}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              {product.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No se encontraron productos.</p>
        )}
      </ul> */}
    </div>
  );
};

export default ProductSearch;
