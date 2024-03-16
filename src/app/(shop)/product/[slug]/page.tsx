export const revalidate = 604800;

import { getProductBySlug } from "@/actions/products/get-product-byslug";
import {
  MobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { StockLabel } from "@/components/product/stock-label/StockLabel";
import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product?.title} | Teslo Shop`,
    description: product?.description,
   /*  openGraph: {
      title: `${product?.title} | Teslo Shop`,
      description: product?.description ?? " ",
      images: [`/products/${product?.images[1]}`],
    }, */
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid mb-20 mt-5 grid-cols-1 md:grid-cols-3 gap-3 ">
      {/* SlideShow */}

      <div className="md:col-span-2 col-span-1">
        {/* Desktop SlideShow */}
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />

        {/* Mobile Slideshow */}
        <MobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <StockLabel slug={slug} />
        <h1 className={`${titleFont.className} font-bold text-xl antialiased`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">${product.price}</p>

        <AddToCart product={product} />

        {/* Descripcion */}

        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
