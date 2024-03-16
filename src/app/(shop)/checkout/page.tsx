import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 sm:px-0 px-10">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}

          <div className="flex flex-col mt-5 ">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  className="mr-5 rounded"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  width={100}
                  height={100}
                  alt={product.title}
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>

            <div className="mb-10">
              <p className="mb-2 text-xl"> Allan Delgado</p>
              <p className="mb-2"> Calle 123</p>
              <p className="mb-2"> Ciudad, Pais</p>
              <p className="mb-2">CP 4200</p>
            </div>

            {/* DIVIDER */}

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2 font-bold">Resumen de Orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Impuestos (21%)</span>
              <span className="text-right">$ 20</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-right mt-5 text-2xl">$120</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              {/* Disclaimer */}

              <p className="text-xs mb-5">
                Al hacer clic en{" "}
                <span className="font-semibold">&quot;Colocar orden&quot;</span>
                , aceptas nuestras Condiciones de uso, la{" "}
                <span className="font-semibold underline">
                  Política de privacidad
                </span>{" "}
                y el{" "}
                <span className="font-semibold underline">
                  Acuerdo de licencia de usuario final
                </span>
                .
              </p>

              <Link
                className="btn-primary flex justify-center"
                href="/orders/1234"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
