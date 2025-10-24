import React from "react";
import clsx from "clsx";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import { Body, H3, H4 } from "../Typography";

export interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  button?: boolean;
  caption?: string;
  direction?: "horizontal" | "vertical";
  inverse?: boolean;
  contained?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
  buttonLabel?: string;
  "data-qa"?: string;
}

export default function Card({
  className = "",
  title = "Slide title",
  description = "Slide description that explains the details of how it works, the content can span multiple lines, but not too long.",
  button = true,
  caption = "Caption below the CTA.",
  direction = "horizontal",
  inverse = false,
  contained = true,
  imageSrc,
  imageAlt = "Card image",
  onButtonClick,
  buttonLabel = "Button",
  "data-qa": dataQa,
}: CardProps) {
  const cardClasses = clsx(
    styles.card,
    styles[direction],
    {
      [styles.inverse]: inverse,
      [styles.contained]: contained,
      [styles.notContained]: !contained,
    },
    className
  );

  const contentClasses = clsx(styles.content, styles[`${direction}Content`]);
  const textClasses = clsx(styles.text, styles[`${direction}Text`]);
  const imageClasses = clsx(styles.image);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className={cardClasses} data-qa={dataQa}>
      {direction === "horizontal" ? (
        <>
          <div className={contentClasses}>
            <div className={textClasses}>
              <H3 className={styles.title}>{title}</H3>
              <Body size="large" className={styles.description}>
                {description}
              </Body>
            </div>
            {button && (
              <Button
                variant="secondary"
                inverse={inverse}
                onClick={handleButtonClick}
                label={buttonLabel}
                className={styles.button}
              />
            )}
            {caption && (
              <Body size="large" className={styles.caption}>
                {caption}
              </Body>
            )}
          </div>
          <div className={imageClasses}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.imageElement}
              />
            ) : (
              <div className={styles.imagePlaceholder} />
            )}
          </div>
        </>
      ) : (
        <>
          <div className={imageClasses}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.imageElement}
              />
            ) : (
              <div className={styles.imagePlaceholder} />
            )}
          </div>
          <div className={contentClasses}>
            <div className={textClasses}>
              {contained ? (
                <H3 className={styles.title}>{title}</H3>
              ) : (
                <H4 className={styles.title}>{title}</H4>
              )}

              <Body
                size={contained ? "large" : "medium"}
                className={styles.description}
              >
                {description}
              </Body>
            </div>
            {button && (
              <Button
                variant="secondary"
                size={contained ? "medium" : "small"}
                inverse={inverse}
                onClick={handleButtonClick}
                label={buttonLabel}
                className={styles.button}
              />
            )}
            {caption && (
              <Body
                size={contained ? "large" : "medium"}
                className={styles.caption}
              >
                {caption}
              </Body>
            )}
          </div>
        </>
      )}
    </div>
  );
}
