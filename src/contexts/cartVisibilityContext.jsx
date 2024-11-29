import { createContext, useState } from "react";

export const CartVisibilityContext = createContext();

export const CartVisibilityProvider = ({ children }) => {
    const [showCartCarrito, setShowCartCarrito] = useState(false);
    const [isCartButtonDisabled, setIsCartButtonDisabled] = useState(false);

    const openCart = () => setShowCartCarrito(true);
    const closeCart = () => setShowCartCarrito(false);
    const toggleCart = () => setShowCartCarrito((prev) => !prev);

    const disableCartButton = () => setIsCartButtonDisabled(true);
    const enableCartButton = () => setIsCartButtonDisabled(false);

    return (
        <CartVisibilityContext.Provider
            value={{
                showCartCarrito,
                openCart,
                closeCart,
                toggleCart,
                isCartButtonDisabled,
                disableCartButton,
                enableCartButton,
            }}
        >
            {children}
        </CartVisibilityContext.Provider>
    );
};
