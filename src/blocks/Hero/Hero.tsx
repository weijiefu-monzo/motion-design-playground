import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { animated, useSpring } from "@react-spring/web";
import styles from "./Hero.module.css";
import { Chip } from "../../components/Chip";
import { H1, Body, H3, H2 } from "../../components/Typography";
import { Button } from "../../components/Button";
import { Cell } from "../../components/Cell";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
import { getAnimationHighlightStyle } from "@/utils/animationHighlights";
export interface HeroProps {
  className?: string;
  title?: string;
  description?: string;
  chipLabel?: string;
  ctaLabel?: string;
  ctaOnClick?: () => void;
  dataHighlight?: boolean;
  legalCopy?: string;
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
  dataHighlight = true,
  legalCopy,
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: HeroProps) {
  const heroClasses = clsx(styles.hero, className);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const springConfig = useSpringConfig();

  // Debug logging
  console.log("Hero component springConfig:", springConfig);

  // Animation delays for staggered effect (in milliseconds)
  const GROUP_2_DELAY = 150;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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

  // Group 1: Credit Card chip, title, description, Image on the Right, Card overlay
  // No delay - starts immediately
  const textSectionSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: 0,
  });

  const imageSectionSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: 0,
  });

  const bankCardSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: 0,
  });

  // Group 2: Financial data, button, social proof
  // 150ms delay
  const financialDataSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: GROUP_2_DELAY,
  });

  const buttonSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: GROUP_2_DELAY,
  });

  const socialProofSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: GROUP_2_DELAY,
  });

  // Legal copy uses same delay as Group 2
  const legalCopySpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.default,
    delay: GROUP_2_DELAY,
  });

  return (
    <div
      ref={ref}
      className={heroClasses}
      aria-label={ariaLabel}
      data-qa={dataQa}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <animated.div
            className={styles.textSection}
            style={{
              ...getAnimationHighlightStyle(
                "default",
                springConfig.showHighlights && isInView
              ),
              opacity: textSectionSpring.opacity,
              transform: textSectionSpring.y.to(
                (y: number) => `translateY(${y}px)`
              ),
            }}
          >
            {chipLabel && <Chip label={chipLabel} variant="default" />}
            <H2>{title}</H2>
            <Body size="large" style={{ color: "var(--content-secondary)" }}>
              {description}
            </Body>
          </animated.div>

          {dataHighlight && (
            <animated.div
              className={styles.financialData}
              style={{
                ...getAnimationHighlightStyle(
                  "default",
                  springConfig.showHighlights && isInView
                ),
                opacity: financialDataSpring.opacity,
                transform: financialDataSpring.y.to(
                  (y: number) => `translateY(${y}px)`
                ),
              }}
            >
              <div className={styles.financialDataHeader}>
                <Body size="medium" weight="emphasized">
                  Representative example
                </Body>
              </div>
              <div className={styles.financialDataList}>
                {financialData.map((data, index) => (
                  <React.Fragment key={index}>
                    <div className={styles.dataItem}>
                      <Body
                        size="medium"
                        style={{ color: "var(--content-secondary)" }}
                      >
                        {data.label}
                      </Body>
                      <Body style={{ color: "var(--content-primary)" }}>
                        {data.value}
                      </Body>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </animated.div>
          )}

          <animated.div
            style={{
              ...getAnimationHighlightStyle(
                "default",
                springConfig.showHighlights && isInView
              ),
              opacity: buttonSpring.opacity,
              transform: buttonSpring.y.to((y: number) => `translateY(${y}px)`),
            }}
          >
            <Button
              label={ctaLabel}
              onClick={ctaOnClick}
              className={styles.ctaButton}
            />
          </animated.div>
        </div>

        <animated.div
          className={styles.imageSection}
          style={{
            opacity: imageSectionSpring.opacity,
            transform: imageSectionSpring.y.to(
              (y: number) => `translateY(${y}px)`
            ),
            ...getAnimationHighlightStyle(
              "default",
              springConfig.showHighlights
            ),
          }}
        >
          <div className={styles.heroImage}>
            <img src="/hero-image.png" alt="Hero image" />
            <animated.div
              className={styles.bankCard}
              style={{
                opacity: bankCardSpring.opacity,
                transform: bankCardSpring.y.to(
                  (y: number) =>
                    `translateX(var(--card-translate-x, 0)) translateY(${y}px)`
                ),
                ...getAnimationHighlightStyle(
                  "default",
                  springConfig.showHighlights && isInView
                ),
              }}
            >
              <img src="/bank-card.png" alt="Bank card" />
              <div className={styles.shimmer}></div>
            </animated.div>
          </div>
        </animated.div>
      </div>

      <animated.div
        className={styles.socialProof}
        style={{
          ...getAnimationHighlightStyle(
            "default",
            springConfig.showHighlights && isInView
          ),
          opacity: socialProofSpring.opacity,
          transform: socialProofSpring.y.to(
            (y: number) => `translateY(${y}px)`
          ),
        }}
      >
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
      </animated.div>

      {legalCopy && (
        <animated.div
          style={{
            ...getAnimationHighlightStyle(
              "default",
              springConfig.showHighlights && isInView
            ),
            opacity: legalCopySpring.opacity,
            transform: legalCopySpring.y.to(
              (y: number) => `translateY(${y}px)`
            ),
          }}
          className={styles.legalCopyContainer}
        >
          <Body size="medium" className={styles.legalCopy}>
            {legalCopy}
          </Body>
        </animated.div>
      )}
    </div>
  );
}
