import { Gender } from "@prisma/client";

export interface Product {
  id: string;
  description: string | null;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  gender: Gender;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  size: Size;
  quantity: number;
  image: string;
}

export type Category = "men" | "women" | "kid" | "unisex";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type Type = "shirts" | "pants" | "hoodies" | "hats";
