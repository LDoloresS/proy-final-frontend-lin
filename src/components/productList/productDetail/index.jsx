import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import productListData from '../productListData';

const ProductDetail = () => {
    const { id } = useParams();
    const productMap = Object.fromEntries(productListData.map(product => [product.id, product]));
    const product = productMap[id];
    const src = new URL(`../../../assets/products/${product.imagen}`, import.meta.url).href;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    const { products, addProduct } = useShoppingCart();

    return (
        <div className="flex flex-col items-center justify-center p-4 gap-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
                {product.nombre}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <p className="text-gray-700  my-4">
                        <strong>Descripción:</strong> {product.descripcion}
                    </p>
                    <p className="mb-4">
                        <strong>Aspectos técnicos:</strong> {product.aspectostecnicos}
                    </p>
                    <p className="mb-4">
                        <strong>Aplicación:</strong> {product.aplicacion}
                    </p>
                    <div className="flex justify-between items-center gap-4 md:gap-10">
                        <p>
                            <strong>Marca:</strong> {product.marca.id}
                        </p>
                        <p>
                            <strong>Categoría:</strong> {product.categoria.id}
                        </p>
                    </div>
                    <p className="my-4">
                        <strong>Precio:</strong> S/ {product.precio}
                    </p>
                </div>
                <img
                    src={src}
                    alt={product.nombre}
                    className="w-full h-48 object-contain mx-auto rounded"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-medium px-4 py-2 rounded-lg disabled:bg-gray-200 disabled:text-gray-400"
                    onClick={async () => {
                        await addProduct(product); // Espera a que se complete
                        handleBack(); // Luego navega
                    }}
                >
                    Agregar al carrito
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg"
                    onClick={handleBack}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
