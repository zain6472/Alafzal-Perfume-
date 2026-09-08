"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import BottleSVG from "./BottleSVG";

export default function ProductCard({ p }) {
  const { wishlist, toggleWish, addToCart } = useStore();
  const wished = wishlist.has(p.id);

  return (
    <div className="group flex flex-col">
      <Link
        href={`/product/${p.slug}`}
        className="relative flex items-center justify-center h-80 mb-5 cursor-pointer overflow-hidden border border-gold/25 bg-gradient-to-br from-ink2 to-ink"
      >
        {p.tag && (
          <span className="absolute top-4 left-4 font-body text-[10px] tracking-wider uppercase px-2.5 py-1 z-10 bg-gold text-black">
            {p.tag}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWish(p.id);
          }}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 transition"
          aria-label="Toggle wishlist"
        >
          <Heart size={15} fill={wished ? "#C6A15B" : "none"} stroke={wished ? "#C6A15B" : "#F8F4EC"} />
        </button>
        {p.image ? (
          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <BottleSVG bottle="#151515" liquid="#7a4b23" cap="#C6A15B" className="h-56 group-hover:scale-105 transition-transform duration-500" />
        )}
      </Link>
      <Link href={`/product/${p.slug}`} className="text-left">
        <p className="font-body text-[11px] tracking-wider uppercase mb-1 text-gold">{p.tagline}</p>
        <h3 className="font-display text-xl mb-1 text-ivory">{p.name}</h3>
        <p className="font-body text-xs mb-3 text-beige line-clamp-2">{p.description}</p>
      </Link>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl text-ivory">Rs. {p.price.toLocaleString()}</span>
          {p.oldPrice && <span className="font-body text-xs line-through text-beige/50">Rs. {p.oldPrice.toLocaleString()}</span>}
        </div>
        <button
          onClick={() => addToCart(p, 1)}
          className="font-body text-[10px] tracking-wider2 uppercase px-4 py-2.5 transition hover:opacity-85 bg-gold text-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
