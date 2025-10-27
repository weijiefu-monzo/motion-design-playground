import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { animated, useSpring } from "@react-spring/web";
import styles from "./Hero.module.css";
import { Chip } from "../../components/Chip";
import { H1, Body, H3, H2 } from "../../components/Typography";
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
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Animation delays for staggered effect (in milliseconds)
  const ANIMATION_DELAY_BASE = 100;

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

  const textSectionSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: { tension: 100, friction: 30 },
    delay: ANIMATION_DELAY_BASE * 0,
  });

  const buttonSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: { tension: 100, friction: 30 },
    delay: ANIMATION_DELAY_BASE * 1,
  });

  const financialDataSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: { tension: 100, friction: 30 },
    delay: ANIMATION_DELAY_BASE * 2,
  });

  const imageSectionSpring = useSpring({
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : 30,
    config: { tension: 100, friction: 30 },
    delay: ANIMATION_DELAY_BASE * 0.5,
  });

  const socialProofSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: { tension: 100, friction: 30 },
    delay: ANIMATION_DELAY_BASE * 3,
  });

  const legalCopySpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: { tension: 100, friction: 30 },
    delay: ANIMATION_DELAY_BASE * 4,
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
              opacity: textSectionSpring.opacity,
              transform: textSectionSpring.y.to((y) => `translateY(${y}px)`),
            }}
          >
            {chipLabel && <Chip label={chipLabel} variant="default" />}
            <H2>{title}</H2>
            <Body size="large" style={{ color: "var(--content-secondary)" }}>
              {description}
            </Body>
          </animated.div>

          <animated.div
            style={{
              opacity: buttonSpring.opacity,
              transform: buttonSpring.y.to((y) => `translateY(${y}px)`),
            }}
          >
            <Button
              label={ctaLabel}
              onClick={ctaOnClick}
              className={styles.ctaButton}
            />
          </animated.div>

          <animated.div
            className={styles.financialData}
            style={{
              opacity: financialDataSpring.opacity,
              transform: financialDataSpring.y.to((y) => `translateY(${y}px)`),
            }}
          >
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
          </animated.div>
        </div>

        <animated.div
          className={styles.imageSection}
          style={{
            opacity: imageSectionSpring.opacity,
            transform: imageSectionSpring.x.to((x) => `translateX(${x}px)`),
          }}
        >
          <div className={styles.heroImage}>
            <img src="/hero-image.png" alt="Hero image" />
            <div className={styles.bankCard}>
              <img src="/bank-card.png" alt="Bank card" />
            </div>
          </div>
        </animated.div>
      </div>

      <animated.div
        className={styles.socialProof}
        style={{
          opacity: socialProofSpring.opacity,
          transform: socialProofSpring.y.to((y) => `translateY(${y}px)`),
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

      <animated.div
        style={{
          opacity: legalCopySpring.opacity,
          transform: legalCopySpring.y.to((y) => `translateY(${y}px)`),
        }}
      >
        <Body size="medium" className={styles.legalCopy}>
          Legal copy
        </Body>
      </animated.div>
    </div>
  );
}
