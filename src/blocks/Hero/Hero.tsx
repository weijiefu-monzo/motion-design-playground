import React from "react";
import clsx from "clsx";
import styles from "./Hero.module.css";
import { Chip } from "../../components/Chip";
import { H1, Body, H3 } from "../../components/Typography";
import { Button } from "../../components/Button";
import { Cell } from "../../components/Cell";

export interface HeroProps {
  className?: string;
  title?: string;
  description?: string;
  chipLabel?: string;
  ctaLabel?: string;
  ctaOnClick?: () => void;
  "aria-label"?: string;
  "data-qa"?: string;
}

export default function Hero({
  className = "",
  title = "Title",
  description = "Body copy in a couple of sentences. Or a bullet point list.",
  chipLabel = undefined,
  ctaLabel = "Open a free Monzo account",
  ctaOnClick,
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: HeroProps) {
  const heroClasses = clsx(styles.hero, className);

  const features = [
    "Main list item content",
    "Main list item content",
    "Main list item content",
    "Main list item content",
    "Main list item content",
  ];

  const financialData = [
    { label: "Rep. APR", value: "39% (var)" },
    { label: "Credit limit", value: "£350" },
    { label: "Yearly interest", value: "%39 (var)" },
  ];

  const socialProof = [
    {
      icon: "❤️",
      title: "13 million customers",
      subtitle: "that bank with Monzo",
    },
    {
      rating: "4.9",
      source: "App store",
      stars: 5,
    },
    {
      rating: "4.8",
      source: "Google Play",
      stars: 5,
    },
    {
      rating: "4.6",
      source: "Trustpilot",
      stars: 5,
    },
  ];

  return (
    <div className={heroClasses} aria-label={ariaLabel} data-qa={dataQa}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            {chipLabel && <Chip label={chipLabel} variant="default" />}
            <H1>{title}</H1>
            <Body size="large" style={{ color: "var(--content-secondary)" }}>
              {description}
            </Body>
          </div>

          <Button
            label={ctaLabel}
            onClick={ctaOnClick}
            className={styles.ctaButton}
          />

          <div className={styles.financialData}>
            {financialData.map((data, index) => (
              <React.Fragment key={index}>
                <div className={styles.dataItem}>
                  <Body
                    size="medium"
                    style={{ color: "var(--content-secondary)" }}
                  >
                    {data.label}
                  </Body>
                  <Body
                    size="medium"
                    weight="emphasized"
                    style={{ color: "var(--content-primary)" }}
                  >
                    {data.value}
                  </Body>
                </div>
                {index < financialData.length - 1 && (
                  <div className={styles.separator} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.heroImage}>
            <img src="/hero-image.png" alt="Hero image" />
            <div className={styles.bankCard}>
              <img src="/bank-card.png" alt="Bank card" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.socialProof}>
        {socialProof.map((item, index) => (
          <Cell key={index} className={styles.socialProofItem}>
            {item.icon && <div className={styles.socialIcon}>{item.icon}</div>}
            {item.title && (
              <div className={styles.socialContent}>
                <Body size="medium" weight="emphasized">
                  {item.title}
                </Body>
                <Body size="medium">{item.subtitle}</Body>
              </div>
            )}
            {item.rating && (
              <div className={styles.ratingContent}>
                <H3>{item.rating}</H3>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {Array.from({ length: item.stars || 0 }).map((_, i) => (
                      <span key={i} className={styles.star}>
                        ★
                      </span>
                    ))}
                  </div>
                  <Body size="medium" className={styles.source}>
                    {item.source}
                  </Body>
                </div>
              </div>
            )}
          </Cell>
        ))}
      </div>

      <Body size="medium" className={styles.legalCopy}>
        Legal copy
      </Body>
    </div>
  );
}
