import React from "react";
import Hero from "./Hero";

export default function HeroDemo() {
  const handleCtaClick = () => {
    console.log("CTA clicked - Open a free Monzo account");
  };

  return (
    <div>
      <h2>Hero Block Demo</h2>
      <Hero
        title="Get the banking app that's loved by millions"
        description="Join 13 million customers who've switched to Monzo. Get instant notifications, budgeting tools, and a bank account that actually works for you."
        ctaLabel="Open a free Monzo account"
        ctaOnClick={handleCtaClick}
      />
    </div>
  );
}
