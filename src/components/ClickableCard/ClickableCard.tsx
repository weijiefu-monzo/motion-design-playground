import React from "react";
import clsx from "clsx";
import styles from "./ClickableCard.module.css";
import { H5, Body } from "../Typography";

export interface ClickableCardProps {
  className?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  inverse?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  "aria-label"?: string;
  "data-qa"?: string;
}

export default function ClickableCard({
  className = "",
  title = "Card title",
  description = "Card description that explains the details of how it works, the content can span multiple lines, but not too long.",
  imageSrc,
  imageAlt = "Card image",
  inverse = false,
  onClick,
  onKeyDown,
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: ClickableCardProps) {
  const handleClick = () => {
    onClick?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
    onKeyDown?.(event);
  };

  const cardClasses = clsx(
    styles.card,
    {
      [styles.inverse]: inverse,
    },
    className
  );

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={ariaLabel}
      data-qa={dataQa}
    >
      <div className={styles.imageContainer}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <H5 className={styles.title}>{title}</H5>
          <Body className={styles.description}>{description}</Body>
        </div>
      </div>
    </div>
  );
}
