import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import ProductSearch from "../productSearch";
import CategoriesMenuBurger from "../categoriesMenuBurger";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useCartVisibility } from "../../hooks/useCartVisibilit";
import ShoppingCart from "../shopping-cart/shoppingCart";

const Header = () => {
    const { products } = useShoppingCart();
    const { showCartCarrito, toggleCart, closeCart, isCartButtonDisabled, } = useCartVisibility();
    const cartRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                cartRef.current && !cartRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                closeCart();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [closeCart]);

    {/*de momento necesario para "ProductSearch"*/ }
    const products1 = [
        {
            id: 1,
            name: "Producto 1"
        },
        {
            id: 2,
            name: "Producto 2"
        },
        {
            id: 3,
            name: "Producto 3"
        }
    ];

    return (
        <header className="sticky top-0 z-50 bg-gray-800 text-white">
            <div className="grid grid-cols-3 gap-4 p-2 items-center md:flex md:justify-between md:whitespace-nowrap">
                {/* Logo */}
                <Link to="/" className="col-span-1 order-1 md:order-1 mr-auto">
                    <img src="logo.svg" alt="logo" className="w-24 md:w-32 lg:w-40 h-8 sm:h-10" />
                </Link>

                {/* Autenticación */}
                <Link to="/login" className="col-span-1 order-2 md:order-4 md:ml-auto hover:bg-slate-200/20 p-2 rounded-full" rel="noopener noreferrer">
                    Iniciar Sesión
                </Link>

                {/* Carrito e-commerce */}
                <div className="relative col-span-1 order-3 md:order-5 flex items-center flex-no-wrap ml-auto">
                    <button
                        ref={buttonRef}
                        className="hover:bg-slate-200/20 rounded-full p-2 text-white flex items-center gap-1"
                        onClick={toggleCart}
                        disabled={isCartButtonDisabled}
                    >
                        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                            <title>Carrito de Compras</title>
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 6h11.88l-1.06 5H9.28L7.2 6zm-1.6-4l1.38 6.63L5.1 15h13.1l1.75-8H6.2L5.6 2H2V0h2l1.6 7.33L5.1 15H17v2H6a2 2 0 01-2-2v-.03L5.2 4h-.02L4.8 2z"></path>
                        </svg>
                        <div className="bg-white p-1 text-xs text-gray-900 w-6 h-6 rounded-[50%]">
                            <span>{products.length}</span>
                        </div>
                    </button>
                    {showCartCarrito && (
                        <div ref={cartRef} className="absolute top-12 right-0 w-max">
                            <ShoppingCart className="text-black" />
                        </div>
                    )}
                </div>

                {/* Barra de búsqueda de productos */}
                <div className="col-span-2 order-4 md:order-3 w-full text-black">
                    <ProductSearch products={products1} />
                </div>
                <CategoriesMenuBurger className="col-span-1 order-5 md:order-2 text-black ml-auto md:mr-auto flex justify-center items-center p-6" />
            </div>
        </header>
    );
};

export default Header;
