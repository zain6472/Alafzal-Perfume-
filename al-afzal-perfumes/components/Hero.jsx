import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-end overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(198,161,91,0.16), transparent 60%), linear-gradient(180deg, #14100c 0%, #0B0A08 70%)",
        }}
      />
      <div className="absolute right-[4%] top-[10%] w-[46%] max-w-lg opacity-95 drop-shadow-2xl animate-fadeUp">
        <img src="/brand/royal-amber.jpeg" alt="Al Afzal Royal Amber" className="w-full h-auto object-contain rounded-sm" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-10 pb-20 md:pb-28">
        <p className="font-body text-xs md:text-sm tracking-wider3 uppercase mb-3 text-gold animate-fadeUp">
          Al Afzal Perfume Collection
        </p>
        <p className="font-display text-lg italic mb-5 text-goldLight animate-fadeUp" style={{ animationDelay: "0.05s" }}>
          خوشبو جو بنے آپ کی پہچان
        </p>
        <h1
          className="font-display font-light leading-[0.95] text-ivory animate-fadeUp"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)", animationDelay: "0.1s" }}
        >
          Discover Your
          <br />
          <span className="italic text-goldLight">Signature</span> Fragrance
        </h1>
        <p className="font-body max-w-md mt-6 text-sm md:text-base text-beige animate-fadeUp" style={{ animationDelay: "0.2s" }}>
          11 handpicked fragrances designed to express your personality — long lasting, premium quality, cash on delivery all over Pakistan.
        </p>
        <div className="flex flex-wrap gap-4 mt-9 animate-fadeUp" style={{ animationDelay: "0.3s" }}>
          <Link
            href="/collection"
            className="px-8 py-4 font-body text-xs tracking-wider2 uppercase transition hover:opacity-85 bg-gold text-black"
          >
            Shop Collection
          </Link>
          <Link
            href="/#notes-section"
            className="px-8 py-4 font-body text-xs tracking-wider2 uppercase border border-gold/25 transition hover:bg-white/5 text-ivory"
          >
            Explore Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
}
