export default function BrandStory() {
  return (
    <section className="relative bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <p className="font-body text-xs tracking-wider3 uppercase mb-3 text-brown">Our Philosophy</p>
          <h2 className="font-display font-light leading-tight mb-6 text-brown" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            The Art Of Creating Memories Through Fragrance
          </h2>
          <p className="font-body text-sm md:text-base leading-relaxed mb-5 text-brown/85">
            Fragrance is never just a scent — it&apos;s part of your personality, your style and your identity. At Al Afzal
            Perfume Collection, we&apos;ve curated 11 fragrances chosen with beauty, refinement and long-lasting impression
            in mind.
          </p>
          <p className="font-body text-sm md:text-base leading-relaxed mb-8 text-brown/85">
            Whether it&apos;s a daily office routine, meeting someone special, attending an event, or simply completing
            your personality with a beautiful scent — there&apos;s a fragrance here for you. We don&apos;t just sell
            perfume; we want every Al Afzal scent to become a beautiful part of how people remember you.
          </p>
          <div className="flex gap-10 flex-wrap">
            <div>
              <p className="font-display text-3xl text-brown">11</p>
              <p className="font-body text-xs uppercase tracking-wide text-brown/60">Signature Fragrances</p>
            </div>
            <div>
              <p className="font-display text-3xl text-brown">50ML</p>
              <p className="font-body text-xs uppercase tracking-wide text-brown/60">Full Size Bottles</p>
            </div>
            <div>
              <p className="font-display text-3xl text-brown">COD</p>
              <p className="font-body text-xs uppercase tracking-wide text-brown/60">All Over Pakistan</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center h-[420px] relative bg-beige overflow-hidden">
          <img src="/brand/wanted-x.jpeg" alt="Al Afzal Wanted X" className="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-brown/15" />
        </div>
      </div>
    </section>
  );
}
