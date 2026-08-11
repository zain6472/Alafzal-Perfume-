import { Instagram } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import BottleSVG from "./BottleSVG";

// Real product photos mixed with illustrated placeholders until more lifestyle shots are supplied.
const TILES = [
  { image: "/brand/wanted-x.jpeg" },
  { image: "/brand/royal-y.jpeg" },
  { image: "/brand/bloom-aura.jpeg" },
  { image: "/brand/royal-amber.jpeg" },
  { image: "/brand/tester-kit.jpeg" },
  { image: null },
];

export default function InstagramGallery() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <SectionEyebrow>@alafzal.perfumes</SectionEyebrow>
            <h2 className="font-display font-light text-ivory" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              Follow The Journey
            </h2>
          </div>
          <Instagram size={26} className="text-gold" strokeWidth={1.5} />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {TILES.map((t, idx) => (
            <div
              key={idx}
              className="aspect-square flex items-center justify-center group cursor-pointer relative overflow-hidden bg-gradient-to-br from-ink2 to-ink"
            >
              {t.image ? (
                <img src={t.image} alt="Al Afzal Perfume Collection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <BottleSVG bottle="#151515" liquid="#7a4b23" cap="#C6A15B" className="h-16 group-hover:scale-110 transition-transform duration-500" />
              )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center bg-black/55">
                <Instagram size={18} className="text-ivory" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
