"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Perfume Collection", href: "/collection" },
  { label: "Best Sellers", href: "/#shop-section" },
  { label: "My Account", href: "/account/login" },
  { label: "About", href: "/#notes-section" },
];

export default function MobileMenu() {
  const { menuOpen, setMenuOpen } = useStore();

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        style={{ opacity: menuOpen ? 1 : 0 }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`absolute top-0 left-0 h-full w-72 bg-ink flex flex-col p-8 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={() => setMenuOpen(false)} className="self-end mb-10 text-ivory">
          <X size={22} />
        </button>
        <div className="flex flex-col gap-6 font-display text-2xl text-ivory">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-left hover:opacity-70">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
