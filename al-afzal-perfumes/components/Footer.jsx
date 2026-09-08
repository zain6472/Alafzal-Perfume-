import { MessageCircle, Facebook, Phone, Mail } from "lucide-react";
import TikTokIcon from "./TikTokIcon";

const COLUMNS = [
  { h: "Shop", items: [{ label: "Perfume Collection", href: "/collection" }, { label: "Best Sellers", href: "/#shop-section" }, { label: "My Account", href: "/account/login" }] },
  { h: "Help", items: [{ label: "Order via WhatsApp", href: "https://wa.me/923026082823" }, { label: "Cash on Delivery", href: "/#" }, { label: "Delivery All Pakistan", href: "/#" }] },
];

// NOTE: Facebook/TikTok links below are built from the page name you gave us —
// double check they match your exact page URLs and swap if not.
const SOCIALS = [
  { icon: Facebook, href: "https://www.facebook.com/alafzalperfumecollection", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@alafzalperfumecollection", label: "TikTok" },
  { icon: MessageCircle, href: "https://wa.me/923026082823", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-black border-t border-gold/25">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/brand/logo.jpeg" alt="Al Afzal Perfume Collection" className="h-9 w-9 object-contain rounded-full" />
            <p className="font-display text-xl tracking-wider2 text-ivory">AL AFZAL</p>
          </div>
          <p className="font-body text-sm leading-relaxed mb-5 text-beige">
            خوشبو جو بنے آپ کی پہچان — 11 handpicked fragrances, long lasting and premium quality, delivered all over Pakistan.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center border border-gold/25 text-ivory hover:border-gold hover:text-gold transition"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.h}>
            <p className="font-body text-xs tracking-wider2 uppercase mb-5 text-gold">{col.h}</p>
            <div className="flex flex-col gap-3">
              {col.items.map((it) => (
                <a key={it.label} href={it.href} className="font-body text-sm hover:opacity-70 transition text-beige">
                  {it.label}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div>
          <p className="font-body text-xs tracking-wider2 uppercase mb-5 text-gold">Contact Us</p>
          <div className="flex flex-col gap-3 font-body text-sm text-beige">
            <a href="tel:+923026082823" className="flex items-center gap-2 hover:opacity-70 transition">
              <Phone size={15} /> 0302-6082823
            </a>
            <a href="mailto:alafzalperfumecollection@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition break-all">
              <Mail size={15} /> alafzalperfumecollection@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gold/25">
        <p className="font-body text-xs text-beige/60">© 2026 Al Afzal Perfume Collection. All rights reserved.</p>
        <p className="font-body text-xs text-beige/60">The Art of Fine Fragrance.</p>
      </div>
    </footer>
  );
}
