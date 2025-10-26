import React from "react";
import { ClickableCard } from "./index";
import { H2, H3, H4, H5 } from "../Typography";

export default function ClickableCardDemo() {
  const handleClick = (variant: string, state: string) => {
    console.log(`Clicked ${variant} ${state} card`);
  };

  return (
    <div
      style={{
        padding: "var(--spacing-large)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-large)",
        marginBottom: "var(--spacing-large)",
      }}
    >
      {/* Default Cards */}
      <section>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-medium)",
            justifyContent: "flex-start",
          }}
        >
          <ClickableCard
            title="Feature Highlight"
            description="This is a clickable card that demonstrates the component's functionality with a longer description that spans multiple lines."
            imageSrc="/card-1.png"
            imageAlt="Feature image"
            onClick={() => handleClick("Default", "Normal")}
            data-qa="clickable-card-default"
          />
          <ClickableCard
            title="Product Showcase"
            description="Another example of a clickable card with different content to show the versatility of the component."
            imageSrc="/card-2.png"
            imageAlt="Product image"
            onClick={() => handleClick("Default", "Normal")}
            data-qa="clickable-card-product"
          />
          <ClickableCard
            title="Service Overview"
            description="A third example showing how the card adapts to different content lengths and purposes."
            imageSrc="/card-3.png"
            imageAlt="Service image"
            onClick={() => handleClick("Default", "Normal")}
            data-qa="clickable-card-service"
          />
          <ClickableCard
            title="Service Overview"
            description="A third example showing how the card adapts to different content lengths and purposes."
            imageSrc="/card-3.png"
            imageAlt="Service image"
            onClick={() => handleClick("Default", "Normal")}
            data-qa="clickable-card-service"
          />
        </div>
      </section>

      {/* Inverse Cards */}
      <section
        style={{
          backgroundColor: "var(--inverse-background-primary, #112231)",
          padding: "var(--spacing-large)",
          borderRadius: "var(--corner-radius-medium)",
          marginTop: "var(--spacing-large)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-medium)",
            justifyContent: "flex-start",
          }}
        >
          <ClickableCard
            title="Dark Theme Card"
            description="This is an inverse variant of the clickable card with dark background and white text."
            imageSrc="/card-4.png"
            imageAlt="Dark theme image"
            inverse={true}
            onClick={() => handleClick("Inverse", "Normal")}
            data-qa="clickable-card-inverse"
          />
          <ClickableCard
            title="Premium Feature"
            description="Another inverse card showing how the dark theme works with different content."
            imageSrc="/card-5.png"
            imageAlt="Premium image"
            inverse={true}
            onClick={() => handleClick("Inverse", "Normal")}
            data-qa="clickable-card-premium"
          />
          <ClickableCard
            title="Dark Theme Card"
            description="This is an inverse variant of the clickable card with dark background and white text."
            imageSrc="/card-4.png"
            imageAlt="Dark theme image"
            inverse={true}
            onClick={() => handleClick("Inverse", "Normal")}
            data-qa="clickable-card-inverse"
          />
        </div>
      </section>
    </div>
  );
}
