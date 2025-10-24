import React, { useState } from "react";
import clsx from "clsx";
import styles from "./LinkedArticles.module.css";
import { Button, ClickableCard, IconButton } from "../../components";
import { H2, Body } from "../../components/Typography";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export interface LinkedArticlesProps {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  showDescription?: boolean;
  showPageControl?: boolean;
  cards?: Array<{
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    onClick?: () => void;
  }>;
  onButtonClick?: () => void;
  onCardClick?: (index: number) => void;
  "data-qa"?: string;
}

export default function LinkedArticles({
  className = "",
  title = "Title",
  description = "Description",
  buttonLabel = "Button",
  showDescription = true,
  showPageControl = true,
  cards = [],
  onButtonClick,
  onCardClick,
  "data-qa": dataQa,
}: LinkedArticlesProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleCardClick = (index: number) => {
    if (onCardClick) {
      onCardClick(index);
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxPage = Math.max(0, Math.ceil(cards.length / cardsPerPage) - 1);
    setCurrentPage((prev) => Math.min(maxPage, prev + 1));
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const canGoPrevious = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const sectionClasses = clsx(styles.section, className);

  return (
    <section className={sectionClasses} data-qa={dataQa}>
      <div className={styles.container}>
        {/* Header Content */}
        <div className={styles.content}>
          <div className={styles.text}>
            <H2 className={styles.title}>{title}</H2>
            {showDescription && description && (
              <Body className={styles.description} size="large">
                {description}
              </Body>
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
            {/* {showPageControl && totalPages > 1 && (
              <div className={styles.pageControl}>
                <IconButton
                  icon={<AiOutlineArrowLeft />}
                  size="medium"
                  disabled={!canGoPrevious}
                  onClick={handlePrevious}
                  aria-label="Previous page"
                  className={styles.navButton}
                />
                <IconButton
                  icon={<AiOutlineArrowRight />}
                  size="medium"
                  disabled={!canGoNext}
                  onClick={handleNext}
                  aria-label="Next page"
                  className={styles.navButton}
                />
              </div>
            )} */}
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cards}>
          {visibleCards.map((card, index) => (
            <ClickableCard
              key={startIndex + index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              onClick={() => handleCardClick(startIndex + index)}
              className={styles.card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
