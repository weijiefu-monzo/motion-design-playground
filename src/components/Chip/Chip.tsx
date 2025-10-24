import React from "react";
import clsx from "clsx";
import styles from "./Chip.module.css";
import { Body } from "../Typography";

export interface ChipProps {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  inverse?: boolean;
  variant?: "default" | "positive" | "negative" | "neutral" | "accent";
  "aria-label"?: string;
  "data-qa"?: string;
}

export default function Chip({
  className = "",
  label = "Label",
  icon,
  inverse = false,
  variant = "default",
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: ChipProps) {
  const chipClasses = clsx(
    styles.chip,
    styles[variant],
    {
      [styles.inverse]: inverse,
    },
    className
  );

  return (
    <div
      className={chipClasses}
      aria-label={ariaLabel}
      data-qa={dataQa}
      role="status"
    >
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <Body size="medium" weight="emphasized">
        {label}
      </Body>
    </div>
  );
}
