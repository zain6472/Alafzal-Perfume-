"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/lib/data";
import BottleSVG from "./BottleSVG";

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const router = useRouter();
  const [q, setQ] = useState("");

  const results = q.length > 0
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.tagline.toLowerCase().includes(q.toLowerCase()))
    : [];

  const select = (p) => {
    setSearchOpen(false);
    setQ("");
    router.push(`/product/${p.slug}`);
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 bg-black/[0.97] ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div className="max-w-2xl mx-auto pt-28 px-6">
        <div className="flex items-center justify-between mb-8">
          <span className="font-body text-xs tracking-wider2 uppercase text-gold">Search</span>
          <button onClick={() => setSearchOpen(false)} className="text-ivory"><X size={22} /></button>
        </div>
        <div className="flex items-center border-b border-gold/25 pb-3">
          <Search size={20} className="text-gold" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search fragrances…"
            className="bg-transparent outline-none w-full ml-3 font-display text-2xl text-ivory"
          />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {results.map((r) => (
            <button key={r.id} onClick={() => select(r)} className="flex items-center gap-4 text-left group">
              <div className="w-12 h-16 flex items-center justify-center rounded bg-ink2 overflow-hidden">
                {r.image ? (
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                ) : (
                  <BottleSVG bottle="#151515" liquid="#7a4b23" cap="#C6A15B" className="w-6 h-10" />
                )}
              </div>
              <div>
                <p className="font-display text-lg group-hover:opacity-70 text-ivory">{r.name}</p>
                <p className="font-body text-xs text-beige">{r.tagline}</p>
              </div>
            </button>
          ))}
          {q.length > 0 && results.length === 0 && (
            <p className="font-body text-sm text-beige">No fragrances found for &ldquo;{q}&rdquo;.</p>
          )}
        </div>
      </div>
    </div>
  );
}
