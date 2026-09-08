// app/product/[slug]/page.js
import { PRODUCTS } from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} | Al Afzal Perfumes`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}