"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, wishlist, setCartOpen, setSearchOpen, setMenuOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-40 transition-all duration-500 border-b ${
        scrolled ? "bg-black border-gold/25" : "bg-gradient-to-b from-black/75 to-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-ivory">
          <Menu size={22} />
        </button>

        <Link href="/" className="flex items-center gap-2.5">
          <img src="/brand/logo.jpeg" alt="Al Afzal Perfume Collection" className="h-10 w-10 object-contain rounded-full" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl tracking-wider2 text-ivory">AL AFZAL</span>
            <span className="font-body text-[9px] tracking-wider2 uppercase text-gold">Perfume Collection</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 font-body text-xs tracking-wider2 uppercase text-beige">
          <Link href="/" className="hover:opacity-70 transition">Home</Link>
          <Link href="/collection" className="hover:opacity-70 transition">Perfume Collection</Link>
          <Link href="/#notes-section" className="hover:opacity-70 transition">About</Link>
        </nav>

        <div className="flex items-center gap-4 md:gap-5 text-ivory">
          <button onClick={() => setSearchOpen(true)} className="hover:opacity-70 transition" aria-label="Search">
            <Search size={19} />
          </button>
          <Link href="/account/login" className="hidden md:inline-flex hover:opacity-70 transition" aria-label="Account">
            <User size={19} />
          </Link>
          <button className="relative hover:opacity-70 transition" aria-label="Wishlist">
            <Heart size={19} />
            {wishlist.size > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 flex items-center justify-center rounded-full bg-gold text-black">
                {wishlist.size}
              </span>
            )}
          </button>
          <button onClick={() => setCartOpen(true)} className="relative hover:opacity-70 transition" aria-label="Cart">
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 flex items-center justify-center rounded-full bg-gold text-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
