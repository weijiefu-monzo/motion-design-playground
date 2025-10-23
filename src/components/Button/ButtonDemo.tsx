import React from "react";
import { Button } from "./index";
import { H2, H3, H4, H5 } from "../Typography";

export default function ButtonDemo() {
  const handleClick = (variant: string, size: string) => {
    console.log(`Clicked ${variant} ${size} button`);
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
      {/* Primary Buttons */}
      <section>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-medium)",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="primary"
            size="medium"
            label="Primary Medium"
            onClick={() => handleClick("Primary", "Medium")}
          />
          <Button
            variant="primary"
            size="small"
            label="Primary Small"
            onClick={() => handleClick("Primary", "Small")}
          />
          <Button
            variant="primary"
            size="medium"
            disabled={true}
            label="Primary Disabled"
          />
          <Button
            variant="primary"
            size="medium"
            loading={true}
            label="Primary Loading"
          />
        </div>
      </section>

      {/* Secondary Buttons */}
      <section>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-medium)",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="secondary"
            size="medium"
            label="Secondary Medium"
            onClick={() => handleClick("Secondary", "Medium")}
          />
          <Button
            variant="secondary"
            size="small"
            label="Secondary Small"
            onClick={() => handleClick("Secondary", "Small")}
          />
          <Button
            variant="secondary"
            size="medium"
            disabled={true}
            label="Secondary Disabled"
          />
          <Button
            variant="secondary"
            size="medium"
            loading={true}
            label="Secondary Loading"
          />
        </div>
      </section>

      {/* Dark Background Demo */}
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
          <Button
            variant="primary"
            size="medium"
            inverse={true}
            label="Primary Inverse"
            onClick={() => handleClick("Primary", "Medium")}
          />
          <Button
            variant="secondary"
            size="medium"
            inverse={true}
            label="Secondary Inverse"
            onClick={() => handleClick("Secondary", "Medium")}
          />
        </div>
      </section>
    </div>
  );
}
