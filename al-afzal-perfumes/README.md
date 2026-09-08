# Al Afzal Perfume Collection — Luxury Fragrance E-Commerce (Next.js)

A premium, conversion-focused fragrance storefront built with Next.js 14 (App Router), Tailwind CSS,
and lucide-react icons, using your real logo, product photography and brand copy.

## ⚠️ Before you launch — placeholders to replace

- **Prices**: every product currently shows `Rs. 2,500` as a placeholder (see `PLACEHOLDER_PRICE` in
  `lib/data.js`). Update the `price` field per product with your real prices.
- **Product photos**: only Wanted X, Royal Y, Bloom Aura and Royal Amber have real photos
  (in `public/brand/`). The other 7 fragrances (Urban Legend, Velvet Rush, Crystal Bloom, Night Pulse,
  Imperial Code, Pure One, Wild Signature) currently show an illustrated placeholder bottle — drop
  real photos into `public/brand/` and set the `image` field in `lib/data.js` once you have them.
- **Fragrance notes**: top/heart/base notes are marked "Details coming soon" — fill in `lib/data.js`
  once you have the real composition for each scent.
- **WhatsApp number**: already wired to `0302-6082823` throughout — double check this is the right
  number before going live.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

```
app/
  layout.js               → root layout: providers, header, overlays, footer, SEO metadata
  page.js                 → homepage (hero → categories → products → story → notes → why-us → testimonials → gallery → newsletter)
  product/[slug]/page.js  → dynamic product detail route (static params + per-product metadata)
  not-found.js            → custom 404
  globals.css             → Tailwind directives, fonts, focus/reduced-motion rules

components/                → one component per section (Header, Hero, ProductCard, ProductDetail, NotesPyramid, CartDrawer, etc.)
context/StoreContext.jsx   → cart, wishlist, and drawer/overlay state shared across routes via React Context
lib/data.js                 → product, category, and testimonial content — swap for a CMS or DB later
tailwind.config.js          → brand tokens (matte black, champagne gold, ivory, beige, brown), type scale, custom keyframes
```

## Notes for production

- **Imagery**: product bottles are original illustrated SVGs (`components/BottleSVG.jsx`) so the demo
  ships with zero licensing risk. Swap in real photography via `next/image` in `ProductCard` and
  `ProductDetail` — the layout is already sized for it.
- **Cart/checkout**: `CartDrawer` is functional client-side state; wire `Proceed to Checkout` to your
  payment provider (Stripe, etc.) and persist cart in a database or cookie for logged-in users.
- **Data**: `lib/data.js` is static for the demo. Replace with a CMS (Sanity/Contentful) or your own
  product database, and generate `generateStaticParams` from that source instead.
- **WhatsApp**: the phone number in `CartDrawer.jsx`, `ProductDetail.jsx`, and `WhatsAppFloat.jsx`
  (`10000000000`) is a placeholder — replace with your business number.
- **Fonts**: Cormorant Garamond (display) + Jost (body) load via `@import` in `globals.css`. For
  production, prefer `next/font/google` for better performance and no layout shift.
