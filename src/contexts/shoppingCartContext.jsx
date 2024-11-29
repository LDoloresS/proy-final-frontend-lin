import { createContext, useCallback, useMemo, useState } from "react";

export const ShoppingCartContext = createContext({
    products: [],
    totalAmount: 0,
    addProduct: () => { },
    removeProduct: () => { },
    removeAllProduct: () => { },
    clearShoppingCart: () => { },
    orders: [],
    addOrder: () => { },
});

export const ShoppingCartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const totalAmount = useMemo(() => {
        return products.reduce((total, product) => total + product.precio * product.quantity, 0);
    }, [products]);

    const addProduct = useCallback((product) => {
        setProducts((prevProducts) => {
            const existingProduct = prevProducts.find((p) => p.id === product.id);
            if (existingProduct) {
                // Incrementar la cantidad del producto existente
                return prevProducts.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                // Agregar un nuevo producto con cantidad inicial de 1
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    }, []);

    const removeProduct = useCallback((productId) => {
        setProducts((prevProducts) => {
            const existingProduct = prevProducts.find((p) => p.id === productId);
            if (existingProduct && existingProduct.quantity > 1) {
                // Reducir la cantidad
                return prevProducts.map((p) =>
                    p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
                );
            } else {
                // Eliminar el producto
                return prevProducts.filter((p) => p.id !== productId);
            }
        });
    }, []);

    const removeAllProduct = useCallback((productId) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    }, []);

    const clearShoppingCart = useCallback(() => setProducts([]), []);

    const [orders, setOrder] = useState([]);

    const addOrder = useCallback((order) => {
        setOrder((prevOrders) => [...prevOrders, order]);
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{
                products,
                totalAmount,
                addProduct,
                removeProduct,
                removeAllProduct,
                clearShoppingCart,
                orders,
                addOrder,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
