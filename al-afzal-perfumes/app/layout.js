// app/layout.js
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Google Fonts setup via next/font for better performance
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Al Afzal Perfumes | Luxury Fragrance Collection",
  description:
    "Discover premium luxury fragrances, long-lasting oriental ouds, and fresh floral perfumes crafted by Al Afzal Perfumes.",
  keywords: [
    "Perfumes in Pakistan",
    "Luxury Fragrances",
    "Al Afzal Perfumes",
    "Oud Fragrances",
    "Long lasting perfumes",
  ],
  openGraph: {
    title: "Al Afzal Perfumes | Luxury Fragrance Collection",
    description:
      "Explore exquisite luxury scents designed for distinction and lasting elegance.",
    url: "https://alafzalperfumes.com",
    siteName: "Al Afzal Perfumes",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-black text-ivory font-body antialiased selection:bg-gold selection:text-black">
        <StoreProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </StoreProvider>
      </body>
    </html>
  );
}