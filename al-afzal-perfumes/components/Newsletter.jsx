"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-24 md:py-28 bg-gradient-to-br from-ink2 to-black">
      <div className="max-w-xl mx-auto px-5 text-center">
        <SectionEyebrow>Stay In Scent</SectionEyebrow>
        <h2 className="font-display font-light mb-4 text-ivory" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
          Join Our Fragrance Family
        </h2>
        <p className="font-body text-sm mb-8 text-beige">
          Early access to new launches, fragrance guidance, and 10% off your first order.
        </p>
        {sent ? (
          <p className="font-body text-sm flex items-center justify-center gap-2 text-gold">
            <Check size={16} /> You&apos;re on the list — welcome to Al Afzal.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              required
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-gold/25 px-5 py-4 font-body text-sm outline-none text-ivory"
            />
            <button
              type="submit"
              className="font-body text-xs tracking-wider2 uppercase px-7 py-4 transition hover:opacity-85 bg-gold text-black"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
