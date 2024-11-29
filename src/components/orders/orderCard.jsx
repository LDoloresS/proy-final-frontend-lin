import React from "react";

const OrderCard = (props) => {
    const {
        fecha,
        totalPrecio,
        totalProducts
    } = props;

    return (
        <div className="bg-gray-400 flex justify-between items-center mb-3 p-4 w-80 border-bottom rounded-lg">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span>Fecha: {fecha}</span>
                    <span>Total artículos: {totalProducts}</span>
                </p>
                <p>
                    Total: <span className='text-lg font-medium'>{totalPrecio}</span>
                </p>
            </div>
        </div>
    );
};

export default OrderCard;
