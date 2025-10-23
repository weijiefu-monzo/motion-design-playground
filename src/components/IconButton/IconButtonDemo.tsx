import React from "react";
import IconButton from "./IconButton";

export default function IconButtonDemo() {
  const handleClick = () => {
    console.log("IconButton clicked!");
  };

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
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton onClick={handleClick} aria-label="Default" />

          <IconButton onClick={handleClick} disabled aria-label="Disabled" />
          <IconButton onClick={handleClick} loading aria-label="Loading" />
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton
            size="small"
            onClick={handleClick}
            aria-label="Small Default"
          />

          <IconButton
            size="small"
            onClick={handleClick}
            disabled
            aria-label="Small Disabled"
          />
          <IconButton
            size="small"
            onClick={handleClick}
            loading
            aria-label="Small Loading"
          />
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton
            outlined={false}
            onClick={handleClick}
            aria-label="Filled Default"
          />

          <IconButton
            outlined={false}
            onClick={handleClick}
            disabled
            aria-label="Filled Disabled"
          />
          <IconButton
            outlined={false}
            onClick={handleClick}
            loading
            aria-label="Filled Loading"
          />
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton
            size="small"
            outlined={false}
            onClick={handleClick}
            aria-label="Small Filled Default"
          />

          <IconButton
            size="small"
            outlined={false}
            onClick={handleClick}
            disabled
            aria-label="Small Filled Disabled"
          />
          <IconButton
            size="small"
            outlined={false}
            onClick={handleClick}
            loading
            aria-label="Small Filled Loading"
          />
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton
            onClick={handleClick}
            icon={<span style={{ fontSize: "20px" }}>★</span>}
            aria-label="Star Icon"
          />
          <IconButton
            onClick={handleClick}
            icon={<span style={{ fontSize: "20px" }}>❤️</span>}
            aria-label="Heart Icon"
          />
          <IconButton
            onClick={handleClick}
            icon={<span style={{ fontSize: "20px" }}>⚙️</span>}
            aria-label="Settings Icon"
          />
        </div>
        <section
          style={{
            backgroundColor: "var(--inverse-background-primary)",
            padding: "var(--spacing-large)",
            borderRadius: "var(--corner-radius-medium)",
            marginTop: "var(--spacing-large)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-medium)",
              flexWrap: "wrap",
            }}
          >
            <IconButton onClick={handleClick} inverse aria-label="Inverse" />
            <IconButton
              size="small"
              onClick={handleClick}
              inverse
              aria-label="Small Inverse"
            />
            <IconButton
              outlined={false}
              onClick={handleClick}
              inverse
              aria-label="Filled Inverse"
            />
            <IconButton
              size="small"
              outlined={false}
              onClick={handleClick}
              inverse
              aria-label="Small Filled Inverse"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
