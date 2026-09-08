"use client";

import { useState } from "react";
import SectionEyebrow from "./SectionEyebrow";

const TIERS = [
  { key: "top", label: "Top Notes", sub: "The fresh opening aroma", items: ["Bergamot", "Pink Pepper", "Mandarin"], width: "55%" },
  { key: "heart", label: "Heart Notes", sub: "The main personality of the fragrance", items: ["Rose", "Oud", "Iris"], width: "75%" },
  { key: "base", label: "Base Notes", sub: "The long-lasting signature", items: ["Amber", "Sandalwood", "Musk"], width: "100%" },
];

export default function NotesPyramid() {
  const [active, setActive] = useState("heart");

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <SectionEyebrow>How A Scent Unfolds</SectionEyebrow>
          <h2 className="font-display font-light text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            The Fragrance Pyramid
          </h2>
          <p className="font-body text-sm mt-3 max-w-lg mx-auto text-beige">
            Hover each layer to see how a fragrance moves from first spray to final trace.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 relative">
          {TIERS.slice().reverse().map((t) => (
            <div
              key={t.key}
              onMouseEnter={() => setActive(t.key)}
              className="relative py-7 px-6 text-center cursor-pointer transition-all duration-500 group border"
              style={{
                width: t.width,
                background: active === t.key ? "linear-gradient(180deg, #241811, #1B140F)" : "#1B140F",
                borderColor: active === t.key ? "#C6A15B" : "rgba(198,161,91,0.25)",
              }}
            >
              {active === t.key && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 -top-3 w-1 h-24 rounded-full pointer-events-none animate-riseGlow"
                  style={{ background: "linear-gradient(180deg, #C6A15B, transparent)" }}
                />
              )}
              <p className="font-body text-[10px] tracking-wider2 uppercase mb-1" style={{ color: active === t.key ? "#C6A15B" : "#EAE1CF" }}>
                {t.label}
              </p>
              <p className="font-display text-lg md:text-xl mb-2 text-ivory">{t.sub}</p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {t.items.map((it) => (
                  <span key={it} className="font-body text-[11px] px-3 py-1 border rounded-full border-gold/25 text-beige">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
