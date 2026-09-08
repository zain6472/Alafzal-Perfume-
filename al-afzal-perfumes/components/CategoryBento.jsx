import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { DISCOVER_TILES } from "@/lib/data";

export default function CategoryBento() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32 bg-black">
      <SectionEyebrow>Discover</SectionEyebrow>
      <h2 className="font-display font-light mb-12 text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
        Where To Start
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {DISCOVER_TILES.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            className={`relative overflow-hidden group cursor-pointer flex flex-col justify-end p-6 md:p-8 h-56 border border-gold/25 bg-gradient-to-br from-ink2 to-ink ${
              c.big ? "col-span-2 row-span-2 h-full md:h-auto" : ""
            }`}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle at 30% 20%, rgba(198,161,91,0.18), transparent 60%)" }}
            />
            <span className="font-body text-[10px] tracking-wider2 uppercase mb-2 relative z-10 text-gold">{c.desc}</span>
            <h3 className="font-display text-2xl md:text-3xl relative z-10 text-ivory">{c.name}</h3>
            <span className="font-body text-xs mt-3 tracking-wide flex items-center gap-1 relative z-10 opacity-0 group-hover:opacity-100 transition text-goldLight">
              Discover <ChevronRight size={13} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
