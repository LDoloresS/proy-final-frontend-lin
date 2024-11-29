import React, { useState } from 'react';
import productListData from './productListData.js';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detalle/${id}`);
    };
    
    return (
        <div className="w-full max-w-6xl px-4 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productListData.map((product) => {
                const src = new URL(`../../assets/products/${product.imagen}`, import.meta.url).href;
                return (
                    <div
                        key={product.id}
                        className="rounded-lg border bg-gray-400/10 flex flex-col h-full"
                    >
                        <img
                            src={src}
                            alt={product.nombre}
                            className="w-full h-48 object-contain bg-white mx-auto"
                        />
                        <div className="flex flex-col flex-grow gap-y-4 px-4 py-6">
                            <h1 className="font-medium">{product.nombre}</h1>
                            <p className="text-sm line-clamp-3">{product.descripcion}</p>
                            <span className="font-medium">S/ {product.precio}</span>
                            <button
                                className="bg-indigo-600 hover:bg-indigo-800 text-slate-200 mt-auto font-medium border rounded-lg px-4 py-2 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200"
                                onClick={() => handleClick(product.id)}
                            >
                                Ver más
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
