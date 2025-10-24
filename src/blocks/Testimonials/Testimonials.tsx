import React from "react";
import clsx from "clsx";
import styles from "./Testimonials.module.css";
import { Button } from "../../components";
import { H1, Body } from "../../components/Typography";

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
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const sectionClasses = clsx(styles.section, className);

  return (
    <section className={sectionClasses} data-qa={dataQa}>
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
        <div className={styles.content}>
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
        </div>
      </div>
    </section>
  );
}
