import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import ProductCard from "./ProductCard";
import { getBestSellers } from "@/lib/data";

export default function ProductGrid() {
  const list = getBestSellers();

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32 bg-black">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
        <div>
          <SectionEyebrow>Featured</SectionEyebrow>
          <h2 className="font-display font-light text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Best Selling Fragrances
          </h2>
        </div>
        <Link
          href="/collection"
          className="flex items-center gap-2 font-body text-xs tracking-wider2 uppercase border border-gold/25 px-5 py-3 transition hover:bg-white/5 text-ivory"
        >
          View Full Collection <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
