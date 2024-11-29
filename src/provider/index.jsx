import { ShoppingCartProvider } from "../contexts/shoppingCartContext";
import { CartVisibilityProvider } from "../contexts/cartVisibilityContext";

export const GlobalProvider = ({ children }) => {
  return (
    <ShoppingCartProvider>
      <CartVisibilityProvider>{children}</CartVisibilityProvider>
    </ShoppingCartProvider>
  );
};
