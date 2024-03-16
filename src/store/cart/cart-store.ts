import type { CartProduct } from "@/interfaces/product.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  getTotalItems: () => number;
  /* updateProductQuantity */
  /*  removeProductToCart */
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        /* Revisar si el producto existe en el carrito con la talla seleccionada */
        const existingProduct = cart.some(
          (p) => p.id === product.id && p.size === product.size
        );

        /* Si el producto no existe, agregarlo al carrito */
        if (!existingProduct) {
          set({ cart: [...cart, product] });
        }

        /* Si el producto existe, actualizar la cantidad */
        const updatedCart = cart.map((p) => {
          if (p.id === product.id && p.size === product.size) {
            return { ...p, quantity: p.quantity + product.quantity };
          }
          return p;
        });

        set({ cart: updatedCart });
      },
      getTotalItems: () => {
        const { cart } = get();

        return cart.reduce((acc, product) => acc + product.quantity, 0);
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
