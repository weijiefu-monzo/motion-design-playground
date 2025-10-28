import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Testimonials.module.css";
import { Button } from "../../components";
import { H1, Body } from "../../components/Typography";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
import { getAnimationHighlightStyle } from "@/utils/animationHighlights";
export interface TestimonialsProps {
  className?: string;
  title?: string;
  buttonLabel?: string;
  trustScore?: string;
  reviewCount?: string;
  customerImages?: Array<{
    src: string;
    alt: string;
  }>;
  onButtonClick?: () => void;
  "data-qa"?: string;
}

export default function Testimonials({
  className = "",
  title = "13 million personal and business customers have changed the way they bank",
  buttonLabel = "Open a free Monzo account",
  trustScore = "4.8",
  reviewCount = "57k",
  customerImages = [
    {
      src: "/personal.png",
      alt: "Customer profile 1",
    },
    {
      src: "/business.png",
      alt: "Customer profile 2",
    },
  ],
  onButtonClick,
  "data-qa": dataQa,
}: TestimonialsProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const springConfig = useSpringConfig();

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

  const contentSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 0,
  });

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const sectionClasses = clsx(styles.section, className);

  return (
    <animated.section
      ref={ref as React.RefObject<HTMLElement>}
      className={sectionClasses}
      data-qa={dataQa}
    >
      <div className={styles.container}>
        {/* Trustpilot Widget */}
        <div className={styles.trustpilotWidget}>
          <img
            src="/trustpilot.png"
            alt="Trustpilot"
            className={styles.trustpilotLogo}
          />
        </div>

        {/* Content */}
        <animated.div
          className={styles.content}
          style={{
            opacity: contentSpring.opacity,
            transform: contentSpring.y.to((y) => `translateY(${y}px)`),
            ...getAnimationHighlightStyle(
              "gentle",
              springConfig.showHighlights
            ),
          }}
        >
          <div className={styles.text}>
            <div className={styles.titleRow}>
              <H1 className={styles.title}>
                13 million&nbsp;
                {customerImages[0] && (
                  <div className={styles.customerImage}>
                    <img
                      src={customerImages[0].src}
                      alt={customerImages[0].alt}
                      className={styles.customerImg}
                    />
                  </div>
                )}
                personal and&nbsp;
                {customerImages[1] && (
                  <div className={styles.customerImage}>
                    <img
                      src={customerImages[1].src}
                      alt={customerImages[1].alt}
                      className={styles.customerImg}
                    />
                  </div>
                )}
                business customers have changed the way they bank
              </H1>
            </div>
          </div>

          {buttonLabel && (
            <Button
              label={buttonLabel}
              variant="primary"
              size="medium"
              onClick={handleButtonClick}
              className={styles.button}
            />
          )}
        </animated.div>
      </div>
    </animated.section>
  );
}
