import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import EmptyShoppingCart from "./empty-shopping-cart";
import { TrashIcon } from "./icons";
import { useCartVisibility } from "../../hooks/useCartVisibilit";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const { products, removeProduct, totalAmount, clearShoppingCart } = useShoppingCart();
  const { closeCart, disableCartButton } = useCartVisibility();

  if (products.length === 0) return <EmptyShoppingCart />;

  const handleClickBuy = () => {
    navigate(`/buy`, { state: { products } });
    closeCart();
    disableCartButton();
  };

  return (
    <div className="bg-white text-black p-4 rounded-lg border shadow-lg">
      <div className="grid gap-y-3 py-3 overflow-y-auto max-h-72 p-4">
        {products.map((product) => {
          const src = new URL(`../../assets/products/${product.imagen}`, import.meta.url).href;
          return (
            <div key={product.id} className="flex gap-x-4 items-center">
              <img src={src} alt={product.nombre} className="w-12" />
              <h5 className="w-32 text-ellipsis truncate font-medium">
                {product.nombre}
              </h5>
              <span className="ml-auto">S/ {product.precio} x {product.quantity}</span>
              <div>
                <button
                  className="bg-red-600 hover:bg-red-800 text-white hover:text-slate-200 rounded-full p-2"
                  onClick={() => removeProduct(product.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between pt-2 border-t">
        <span className="font-medium text-xl">Total:</span>
        <span className="font-medium text-xl">S/ {totalAmount}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between pt-2 gap-4">
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-800 text-slate-200 px-4 py-2 mt-2 rounded-lg"
          onClick={handleClickBuy}
        >
          Comprar
        </button>
        <button
          className="w-full bg-gray-900 text-white px-4 py-2 mt-2 rounded-lg hover:bg-gray-800"
          onClick={clearShoppingCart}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
