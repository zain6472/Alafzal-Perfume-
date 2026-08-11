"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-black">
      <div className="max-w-md mx-auto px-5">
        <p className="font-body text-xs tracking-wider3 uppercase mb-3 text-gold text-center">Welcome Back</p>
        <h1 className="font-display font-light mb-10 text-ivory text-center" style={{ fontSize: "clamp(2rem,4vw,2.6rem)" }}>
          Sign In To Your Account
        </h1>

        {submitted ? (
          <p className="font-body text-sm flex items-center justify-center gap-2 text-gold">
            <Check size={16} /> You&apos;re signed in — welcome back.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="font-body text-xs tracking-wider uppercase mb-2 block text-beige">Email Address</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border border-gold/25 px-4 py-3.5 font-body text-sm outline-none text-ivory"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase mb-2 block text-beige">Password</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent border border-gold/25 px-4 py-3.5 font-body text-sm outline-none text-ivory"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-body text-xs tracking-wider2 uppercase mt-2 transition hover:opacity-85 bg-gold text-black"
            >
              Sign In
            </button>
          </form>
        )}

        <p className="font-body text-sm text-center mt-8 text-beige">
          Don&apos;t have an account?{" "}
          <Link href="/account/signup" className="underline text-gold">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
