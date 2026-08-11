// NOTE: Prices below are PLACEHOLDERS (Rs. 2,500) — swap in your real prices.
// Only 4 fragrances have real product photography uploaded so far
// (Royal Amber, Wanted X, Bloom Aura, Royal Y) — the rest use a
// brand-colored illustrated placeholder until real photos are supplied.

export const PLACEHOLDER_PRICE = 2500;

export const PRODUCTS = [
  { id: 1, slug: "wanted-x", name: "Wanted X", tagline: "Confident & Captivating",
    image: "/brand/wanted-x.jpeg", price: PLACEHOLDER_PRICE, oldPrice: null, tag: "Best Seller",
    description: "A bold, magnetic signature built for the person who walks in and is noticed first — confident, striking, unforgettable.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 2, slug: "royal-y", name: "Royal Y", tagline: "Refined & Modern",
    image: "/brand/royal-y.jpeg", price: PLACEHOLDER_PRICE, oldPrice: null, tag: "Best Seller",
    description: "A refined, modern personality in a bottle — polished and sophisticated for the everyday power move.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 3, slug: "bloom-aura", name: "Bloom Aura", tagline: "Soft & Beautiful",
    image: "/brand/bloom-aura.jpeg", price: PLACEHOLDER_PRICE, oldPrice: null, tag: "New",
    description: "A soft, beautiful and pleasant feeling from first spray to last — gentle, graceful, easy to fall for.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 4, slug: "royal-amber", name: "Royal Amber", tagline: "Warm & Majestic",
    image: "/brand/royal-amber.jpeg", price: PLACEHOLDER_PRICE, oldPrice: null, tag: "Best Seller",
    description: "A warm, majestic character — rich and regal, designed to leave a lasting royal impression.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 5, slug: "urban-legend", name: "Urban Legend", tagline: "Bold & Magnetic",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: "New",
    description: "A bold, magnetic presence built for the city — striking enough to become a story people tell.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 6, slug: "velvet-rush", name: "Velvet Rush", tagline: "Smooth & Elegant",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: null,
    description: "A smooth, elegant fragrance that moves with you — composed, graceful, quietly confident.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 7, slug: "crystal-bloom", name: "Crystal Bloom", tagline: "Fresh & Beautiful",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: null,
    description: "A crisp, radiant blend of freshness and beauty — light, clean, effortless to wear all day.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 8, slug: "night-pulse", name: "Night Pulse", tagline: "For Evenings & Special Occasions",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: "New",
    description: "A captivating choice for evenings and special occasions — a fragrance that owns the room after dark.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 9, slug: "imperial-code", name: "Imperial Code", tagline: "Classy & Sophisticated",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: null,
    description: "A classy, sophisticated personality distilled into a bottle — for those who lead the room quietly.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 10, slug: "pure-one", name: "Pure One", tagline: "Clean & Fresh",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: null,
    description: "A clean, fresh and pleasant everyday feeling — simple, honest, easy to reach for.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 11, slug: "wild-signature", name: "Wild Signature", tagline: "Unique & Unforgettable",
    image: null, price: PLACEHOLDER_PRICE, oldPrice: null, tag: null,
    description: "A unique, unforgettable scent that becomes yours alone — distinct, daring, memorable.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
  { id: 12, slug: "tester-kit-5ml", name: "5ML Tester Kit", tagline: "Try Before You Commit",
    image: "/brand/tester-kit.jpeg", price: PLACEHOLDER_PRICE, oldPrice: null, tag: "Popular",
    description: "Five 5ML testers in a luxury box — the easiest way to discover your signature scent before ordering the full 50ML bottle.",
    notes: { top: ["Details coming soon"], heart: ["Details coming soon"], base: ["Details coming soon"] } },
];

export const BEST_SELLER_SLUGS = ["wanted-x", "royal-y", "bloom-aura", "royal-amber", "urban-legend", "night-pulse"];

export const DISCOVER_TILES = [
  { name: "Best Sellers", desc: "Most loved fragrances", href: "/#shop-section", big: true },
  { name: "Full Collection", desc: "All 11 fragrances", href: "/collection" },
  { name: "5ML Tester Kit", desc: "Try before you commit", href: "/product/tester-kit-5ml" },
  { name: "New Arrivals", desc: "Just added", href: "/collection" },
];

export const TESTIMONIALS = [
  { name: "Ahmed R.", rating: 5, text: "Wanted X gets compliments every single time I wear it out. Packaging feels genuinely premium." },
  { name: "Sana M.", rating: 5, text: "Bloom Aura is soft and beautiful, exactly as described. Fast delivery too, all the way to Lahore." },
  { name: "Bilal K.", rating: 5, text: "Royal Amber is my everyday signature now. Long lasting — still there after 10+ hours." },
  { name: "Ayesha F.", rating: 4, text: "Ordered the 5ML Tester Kit first to try a few scents before committing. Great idea, loved the process." },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelated(slug, count = 3) {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}

export function getBestSellers() {
  return PRODUCTS.filter((p) => BEST_SELLER_SLUGS.includes(p.slug));
}
