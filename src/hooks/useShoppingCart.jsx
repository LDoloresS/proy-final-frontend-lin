import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

export const useShoppingCart = () => useContext(ShoppingCartContext);
