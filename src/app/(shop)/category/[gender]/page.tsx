export const revalidate = 60;
import { ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination } from "@/components";
import { Gender } from "@prisma/client";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { gender } = params;
  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect(`/category/${gender}`);
  }

  const labels: Record<string, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para todos",
  };

  return (
    <>
      <Title
        title={`Articulos ${labels[gender]}`}
        subtitle=""
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
