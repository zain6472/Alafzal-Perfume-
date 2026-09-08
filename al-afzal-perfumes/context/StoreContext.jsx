"use client";

import React, { createContext, useContext, useState } from 'react';

// Types for clarity (optional)
// type CartItem = { id: string; name: string; price: number; quantity: number; image: string; volume?: string; };

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  // ----- Cart State -----
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ----- Wishlist -----
  const [wishlist, setWishlist] = useState(new Set());

  // ----- UI toggles (kept for compatibility) -----
  const [cartOpen, setCartOpen] = useState(false); // legacy, not used now
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ----- Cart helpers -----
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      // store minimal needed fields for checkout
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: qty,
        image: product.image,
        volume: product.volume,
      };
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, newQty) } : i))
    );
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // ----- Wishlist helper -----
  const toggleWish = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const value = {
    // cart related
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    // wishlist
    wishlist,
    toggleWish,
    // legacy UI toggles (kept for other components)
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    menuOpen,
    setMenuOpen,
    // derived counts
    cartCount: cart.reduce((s, i) => s + i.quantity, 0),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
