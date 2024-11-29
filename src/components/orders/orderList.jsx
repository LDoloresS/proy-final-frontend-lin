import React from "react";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Link } from "react-router-dom";
import OrderCard from "./orderCard";

const OrderList = () => {
    const { orders } = useShoppingCart();

    return (
        <section className="flex flex-col justify-between items-center bg-white dark:bg-gray-200">
            <h1 className='flex w-80 items-center justify-center relative mb-5 font-bold text-3xl gap-4'>Mis Pedidos</h1>
            {
                orders?.map((order, index) => (
                    <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrderCard
                            key={order.id}
                            fecha={order.fecha.toLocaleDateString("en-US")}
                            totalPrecio={order.totalPrecio}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
        </section>
    )
}

export default OrderList