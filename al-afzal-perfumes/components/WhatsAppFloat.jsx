import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923026082823"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition hover:scale-105"
      style={{ background: "#25D366" }}
      aria-label="Order via WhatsApp"
    >
      <MessageCircle size={24} color="#fff" fill="#fff" />
    </a>
  );
}
