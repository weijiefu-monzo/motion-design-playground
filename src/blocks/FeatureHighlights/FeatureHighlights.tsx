import React from "react";
import clsx from "clsx";
import styles from "./FeatureHighlights.module.css";
import { Button, Card, IconButton } from "../../components";
import { H2, Body } from "../../components/Typography";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export interface FeatureHighlightsProps {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  cards?: Array<{
    title: string;
    description: string;
    buttonLabel?: string;
    inverse?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    onButtonClick?: () => void;
  }>;
  onButtonClick?: () => void;
  onCardButtonClick?: (index: number) => void;
  "data-qa"?: string;
}

export default function FeatureHighlights({
  className = "",
  title = "Title",
  description,
  buttonLabel,
  cards = [
    {
      title: "Slide title",
      description:
        "Slide description that explains the details of how it works, the content can span multiple lines, but not too long.",
      buttonLabel: "Button",
      inverse: false,
    },
    {
      title: "Slide title",
      description:
        "Slide description that explains the details of how it works, the content can span multiple lines, but not too long.",
      buttonLabel: "Button",
      inverse: false,
    },
    {
      title: "Slide title",
      description:
        "Slide description that explains the details of how it works, the content can span multiple lines, but not too long.",
      buttonLabel: "Button",
      inverse: false,
    },
    {
      title: "Slide title",
      description:
        "Slide description that explains the details of how it works, the content can span multiple lines, but not too long.",
      buttonLabel: "Button",
      inverse: false,
    },
  ],
  onButtonClick,
  onCardButtonClick,
  "data-qa": dataQa,
}: FeatureHighlightsProps) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleCardButtonClick = (index: number) => {
    if (onCardButtonClick) {
      onCardButtonClick(index);
    }
  };

  const sectionClasses = clsx(styles.section, className);

  return (
    <section className={sectionClasses} data-qa={dataQa}>
      {/* Header Content */}
      <div className={styles.content}>
        <div className={styles.text}>
          <H2 className={styles.title}>{title}</H2>
          {description && (
            <Body className={styles.description}>{description}</Body>
          )}
        </div>

        <div className={styles.action}>
          <div className={styles.cta}>
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

          {cards.length > 4 && (
            <div className={styles.pageControl}>
              <IconButton
                icon={<AiOutlineArrowLeft />}
                onClick={() => {
                  console.log("Previous");
                }}
                aria-label="Previous"
                size="medium"
                className={styles.button}
              />
              <IconButton
                icon={<AiOutlineArrowRight />}
                onClick={() => {
                  console.log("Next");
                }}
                aria-label="Next"
                size="medium"
                className={styles.button}
              />
            </div>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <Card
              key={index}
              title={card.title}
              description={card.description}
              direction="vertical"
              inverse={card.inverse}
              contained={false}
              buttonLabel={card.buttonLabel}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              onButtonClick={() => handleCardButtonClick(index)}
              className={styles.card}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
