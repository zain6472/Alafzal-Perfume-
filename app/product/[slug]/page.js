import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { PRODUCTS, getProductBySlug } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Fragrance Not Found | Al Afzal Perfume Collection" };
  return {
    title: `${product.name} | Al Afzal Perfume Collection`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Al Afzal Perfume Collection`,
      description: product.description,
      type: "website",
    },
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
