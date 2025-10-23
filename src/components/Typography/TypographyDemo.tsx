import React from "react";
import { Billboard, H1, H2, H3, H4, H5, Body } from "./index";

export const TypographyDemo: React.FC = () => {
  return (
    <div style={{ padding: "2rem", margin: "0 auto" }}>
      <section style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <Billboard>Billboard - The largest heading style</Billboard>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <H1>Heading 1 - Main page titles</H1>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <H2>Heading 2 - Section titles</H2>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <H3>Heading 3 - Subsection titles</H3>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <H4>Heading 4 - Component titles</H4>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <H5>Heading 5 - Small headings</H5>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <Body size="large" weight="regular">
            Body Large Regular - For important body text that needs to stand out
          </Body>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <Body size="large" weight="emphasized">
            Body Large Emphasized - For important body text that needs emphasis
          </Body>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <Body size="medium" weight="regular">
            Body Medium Regular - The standard body text size for most content
          </Body>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <Body size="medium" weight="emphasized">
            Body Medium Emphasized - For body text that needs emphasis
          </Body>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <Body size="small" weight="emphasized">
            Body Small Emphasized - For captions, labels, and small text
          </Body>
        </div>
      </section>
    </div>
  );
};
