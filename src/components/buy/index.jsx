import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RemoveIcon } from "./icons";
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { useCartVisibility } from '../../hooks/useCartVisibilit';

const BuyRegister = () => {
    const {
        products,
        removeProduct,
        removeAllProduct,
        totalAmount,
        addProduct,
        clearShoppingCart,
        addOrder,
    } = useShoppingCart();
    const { enableCartButton } = useCartVisibility();
    const navigate = useNavigate();

    const handleRemoveProduct = (id) => {
        removeProduct(id);
        setTimeout(() => {
            const totalUnits = products.reduce((acc, product) => acc + product.quantity, 0);
            if (products.length === 1 && totalUnits === 1) {
                enableCartButton();
                navigate("/");
            }
        }, 0);
    }

    const handleRemoveAllProduct = (id) => {
        removeAllProduct(id);
        setTimeout(() => {
            if (products.length === 1) {
                enableCartButton();
                navigate("/");
            }
        }, 0);
    }

    const handleContinueShopping = () => {
        enableCartButton();
        navigate(`/`);
    };
    const handleCancel = () => {
        clearShoppingCart();
        enableCartButton();
        navigate(`/`);
    };

    function handleOrder() {
        const orderToAdd = {
            id: new Date().getTime(),
            fecha: new Date(),
            products: products,
            totalProducts: products.length,
            totalPrecio: totalAmount,
            userClient: { id: 1 },
        }
        addOrder(orderToAdd);
        clearShoppingCart();
        enableCartButton();
        navigate(`/my-orders/last`);
    }

    return (
        <form action="" className="bg-white dark:bg-gray-200 p-4 rounded-lg border shadow-lg">
            <div className="grid grid-cols-4 gap-4 font-bold text-xl">
                <h3 className="mb-4">Producto</h3>
                <h3 className="mb-4">Precio</h3>
                <h3 className="mb-4">Cantidad</h3>
                <h3 className="mb-4">Subtotal</h3>
            </div>
            <hr className="border-gray-400" />
            {products.map((product) => {
                const src = new URL(`../../assets/products/${product.imagen}`, import.meta.url).href;
                return (
                    <div key={product.id}>
                        <div className="grid items-center justify-between grid-cols-4 gap-4">
                            <div className='md:flex gap-x-4'>
                                <button
                                    type="button"
                                    className="text-white hover:text-slate-200 rounded-full w-auto h-auto"
                                    onClick={() => handleRemoveAllProduct(product.id)}
                                >
                                    <RemoveIcon />
                                </button>
                                <img src={src} alt={product.nombre} className="w-12" />
                                <h3>{product.nombre}</h3>
                            </div>
                            <h3>{product.precio}</h3>
                            <div className='md:flex gap-x-4 my-2'>
                                <div className="flex items-center border-2 border-gray-300 rounded px-2 py-1 mr-2 gap-3">
                                    <h3>{product.quantity}</h3>
                                    <div className="flex flex-col items-center justify-center text-xl font-bold">
                                        <button
                                            type="button"
                                            className="px-1 rounded-full hover:bg-gray-200"
                                            onClick={() => addProduct(product)}
                                        >
                                            +
                                        </button>
                                        <button
                                            type="button"
                                            className="px-1 rounded-full hover:bg-gray-200"
                                            onClick={() => handleRemoveProduct(product.id)}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h3>{product.precio * product.quantity}</h3>
                        </div>
                        <hr className="border-gray-400" />
                    </div>
                );
            })}
            <div className="grid grid-cols-4 gap-4 items-end mt-4">
                <h3 className="col-span-3 text-right font-bold text-xl">Total:</h3>
                <h3 className="text-xl font-bold">{totalAmount}</h3>
                <div className="col-span-4 text-left mt-2">
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left font-medium gap-4">
                <div className="order-3 md:order-1 md:col-start-1">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={handleContinueShopping}
                    >
                        Seguir Comprando
                    </button>
                </div>
                <div className="order-2 md:order-2 md:col-start-2 flex justify-center items-center">
                    <button
                        type="button"
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>
                </div>
                <div className="order-1 md:order-3 md:col-start-3 md:text-right">
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg"
                        onClick={handleOrder}
                    >
                        Pedir
                    </button>
                </div>
            </div>

        </form>
    );
};

export default BuyRegister;
