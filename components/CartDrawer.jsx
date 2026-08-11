"use client";

import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import BottleSVG from "./BottleSVG";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, changeQty, removeItem } = useStore();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${cartOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        style={{ opacity: cartOpen ? 1 : 0 }}
        onClick={() => setCartOpen(false)}
      />
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-ink flex flex-col transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gold/25">
          <h3 className="font-display text-2xl text-ivory">Your Bag ({cart.length})</h3>
          <button onClick={() => setCartOpen(false)} className="text-ivory"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 && <p className="font-body text-sm text-beige">Your bag is empty — find your signature scent.</p>}
          {cart.map((it) => (
            <div key={it.id} className="flex gap-4">
              <div className="w-16 h-20 flex items-center justify-center shrink-0 bg-ink2 overflow-hidden">
                {it.image ? (
                  <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
                ) : (
                  <BottleSVG bottle="#151515" liquid="#7a4b23" cap="#C6A15B" className="h-14" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-display text-lg text-ivory">{it.name}</p>
                <p className="font-body text-xs mb-2 text-beige">Rs. {it.price.toLocaleString()}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gold/25">
                    <button onClick={() => changeQty(it.id, -1)} className="px-2 py-1 text-ivory"><Minus size={12} /></button>
                    <span className="px-3 font-body text-xs text-ivory">{it.qty}</span>
                    <button onClick={() => changeQty(it.id, 1)} className="px-2 py-1 text-ivory"><Plus size={12} /></button>
                  </div>
                  <button onClick={() => removeItem(it.id)} className="font-body text-[11px] underline text-beige">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="p-6 border-t border-gold/25">
            <div className="flex justify-between mb-5 font-body text-sm text-ivory">
              <span>Subtotal</span><span className="font-display text-lg">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full py-4 font-body text-xs tracking-wider2 uppercase mb-3 transition hover:opacity-85 bg-gold text-black">
              Proceed to Checkout
            </button>
            <a
              href={`https://wa.me/923026082823?text=${encodeURIComponent(
                "Hi, I'd like to order: " + cart.map((i) => `${i.name} x${i.qty}`).join(", ")
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 font-body text-xs tracking-wider2 uppercase border border-gold/25 transition hover:bg-white/5 text-ivory"
            >
              <MessageCircle size={15} /> Order via WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
