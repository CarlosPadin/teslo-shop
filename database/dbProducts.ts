import { IProducts } from "@/interfaces";
import { db } from "./";
import { Product } from "@/models";

export const getProductBySlug = async (
  slug: string
): Promise<IProducts | null> => {
  db.connect();
  const product = await Product.findOne({ slug }).lean();
  db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}

export const getAllProductsBySlug = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};

export const getProductsByTerm = async (term: string): Promise<IProducts[]> => {
  term = term.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: term },
  })
    .select("title inStock price slug images -_id")
    .lean();
  await db.disconnect();

  return products;
};

export const getAllProducts = async (): Promise<IProducts[]> => {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();

  return JSON.parse( JSON.stringify( products ) );
};