// components/ProductDetail.jsx
"use client";

import { useState } from "react";
import { Minus, Plus, Heart, MessageCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import BottleSVG from "./BottleSVG";
import ProductCard from "./ProductCard";
import SectionEyebrow from "./SectionEyebrow";
import { TESTIMONIALS, getRelated, BRAND_INFO } from "@/lib/data";
import Product3DViewer from "./Product3DViewer";

export default function ProductDetail({ product }) {
  const { addToCart, wishlist, toggleWish } = useStore();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  const wished = wishlist.has(product.id);
  const related = getRelated(product.slug, 3);
  const discount = product.oldPrice ? Math.round(100 - (product.price / product.oldPrice) * 100) : null;

  const handleBuyNow = () => {
    const message = `*New Order - ${BRAND_INFO.name}*\n\n*Item:* ${product.name} (${product.volume}) x ${qty} = Rs. ${(product.price * qty).toLocaleString()}\n\n*Total Amount:* Rs. ${(product.price * qty).toLocaleString()}\n\nPlease confirm my order and share payment/delivery details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-28 pb-10 bg-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-14">
          {/* Gallery */}
          <div>
            <div className="relative flex items-center justify-center h-[460px] mb-4 overflow-hidden group border border-gold/25 bg-gradient-to-br from-ink2 to-ink">
              {discount && (
                <span className="absolute top-5 left-5 font-body text-[10px] tracking-wider uppercase px-3 py-1.5 z-10 bg-gold text-black">
                  -{discount}%
                </span>
              )}
              {product.model3d ? (
                <Product3DViewer model={product.model3d} />
              ) : product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <BottleSVG bottle="#151515" liquid="#7a4b23" cap="#C6A15B" className="h-80 transition-transform duration-500 group-hover:scale-110" />
              )}
            </div>
            {!product.image && (
              <p className="font-body text-xs text-beige/70">Product photo coming soon — illustrated placeholder shown above.</p>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="font-body text-xs tracking-wider2 uppercase mb-3 text-gold">
              {product.tagline}{product.tag ? ` · ${product.tag}` : ""}
            </p>
            <h1 className="font-display font-light mb-3 text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              {product.name}
            </h1>
            <p className="font-body text-sm mb-6 text-beige">50 ML · Eau de Parfum</p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-3xl text-ivory">Rs. {product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="font-body text-base line-through text-beige/50">Rs. {product.oldPrice.toLocaleString()}</span>}
            </div>
            <p className="font-body text-sm leading-relaxed mb-8 text-beige">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gold/25">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-ivory" aria-label="Decrease quantity">
                  <Minus size={14} />
                </button>
                <span className="px-4 font-body text-sm text-ivory">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-3 text-ivory" aria-label="Increase quantity">
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={() => toggleWish(product.id)} className="p-3 border border-gold/25" aria-label="Toggle wishlist">
                <Heart size={17} fill={wished ? "#C6A15B" : "none"} stroke={wished ? "#C6A15B" : "#F8F4EC"} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => addToCart(product, qty)}
                className="flex-1 py-4 font-body text-xs tracking-wider2 uppercase transition hover:opacity-85 bg-gold text-black"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 py-4 font-body text-xs tracking-wider2 uppercase border border-gold/25 transition hover:bg-white/5 text-ivory"
              >
                Buy Now (WhatsApp)
              </button>
            </div>
            <a
              href={`https://wa.me/923026082823?text=${encodeURIComponent("Hi, I'm interested in " + product.name)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-4 font-body text-xs tracking-wider2 uppercase border transition hover:bg-white/5 text-ivory"
              style={{ borderColor: "#25D36688" }}
            >
              <MessageCircle size={15} color="#25D366" /> Order via WhatsApp
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-24">
          <div className="flex gap-8 mb-8 border-b border-gold/25">
            {["description", "how to use", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="pb-4 font-body text-xs tracking-wider2 uppercase transition"
                style={{
                  color: tab === t ? "#C6A15B" : "#EAE1CF",
                  borderBottom: tab === t ? "2px solid #C6A15B" : "2px solid transparent",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="max-w-2xl font-body text-sm leading-relaxed text-beige">
            {tab === "description" && <p>{product.description}</p>}
            {tab === "how to use" && (
              <p>Apply to pulse points — wrists, neck, behind the ears — after showering, when skin is slightly warm. One to two sprays for a full-day presence.</p>
            )}
            {tab === "reviews" && (
              <div className="flex flex-col gap-6">
                {TESTIMONIALS.slice(0, 3).map((t) => (
                  <div key={t.name}>
                    <span className="font-body text-xs text-ivory">{t.name}</span>
                    <p>{t.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <SectionEyebrow>You May Also Like</SectionEyebrow>
          <h2 className="font-display font-light mb-10 text-ivory" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
            Related Fragrances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {related.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function ProductDetail({ product }) {
  const { addToCart, wishlist, toggleWish } = useStore();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  const wished = wishlist.has(product.id);
  const related = getRelated(product.slug, 3);
  const discount = product.oldPrice ? Math.round(100 - (product.price / product.oldPrice) * 100) : null;

  return (
    <div className="pt-28 pb-10 bg-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-14">
          {/* Gallery */}
          <div>
            <div className="relative flex items-center justify-center h-[460px] mb-4 overflow-hidden group border border-gold/25 bg-gradient-to-br from-ink2 to-ink">
              {discount && (
                <span className="absolute top-5 left-5 font-body text-[10px] tracking-wider uppercase px-3 py-1.5 z-10 bg-gold text-black">
                  -{discount}%
                </span>
              )}
              {product.model3d ? (
  <Product3DViewer model={product.model3d} />
) : product.image ? (
  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
) : (
  <BottleSVG bottle="#151515" liquid="#7a4b23" cap="#C6A15B" className="h-80 transition-transform duration-500 group-hover:scale-110" />
)}
            </div>
            {!product.image && (
              <p className="font-body text-xs text-beige/70">Product photo coming soon — illustrated placeholder shown above.</p>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="font-body text-xs tracking-wider2 uppercase mb-3 text-gold">
              {product.tagline}{product.tag ? ` · ${product.tag}` : ""}
            </p>
            <h1 className="font-display font-light mb-3 text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              {product.name}
            </h1>
            <p className="font-body text-sm mb-6 text-beige">50 ML · Eau de Parfum</p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-3xl text-ivory">Rs. {product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="font-body text-base line-through text-beige/50">Rs. {product.oldPrice.toLocaleString()}</span>}
            </div>
            <p className="font-body text-sm leading-relaxed mb-8 text-beige">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gold/25">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-ivory" aria-label="Decrease quantity">
                  <Minus size={14} />
                </button>
                <span className="px-4 font-body text-sm text-ivory">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-3 text-ivory" aria-label="Increase quantity">
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={() => toggleWish(product.id)} className="p-3 border border-gold/25" aria-label="Toggle wishlist">
                <Heart size={17} fill={wished ? "#C6A15B" : "none"} stroke={wished ? "#C6A15B" : "#F8F4EC"} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => addToCart(product, qty)}
                className="flex-1 py-4 font-body text-xs tracking-wider2 uppercase transition hover:opacity-85 bg-gold text-black"
              >
                Add to Cart
              </button>
              <button className="flex-1 py-4 font-body text-xs tracking-wider2 uppercase border border-gold/25 transition hover:bg-white/5 text-ivory">
                Buy Now
              </button>
            </div>
            <a
              href={`https://wa.me/923026082823?text=${encodeURIComponent("Hi, I'm interested in " + product.name)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-4 font-body text-xs tracking-wider2 uppercase border transition hover:bg-white/5 text-ivory"
              style={{ borderColor: "#25D36688" }}
            >
              <MessageCircle size={15} color="#25D366" /> Order via WhatsApp
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-24">
          <div className="flex gap-8 mb-8 border-b border-gold/25">
            {["description", "how to use", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="pb-4 font-body text-xs tracking-wider2 uppercase transition"
                style={{
                  color: tab === t ? "#C6A15B" : "#EAE1CF",
                  borderBottom: tab === t ? "2px solid #C6A15B" : "2px solid transparent",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="max-w-2xl font-body text-sm leading-relaxed text-beige">
            {tab === "description" && <p>{product.description}</p>}
            {tab === "how to use" && (
              <p>Apply to pulse points — wrists, neck, behind the ears — after showering, when skin is slightly warm. One to two sprays for a full-day presence.</p>
            )}
            {tab === "reviews" && (
              <div className="flex flex-col gap-6">
                {TESTIMONIALS.slice(0, 3).map((t) => (
                  <div key={t.name}>
                    <span className="font-body text-xs text-ivory">{t.name}</span>
                    <p>{t.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <SectionEyebrow>You May Also Like</SectionEyebrow>
          <h2 className="font-display font-light mb-10 text-ivory" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
            Related Fragrances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {related.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
