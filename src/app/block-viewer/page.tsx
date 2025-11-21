"use client";

import { useState, useEffect } from "react";
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

// Mock data for blocks
const mockData = {
  cardCarouselCards: [
    {
      title: "No extra charges for missed payments",
      description:
        "We'll give you 7 days to catch up from the date of your missed payment. It's best to get back on track as soon as you can to protect your credit score.",
      buttonLabel: "Check you're eligible",
      imageSrc: "/slide-1.png",
      inverse: false,
    },
    {
      title: "Flex now or later",
      description:
        "Use Flex at the checkout like other credit cards, or Flex transactions from the last two weeks for a bit more time to pay.",
      buttonLabel: "Check you're eligible",
      imageSrc: "/slide-2.png",
      inverse: true,
    },
  ],
  featureHighlightsCards: [
    {
      title: "No fees overseas",
      description:
        "Au revoir and adios to extra fees abroad. We'll charge you Mastercard's exchange rate and nothing else.",
      inverse: false,
      imageSrc: "/card-1.png",
    },
    {
      title: "Straightforward cashback",
      description:
        "Earn cashback when you use your Flex card at top brands, and get your money in just a few days. Ts&Cs apply.",
      inverse: false,
      imageSrc: "/card-2.png",
    },
    {
      title: "Flex on the fly",
      description:
        "Add Flex to your digital wallet and use in-store, online and in-app straightaway, with no need for a physical card.",
      inverse: false,
      imageSrc: "/card-3.png",
    },
  ],
  steps: [
    {
      index: "1",
      title: "Create Your Account",
      description:
        "Sign up with your email and create a secure password to get started with Monzo.",
      imageSrc: "/step-1.png",
      imageAlt: "Account creation step",
    },
    {
      index: "2",
      title: "Verify Your Identity",
      description:
        "Complete our quick identity verification process to keep your account secure.",
      imageSrc: "/step-2.png",
      imageAlt: "Identity verification step",
    },
    {
      index: "3",
      title: "Start Banking",
      description:
        "You're all set! Start using your Monzo account to manage your money.",
      imageSrc: "/step-3.png",
      imageAlt: "Start banking step",
    },
  ],
  articles: [
    {
      title: "Flex Build. The credit-builder card that keeps getting better.",
      description:
        "Can help build your credit score over time. See if you're eligible with no impact on your credit score",
      imageSrc: "/article-1.png",
      imageAlt: "Getting started guide",
    },
    {
      title: "Get a loan that treats you right",
      description:
        "Ditch hidden fees, confusing terms and waiting around. Achieve your goals and feel in control with a Monzo loan.",
      imageSrc: "/article-2.png",
      imageAlt: "Advanced features",
    },
    {
      title: "Check in on credit score",
      description:
        "From having the chance to unlock better rates to managing swings in your credit score, you can stay on top of your credit health on Monzo.",
      imageSrc: "/article-3.png",
      imageAlt: "Security practices",
    },
  ],
  questions: [
    {
      question: "How does Flex Build impact my credit score?",
      answer:
        "We report how you use Flex Build to credit reference agencies. We tell them things like what your credit limit is, what your outstanding balance is and whether you've made your monthly payment on time.",
      expanded: false,
    },
    {
      question: "What are the fees for Flex Build?",
      answer:
        "There are no fees for using Flex Build. We don't charge any monthly fees, annual fees, or setup fees. The only cost is the interest on any outstanding balance, which is clearly shown before you make a purchase.",
      expanded: false,
    },
    {
      question: "How do I apply for Flex Build?",
      answer:
        "You can apply for Flex Build directly in the Monzo app. The application process takes just a few minutes and we'll give you an instant decision.",
      expanded: false,
    },
  ],
};

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

  useEffect(() => {
    // Set initial width
    setViewportWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBreakpoint = (width: number): string => {
    if (width <= 393) return "Mobile (≤393px)";
    if (width <= 768) return "Tablet Portrait (≤768px)";
    if (width <= 1040) return "Tablet Landscape (≤1040px)";
    if (width <= 1440 + 64 * 2) return "Desktop (≤1440px + 64px * 2)";
    return "Exceed Max Width (>1440px + 64px * 2)";
  };

  const getContentByLevel = (
    min: string,
    normal: string,
    max: string
  ): string => {
    switch (contentLevel) {
      case "min":
        return min;
      case "max":
        return max;
      default:
        return normal;
    }
  };

  const renderBlock = () => {
    switch (selectedBlock) {
      case "Hero":
        return (
          <Hero
            title={getContentByLevel(
              "Flexx Purchase.",
              "Flexx Purchase. An award-winning 0% credit card.",
              "Flexx Purchase. An award-winning 0% credit card with exceptional benefits and features."
            )}
            chipLabel={contentLevel === "min" ? undefined : "Credit card"}
            description={getContentByLevel(
              "0% interest credit card.",
              "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic.",
              "With 0% interest you can use again and again, and credit limits up to £10,000. It's a credit card with Monzo magic. Enjoy flexible spending, instant notifications, and complete control over your finances with our award-winning app experience."
            )}
            dataHighlight={contentLevel !== "min"}
            legalCopy={getContentByLevel(
              "",
              "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request.",
              "Representative example: 39% APR (variable). Terms and conditions apply. Full details available on request. Flexible spending, instant notifications, and complete control over your finances with our award-winning app experience."
            )}
          />
        );
      case "CardCarousel":
        return (
          <CardCarousel
            title={getContentByLevel(
              "Not your average card",
              "Not your average credit card",
              "Not your average credit card - Built for modern life"
            )}
            cards={mockData.cardCarouselCards}
          />
        );
      case "FeatureHighlights":
        return (
          <FeatureHighlights
            title={getContentByLevel(
              "The best of Monzo",
              "The best of Monzo in a credit card",
              "The best of Monzo in a credit card - All your favorite features"
            )}
            description={
              contentLevel === "min"
                ? undefined
                : getContentByLevel(
                    "",
                    "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app.",
                    "Get instant notifications, real-time balance updates and freeze and defrost your card, all from the app. Plus spending insights, budgeting tools, and complete control over your financial life."
                  )
            }
            buttonLabel={
              contentLevel === "min" ? undefined : "Open a free Monzo account"
            }
            cards={mockData.featureHighlightsCards}
          />
        );
      case "ProgressiveContent":
        return (
          <ProgressiveContent
            image={true}
            title={getContentByLevel(
              "Get Started",
              "Get Started with Monzo",
              "Get Started with Monzo - Your journey to better banking"
            )}
            description={
              contentLevel === "min"
                ? undefined
                : getContentByLevel(
                    "",
                    "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started.",
                    "Join millions of people who are already banking with Monzo. It takes just a few minutes to get started. Experience banking that works the way you do, with smart features and intuitive design."
                  )
            }
            buttonLabel={contentLevel === "min" ? undefined : "Open Account"}
            steps={mockData.steps}
          />
        );
      case "OpenAccount":
        return (
          <OpenAccount
            title={getContentByLevel(
              "Open a free account",
              "Open a free Monzo account and see if you are eligible",
              "Open a free Monzo account today and see if you are eligible for our premium features"
            )}
            description={
              contentLevel === "min"
                ? undefined
                : getContentByLevel(
                    "",
                    "Body copy in a couple of sentences.",
                    "Body copy in a couple of sentences. Join millions who trust Monzo for their everyday banking needs with award-winning features."
                  )
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
            title={getContentByLevel(
              "13 million customers",
              "13 million personal and business customers have changed the way they bank",
              "13 million personal and business customers have changed the way they bank with Monzo"
            )}
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
            title={getContentByLevel(
              "Other products",
              "Other useful products",
              "Other useful products to help you manage your finances"
            )}
            description={
              contentLevel === "min"
                ? undefined
                : getContentByLevel(
                    "",
                    "See how else Monzo can help with the big life steps and safety nets.",
                    "See how else Monzo can help with the big life steps and safety nets. From loans to savings, we've got you covered."
                  )
            }
            buttonLabel={
              contentLevel === "min" ? undefined : "Open a free Monzo account"
            }
            showDescription={contentLevel !== "min"}
            showPageControl={contentLevel !== "min"}
            cards={mockData.articles}
          />
        );
      case "FAQ":
        return (
          <FAQ
            title={getContentByLevel(
              "FAQ",
              "Questions? Answers.",
              "Questions? We've got answers for you."
            )}
            questions={mockData.questions}
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
              <div className={styles.viewportInfo}>
                <span className={styles.viewportWidth}>{viewportWidth}px</span>
                <span className={styles.breakpoint}>
                  {getBreakpoint(viewportWidth)}
                </span>
              </div>
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
