import React from "react";

const OrderDetailCard = ({ product }) => {
    const src = new URL(`../../assets/products/${product.imagen}`, import.meta.url).href;
    return (
        <div className="bg-gray-400 flex justify-between items-center mb-2 p-2 rounded-lg">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src={src}
                        alt={product.nombre}
                    />
                </figure>
                <p className="text-sm font-light">
                    {product.nombre}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">
                    S/ {product.precio} x {product.quantity}
                </p>
            </div>
        </div>
    );
};

export default OrderDetailCard;