// lib/data.js

export const BRAND_INFO = {
  name: "Al Afzal Perfumes",
  tagline: "Luxury Fragrance Collection",
  whatsappNumber: "03026082823", // Format without spaces or dashes for direct links
  whatsappDisplay: "0302-6082823",[cite: 7]
  instagram: "https://instagram.com/alafzalperfumes",
  facebook: "https://facebook.com/alafzalperfumes",
};

export const CATEGORIES = [
  { id: "all", name: "All Fragrances" },
  { id: "oriental", name: "Oriental & Oud" },
  { id: "fresh", name: "Fresh & Citrus" },
  { id: "floral", name: "Floral & Sweet" },
  { id: "woody", name: "Woody & Spicy" },
];

export const PRODUCTS = [
  {
    id: "wanted-x",
    slug: "wanted-x",
    name: "Wanted X",
    category: "woody",
    price: 3500,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 128,
    isBestSeller: true,
    isNew: false,
    image: "/brand/wanted-x.jpeg",
    shortDescription: "A bold, captivating fragrance designed for modern elegance and lasting impact.",
    description: "Wanted X combines deep woody notes with a refined spicy undertone, crafted for those who demand distinction and sophistication in every room they enter.",
    notes: {
      top: "Bergamot, Pink Pepper, Grapefruit",
      heart: "Cardamom, Cinnamon, Nutmeg",
      base: "Cedarwood, Amber, Tonka Bean"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  },
  {
    id: "royal-y",
    slug: "royal-y",
    name: "Royal Y",
    category: "oriental",
    price: 3800,
    originalPrice: 4500,
    rating: 5.0,
    reviewsCount: 94,
    isBestSeller: true,
    isNew: false,
    image: "/brand/royal-y.jpeg",
    shortDescription: "Majestic oriental notes woven with rich amber and rare spices.",
    description: "Royal Y embodies opulence. With warm amber and exotic woods, it delivers an unforgettable trail of luxury fit for royalty.",
    notes: {
      top: "Saffron, Incense, Bergamot",
      heart: "Damask Rose, Amberwood, Oud",
      base: "Rich Amber, Musk, Sandalwood"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Extrait de Parfum"
  },
  {
    id: "bloom-aura",
    slug: "bloom-aura",
    name: "Bloom Aura",
    category: "floral",
    price: 3200,
    originalPrice: 3800,
    rating: 4.8,
    reviewsCount: 67,
    isBestSeller: false,
    isNew: true,
    image: "/brand/bloom-aura.jpeg",
    shortDescription: "A vibrant floral bouquet radiating warmth, sweetness, and grace.",
    description: "Bloom Aura opens with fresh blossom petals and settles into a creamy vanilla finish, perfect for romantic evenings and bright sunny days.",
    notes: {
      top: "Jasmine, Neroli, Mandarin",
      heart: "Tuberose, Orange Blossom, Ylang-Ylang",
      base: "Vanilla, White Musk, Cedar"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  },
  {
    id: "royal-amber",
    slug: "royal-amber",
    name: "Royal Amber",
    category: "oriental",
    price: 4000,
    originalPrice: 4800,
    rating: 4.9,
    reviewsCount: 112,
    isBestSeller: true,
    isNew: false,
    image: "/brand/royal-amber.jpeg",
    shortDescription: "Deep golden amber blended with precious woods and sweet resinous notes.",
    description: "An intense, comforting fragrance celebrating golden amber, velvety vanilla, and smoky woods for an unforgettable signature scent.",
    notes: {
      top: "Bergamot, Sweet Amber",
      heart: "Labdanum, Patchouli, Benzoin",
      base: "Vanilla Bean, Ambergris, Dark Oud"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Extrait de Parfum"
  },
  {
    id: "urban-legend",
    slug: "urban-legend",
    name: "Urban Legend",
    category: "fresh",
    price: 2900,
    originalPrice: 3500,
    rating: 4.7,
    reviewsCount: 45,
    isBestSeller: false,
    isNew: false,
    image: "/brand/urban-legend.jpeg",
    shortDescription: "Crisp citrus combined with marine breeze and dynamic woody tones.",
    description: "Designed for the active lifestyle, Urban Legend offers instant freshness that evolves into a confident, clean masculine base.",
    notes: {
      top: "Lemon Zest, Sea Salt, Mint",
      heart: "Lavender, Sage, Geranium",
      base: "Vetiver, Oakmoss, Amberwood"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  },
  {
    id: "velvet-rush",
    slug: "velvet-rush",
    name: "Velvet Rush",
    category: "floral",
    price: 3400,
    originalPrice: 4000,
    rating: 4.8,
    reviewsCount: 53,
    isBestSeller: false,
    isNew: true,
    image: "/brand/velvet-rush.jpeg",
    shortDescription: "Smooth, velvety gourmand notes touching rich floral accords.",
    description: "Velvet Rush is a seductive blend of dark berry accents, lush florals, and warm praline, creating a soft yet undeniable presence.",
    notes: {
      top: "Blackberry, Pink Pepper, Pear",
      heart: "Red Rose, Iris, Jasmine",
      base: "Praline, Patchouli, Vanilla"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  },
  {
    id: "crystal-bloom",
    slug: "crystal-bloom",
    name: "Crystal Bloom",
    category: "fresh",
    price: 3100,
    originalPrice: 3600,
    rating: 4.6,
    reviewsCount: 39,
    isBestSeller: false,
    isNew: false,
    image: "/brand/crystal-bloom.jpeg",
    shortDescription: "Pure, luminous freshness with sparkling citrus and delicate blossoms.",
    description: "As clear and invigorating as morning dew, Crystal Bloom pairs crisp fruit notes with airy white flowers for everyday elegance.",
    notes: {
      top: "Green Apple, White Peach, Bergamot",
      heart: "Lily of the Valley, Peony, Lotus",
      base: "Clean Musk, Cedarwood"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Toilette"
  },
  {
    id: "night-pulse",
    slug: "night-pulse",
    name: "Night Pulse",
    category: "woody",
    price: 3600,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 81,
    isBestSeller: false,
    isNew: false,
    image: "/brand/night-pulse.jpeg",
    shortDescription: "An intoxicating evening scent filled with leather, spice, and dark woods.",
    description: "Crafted for nighttime occasions, Night Pulse releases warm spices, rich leather, and dark woods that mesmerize until dawn.",
    notes: {
      top: "Black Pepper, Cardamom, Tobacco Leaf",
      heart: "Leather, Rum, Iris",
      base: "Guaiac Wood, Tonka Bean, Benzoin"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  },
  {
    id: "imperial-code",
    slug: "imperial-code",
    name: "Imperial Code",
    category: "oriental",
    price: 4200,
    originalPrice: 5000,
    rating: 5.0,
    reviewsCount: 76,
    isBestSeller: true,
    isNew: false,
    image: "/brand/imperial-code.jpeg",
    shortDescription: "The pinnacle of luxury featuring majestic agarwood and dark spices.",
    description: "Imperial Code is an authoritative scent built around premium oud, smoky resins, and rare eastern spices for true fragrance connoisseurs.",
    notes: {
      top: "Spicy Nutmeg, Saffron, Rosewood",
      heart: "Smoky Incense, Patchouli, Oud",
      base: "Sandalswood, Leather, Ambergris"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Extrait de Parfum"
  },
  {
    id: "pure-one",
    slug: "pure-one",
    name: "Pure One",
    category: "fresh",
    price: 2800,
    originalPrice: 3300,
    rating: 4.7,
    reviewsCount: 42,
    isBestSeller: false,
    isNew: false,
    image: "/brand/pure-one.jpeg",
    shortDescription: "A minimalist, soothing unisex fragrance centered on clean musk and tea.",
    description: "Pure One brings harmony and serenity with subtle white tea, soft citrus, and transparent musk. Light, versatile, and refined.",
    notes: {
      top: "White Tea, Bergamot, Grapefruit",
      heart: "Violet Leaf, Cardamom, Rose",
      base: "White Musk, Light Amber, Cedar"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  },
  {
    id: "wild-signature",
    slug: "wild-signature",
    name: "Wild Signature",
    category: "woody",
    price: 3700,
    originalPrice: 4400,
    rating: 4.8,
    reviewsCount: 64,
    isBestSeller: false,
    isNew: true,
    image: "/brand/wild-signature.jpeg",
    shortDescription: "An untamed woody aroma with warm amber and earthy vetiver.",
    description: "Wild Signature leaves a memorable impression through raw cedarwood, smoky vetiver, and spicy pink pepper.",
    notes: {
      top: "Pink Pepper, Cypress, Bergamot",
      heart: "Vetiver, Bourbon Geranium, Cedar",
      base: "Patchouli, Vetiver Root, Benzoin"
    },
    volume: "100ml / 3.4 fl oz",
    concentration: "Eau de Parfum"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Kamran Akram",
    location: "Lahore",
    rating: 5,
    comment: "Royal Y is easily one of the best fragrances I've bought in Pakistan. Long lasting and gets compliments everywhere."
  },
  {
    id: 2,
    name: "Sarah Khan",
    location: "Karachi",
    rating: 5,
    comment: "Bloom Aura smells so divine and sweet. Delivery was quick and the packaging is very premium!"
  },
  {
    id: 3,
    name: "Zubair Ahmed",
    location: "Islamabad",
    rating: 5,
    comment: "Wanted X has incredible projection and lasts over 10 hours easily. Highly recommended!"
  }
];