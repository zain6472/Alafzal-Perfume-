import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 pt-28">
      <p className="font-body text-xs tracking-wider2 uppercase mb-4 text-gold">404</p>
      <h1 className="font-display font-light mb-4 text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
        This Fragrance Doesn&apos;t Exist
      </h1>
      <p className="font-body text-sm mb-8 text-beige">The page you&apos;re looking for may have been moved or discontinued.</p>
      <Link href="/" className="px-8 py-4 font-body text-xs tracking-wider2 uppercase bg-gold text-black">
        Return Home
      </Link>
    </div>
  );
}
