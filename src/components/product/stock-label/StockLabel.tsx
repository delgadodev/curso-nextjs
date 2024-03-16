"use client";

import { getStockBySlug } from "@/actions/products/get-stock-byslug";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} font-bold text-lg antialiased bg-gray-200 animate-pulse rounded-md`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${titleFont.className} font-bold text-lg antialiased`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
