import React from "react";
import clsx from "clsx";
import styles from "./ProgressiveContent.module.css";
import { H4, Body, Billboard, H5 } from "../../components/Typography";

export interface StepCardProps {
  className?: string;
  index: string;
  title: string;
  description: string;
  image?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  "data-qa"?: string;
}

export default function StepCard({
  className = "",
  index,
  title,
  description,
  image = true,
  imageSrc,
  imageAlt = "Step image",
  "data-qa": dataQa,
}: StepCardProps) {
  const cardClasses = clsx(styles.stepCard, className);

  return (
    <div className={cardClasses} data-qa={dataQa}>
      {image && (
        <div className={styles.stepCardImage}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.stepCardImageElement}
            />
          ) : (
            <div className={styles.stepCardImagePlaceholder} />
          )}
        </div>
      )}
      <div className={styles.stepCardContent}>
        <div className={styles.stepCardIndex}>
          <H5 className={styles.stepCardLabel}>Step</H5>
          <H5 className={styles.stepCardNumber}>{index}</H5>
        </div>
        <div className={styles.stepCardText}>
          <H4 className={styles.stepCardTitle}>{title}</H4>
          <Body className={styles.stepCardDescription}>{description}</Body>
        </div>
      </div>
    </div>
  );
}

