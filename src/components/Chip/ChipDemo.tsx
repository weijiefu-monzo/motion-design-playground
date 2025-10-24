import React from "react";
import Chip from "./Chip";

export default function ChipDemo() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginBottom: "var(--spacing-large)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Chip label="Default" variant="default" />
          <Chip label="Positive" variant="positive" />
          <Chip label="Negative" variant="negative" />
          <Chip label="Neutral" variant="neutral" />
          <Chip label="Accent" variant="accent" />
        </div>
        <div
          style={{
            backgroundColor: "var(--inverse-background-primary)",
            padding: "var(--spacing-large)",
            borderRadius: "var(--corner-radius-medium)",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Chip label="Default" variant="default" inverse />
          <Chip label="Positive" variant="positive" inverse />
          <Chip label="Negative" variant="negative" inverse />
          <Chip label="Neutral" variant="neutral" inverse />
          <Chip label="Accent" variant="accent" inverse />
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Chip
            label="Star"
            variant="accent"
            icon={<span style={{ fontSize: "16px" }}>⭐</span>}
          />
          <Chip
            label="Heart"
            variant="negative"
            icon={<span style={{ fontSize: "16px" }}>❤️</span>}
          />
          <Chip
            label="Settings"
            variant="neutral"
            icon={<span style={{ fontSize: "16px" }}>⚙️</span>}
          />
          <Chip
            label="Check"
            variant="positive"
            icon={<span style={{ fontSize: "16px" }}>✅</span>}
          />
        </div>
      </div>
    </div>
  );
}
