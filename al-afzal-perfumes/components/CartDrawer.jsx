// components/CartDrawer.jsx
"use client";

import { useStore } from "@/context/StoreContext";
import { BRAND_INFO } from "@/lib/data";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*New Order - ${BRAND_INFO.name}*\n\n`;
    message += `*Items Ordered:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.volume}) x ${item.quantity} = Rs. ${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\n*Total Amount:* Rs. ${cartTotal.toLocaleString()}\n\n`;
    message += `Please confirm my order and share payment/delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ink border-l border-gold/20 text-ivory flex flex-col justify-between p-6 shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gold/10">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-display font-medium tracking-wide">Your Shopping Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 divide-y divide-gold/10">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <ShoppingBag className="w-12 h-12 text-gold/30 mx-auto" />
                <p className="text-ivory/60 font-body">Your cart is currently empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2 border border-gold/40 text-gold text-sm tracking-wider uppercase hover:bg-gold hover:text-black transition-all"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex items-center space-x-4">
                  <div className="relative w-16 h-16 bg-black border border-gold/20 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg leading-tight">{item.name}</h3>
                    <p className="text-xs text-gold/80 mb-2">{item.volume}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-gold/30 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs hover:bg-gold/20"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs hover:bg-gold/20"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm text-gold">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-ivory/40 hover:text-red-400 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-gold/10 space-y-4">
              <div className="flex justify-between items-center text-lg font-display">
                <span>Subtotal</span>
                <span className="text-gold font-semibold">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-ivory/50">Taxes and shipping calculated via WhatsApp support.</p>
              
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 bg-gold text-black font-medium tracking-wider uppercase flex items-center justify-center space-x-2 hover:bg-goldLight transition-all"
              >
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}