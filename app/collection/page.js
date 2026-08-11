import ProductCard from "@/components/ProductCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import { PRODUCTS } from "@/lib/data";

export const metadata = {
  title: "Perfume Collection | Al Afzal Perfume Collection",
  description: "Browse all 11 Al Afzal fragrances — long lasting, premium quality, perfect for gifting. Cash on delivery all over Pakistan.",
};

export default function CollectionPage() {
  return (
    <div className="pt-28 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <SectionEyebrow>All Fragrances</SectionEyebrow>
          <h1 className="font-display font-light text-ivory mb-4" style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}>
            Perfume Collection
          </h1>
          <p className="font-body text-sm max-w-lg mx-auto text-beige">
            11 handpicked fragrances — long lasting, premium quality, perfect for every occasion. Cash on delivery, all over Pakistan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
