"use client";
import { QuantitySelector, SizeSelector } from "@/components";
import { CartProduct, Product, Size } from "@/interfaces/product.interface";
import { useCartStore } from "@/store/cart/cart-store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState<boolean>(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: size,
      quantity: quantity,
      slug: product.slug,
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setSize(undefined);
    setQuantity(1);
  };

  return (
    <>
      {posted && !size && (
        <span className="text-red-500 font-semibold fade-in">
          Debe seleccionar una talla*
        </span>
      )}

      {/* Selector de talles */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChange={setSize}
      />

      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      {/* Boton agregar */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
