import { useContext } from "react";
import { CartVisibilityContext } from "../contexts/cartVisibilityContext";

export const useCartVisibility = () => useContext(CartVisibilityContext);
