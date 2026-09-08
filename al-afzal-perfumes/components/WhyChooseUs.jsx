import { Clock3, SprayCan, Star, Gift, Truck, MapPin } from "lucide-react";

const WHY_US = [
  { icon: Clock3, title: "Long Lasting", text: "دیرپا خوشبو — engineered to stay with you through the whole day." },
  { icon: SprayCan, title: "Premium Quality", text: "اعلیٰ معیار — carefully selected fragrances, bottled with care." },
  { icon: Star, title: "Highly Concentrated", text: "زیادہ مرکوز خوشبو — a richer, more noticeable scent in every spray." },
  { icon: Gift, title: "Perfect For Gifting", text: "تحفے کے لیے بہترین — elegant packaging that feels like a gift on its own." },
  { icon: Truck, title: "Cash On Delivery", text: "کیش آن ڈیلیوری — order with confidence, pay when it arrives." },
  { icon: MapPin, title: "Delivery All Pakistan", text: "پورے پاکستان میں ڈیلیوری — wherever you are, we'll get it to you." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-wider3 uppercase mb-3 text-brown">Why Al Afzal</p>
          <h2 className="font-display font-light text-brown" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Crafted For The Discerning
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {WHY_US.map((f) => (
            <div key={f.title} className="p-8 flex flex-col gap-4 bg-beige">
              <f.icon size={26} className="text-brown" strokeWidth={1.5} />
              <h3 className="font-display text-xl text-brown">{f.title}</h3>
              <p className="font-body text-sm leading-relaxed text-brown/75">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
