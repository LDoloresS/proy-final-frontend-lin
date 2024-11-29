import React from "react";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Link } from "react-router-dom";
import OrderDetailCard from "./orderDetailCard";

const OrderDetailLast = () => {
    const { orders } = useShoppingCart();
    const currentpath = window.location.pathname;
    let index = currentpath.substring(currentpath.lastIndexOf('/') + 1);
    if (index === 'last') { index = orders.length - 1; }
    return (
        <section className="flex flex-col justify-between items-center bg-white dark:bg-gray-200">
            <div className="flex w-80 items-center justify-center relative mb-6">
                <Link to="/my-orders" className="absolute left-0 cursor-pointer text-6xl">&lt;</Link>
                <h1 className="text-3xl font-bold">Mi Pedido</h1>
            </div>
            <div className="flex flex-col w-80">
                {orders?.slice(-1)[0].products.map(product => (
                    <div key={product.id}>
                        <OrderDetailCard product={product} />
                    </div>
                ))}
            </div>
            <hr className="bg-gray-400 w-80 mb-2 h-1 border-none" />
            <div className="flex flex-col w-80 justify-between items-center border-2 border-gray-500 rounded-lg p-4 m-2">
                <p>
                    <span className="font-bold">Fecha:</span> {orders[index].fecha.toLocaleDateString("en-US")}
                </p>
                <p>
                    <span className="font-bold">Total:</span> <span className="text-lg font-medium">S/ {orders[index].totalPrecio}</span>
                </p>
            </div>
        </section>
    )
}

export default OrderDetailLast