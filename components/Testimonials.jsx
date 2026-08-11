"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import Stars from "./Stars";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <h2 className="font-display font-light mb-12 text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          Loved By Our Clients
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl bg-ink2 text-gold border border-gold/25">
            {t.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>
        <Stars rating={t.rating} size={16} />
        <p className="font-display text-2xl md:text-3xl font-light italic my-6 leading-snug text-ivory">&ldquo;{t.text}&rdquo;</p>
        <p className="font-body text-xs tracking-wider2 uppercase text-gold">{t.name}</p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="w-10 h-10 flex items-center justify-center border rounded-full transition hover:bg-white/5 border-gold/25 text-ivory"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setI((i + 1) % TESTIMONIALS.length)}
            className="w-10 h-10 flex items-center justify-center border rounded-full transition hover:bg-white/5 border-gold/25 text-ivory"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
