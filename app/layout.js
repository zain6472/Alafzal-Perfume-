import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import SearchOverlay from "@/components/SearchOverlay";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Al Afzal Perfume Collection | Essence of Fine Fragrance",
  description:
    "Discover your signature fragrance. 11 handpicked long-lasting perfumes, premium quality, cash on delivery all over Pakistan.",
  keywords: ["Al Afzal", "perfume Pakistan", "fragrance", "eau de parfum", "cash on delivery perfume", "Wanted X", "Royal Amber"],
  openGraph: {
    title: "Al Afzal Perfume Collection | Essence of Fine Fragrance",
    description: "خوشبو جو بنے آپ کی پہچان — luxury scents designed to express your personality.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-black min-h-screen">
        <StoreProvider>
          <AnnouncementBar />
          <Header />
          <div style={{ paddingTop: "36px" }}>
            {children}
            <Footer />
          </div>
          <MobileMenu />
          <SearchOverlay />
          <CartDrawer />
          <WhatsAppFloat />
        </StoreProvider>
      </body>
    </html>
  );
}
