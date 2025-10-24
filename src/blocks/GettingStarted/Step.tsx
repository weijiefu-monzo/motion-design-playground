import React from "react";
import clsx from "clsx";
import styles from "./GettingStarted.module.css";
import { H4, Body, Billboard } from "../../components/Typography";

export interface StepProps {
  className?: string;
  title: string;
  description?: string;
  index: string;
  current?: boolean;
  state?: "default" | "hover" | "focus";
  onClick?: () => void;
  "data-qa"?: string;
}

export default function Step({
  className = "",
  title,
  description,
  index,
  current = false,
  state = "default",
  onClick,
  "data-qa": dataQa,
}: StepProps) {
  const stepClasses = clsx(
    styles.step,
    {
      [styles.current]: current,
      [styles.hover]: state === "hover",
      [styles.focus]: state === "focus",
    },
    className
  );

  const indexClasses = clsx(styles.stepIndex, {
    [styles.currentIndex]: current,
  });

  const titleClasses = clsx(styles.stepTitle, {
    [styles.currentTitle]: current,
  });

  return (
    <div
      className={stepClasses}
      onClick={onClick}
      data-qa={dataQa}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className={indexClasses}>
        <Body size="medium" weight="emphasized" className={styles.stepLabel}>
          Step
        </Body>
        <Billboard className={styles.stepNumber}>{index}</Billboard>
      </div>
      <div className={styles.stepContent}>
        <H4 className={titleClasses}>{title}</H4>
        {current && description && (
          <Body className={styles.stepDescription}>{description}</Body>
        )}
      </div>
    </div>
  );
}
