"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import {
  Hero,
  CardCarousel,
  FeatureHighlights,
  ProgressiveContent,
  OpenAccount,
  CustomerNumberAndTrustpilotScore,
  LinkedArticles,
  FAQ,
} from "@/blocks";
import { SpringConfigProvider } from "@/contexts/SpringConfigContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RemountWrapper } from "@/components/RemountWrapper";
import styles from "./page.module.css";

import { mockData } from "./mockData";
import { Leva } from "leva";

type BlockName =
  | "Hero"
  | "CardCarousel"
  | "ProgressiveContent"
  | "FeatureHighlights"
  | "LinkedArticles"
  | "CustomerNumberAndTrustpilotScore"
  | "OpenAccount"
  | "FAQ";

type ContentLevel = "min" | "normal" | "max";

export default function BlockViewer() {
  const [selectedBlock, setSelectedBlock] = useState<BlockName>("Hero");
  const [viewportWidth, setViewportWidth] = useState(0);
  const [contentLevel, setContentLevel] = useState<ContentLevel>("normal");

  // Track if we're on the client to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    // Setting client flag to avoid hydration mismatch - this is intentional
    // eslint-disable-next-line
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Update width on resize and set initial value
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Call immediately to set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const getBreakpoint = (width: number): string => {
    if (width <= 393) return "Mobile (≤393px)";
    if (width <= 768) return "Tablet Portrait (≤768px)";
    if (width <= 1040) return "Tablet Landscape (≤1040px)";
    if (width <= 1440 + 64 * 2) return "Desktop (≤1440px + 64px * 2)";
    return "Exceed Max Width (>1440px + 64px * 2)";
  };

  const renderBlock = () => {
    switch (selectedBlock) {
      case "Hero":
        return (
          <Hero
            title={mockData[contentLevel].heroTitle[contentLevel]}
            chipLabel={contentLevel === "min" ? undefined : "Credit card"}
            description={mockData[contentLevel].heroDescription[contentLevel]}
            dataHighlight={contentLevel !== "min"}
            legalCopy={mockData[contentLevel].heroLegalCopy[contentLevel]}
          />
        );
      case "CardCarousel":
        return (
          <CardCarousel
            key={`carousel-${contentLevel}-${mockData[contentLevel].cardCarouselCards.length}`}
            title={mockData[contentLevel].cardCarouselTitle[contentLevel]}
            cards={mockData[contentLevel].cardCarouselCards}
          />
        );
      case "FeatureHighlights":
        return (
          <FeatureHighlights
            title={mockData[contentLevel].featureHighlightsTitle[contentLevel]}
            description={
              contentLevel === "min"
                ? undefined
                : mockData[contentLevel].featureHighlightsDescription[
                    contentLevel
                  ]
            }
            buttonLabel={"Open a free Monzo account"}
            cards={mockData[contentLevel].featureHighlightsCards}
          />
        );
      case "ProgressiveContent":
        return (
          <ProgressiveContent
            image={true}
            title={mockData[contentLevel].progressiveContentTitle[contentLevel]}
            description={
              contentLevel === "min"
                ? undefined
                : mockData[contentLevel].progressiveContentDescription[
                    contentLevel
                  ]
            }
            buttonLabel={contentLevel === "min" ? undefined : "Open Account"}
            steps={mockData[contentLevel].steps}
          />
        );
      case "OpenAccount":
        return (
          <OpenAccount
            title={mockData[contentLevel].openAccountTitle[contentLevel]}
            description={
              contentLevel === "min"
                ? undefined
                : mockData[contentLevel].openAccountDescription[contentLevel]
            }
            buttonLabel="Open a free Monzo account"
            customerCount="13 million customers"
            appStoreRating="4.9"
            googlePlayRating="4.9"
          />
        );
      case "CustomerNumberAndTrustpilotScore":
        return (
          <CustomerNumberAndTrustpilotScore
            title={
              mockData[contentLevel].customerNumberAndTrustpilotScoreTitle[
                contentLevel
              ]
            }
            buttonLabel={
              contentLevel === "min" ? undefined : "Open a free Monzo account"
            }
            trustScore="4.8"
            reviewCount="57k"
          />
        );
      case "LinkedArticles":
        return (
          <LinkedArticles
            title={mockData[contentLevel].linkedArticlesTitle[contentLevel]}
            description={
              contentLevel === "min"
                ? undefined
                : mockData[contentLevel].linkedArticlesDescription[contentLevel]
            }
            buttonLabel={
              contentLevel === "min" ? undefined : "Open a free Monzo account"
            }
            showDescription={contentLevel !== "min"}
            showPageControl={contentLevel !== "min"}
            cards={mockData[contentLevel].articles}
          />
        );
      case "FAQ":
        return (
          <FAQ
            title={mockData[contentLevel].faqTitle[contentLevel]}
            questions={mockData[contentLevel].questions}
          />
        );

      default:
        return null;
    }
  };

  const blockNames: BlockName[] = [
    "Hero",
    "CardCarousel",
    "FeatureHighlights",
    "ProgressiveContent",
    "OpenAccount",
    "CustomerNumberAndTrustpilotScore",
    "LinkedArticles",
    "FAQ",
  ];

  return (
    <ThemeProvider>
      <SpringConfigProvider>
        <div style={{ position: "fixed", bottom: 8, right: 8, zIndex: 2000 }}>
          <Leva fill collapsed />
        </div>
        <div className={styles.container}>
          <div className={styles.controls}>
            <div className={styles.controlsLeft}>
              <label htmlFor="block-select" className={styles.label}>
                Select:
              </label>
              <select
                id="block-select"
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value as BlockName)}
                className={styles.select}
              >
                {blockNames.map((blockName) => (
                  <option key={blockName} value={blockName}>
                    {blockName}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.controlsRight}>
              <div className={styles.controlsRightToggles}>
                <ThemeToggle />
                <div className={styles.segmentedControl}>
                  <button
                    className={`${styles.segment} ${
                      contentLevel === "min" ? styles.segmentActive : ""
                    }`}
                    onClick={() => setContentLevel("min")}
                  >
                    Min
                  </button>
                  <button
                    className={`${styles.segment} ${
                      contentLevel === "normal" ? styles.segmentActive : ""
                    }`}
                    onClick={() => setContentLevel("normal")}
                  >
                    Normal
                  </button>
                  <button
                    className={`${styles.segment} ${
                      contentLevel === "max" ? styles.segmentActive : ""
                    }`}
                    onClick={() => setContentLevel("max")}
                  >
                    Max
                  </button>
                </div>
              </div>
              {isClient && (
                <div className={styles.viewportInfo}>
                  <span className={styles.viewportWidth}>
                    {viewportWidth}px
                  </span>
                  <span className={styles.breakpoint}>
                    {getBreakpoint(viewportWidth)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.preview}>
            <RemountWrapper>{renderBlock()}</RemountWrapper>
          </div>
        </div>
      </SpringConfigProvider>
    </ThemeProvider>
  );
}
