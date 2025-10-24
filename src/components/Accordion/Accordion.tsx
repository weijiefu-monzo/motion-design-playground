import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Accordion.module.css";
import { H5, Body } from "../Typography";
import { AiOutlineDown } from "react-icons/ai";

export interface AccordionProps {
  className?: string;
  title: string;
  details?: string;
  expanded?: boolean;
  disabled?: boolean;
  onToggle?: (expanded: boolean) => void;
  "aria-label"?: string;
  "data-qa"?: string;
}

export default function Accordion({
  className = "",
  title,
  details = "",
  expanded = false,
  disabled = false,
  onToggle,
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    if (!disabled) {
      const newExpanded = !isExpanded;
      setIsExpanded(newExpanded);
      if (onToggle) {
        onToggle(newExpanded);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  const accordionClasses = clsx(
    styles.accordion,
    {
      [styles.expanded]: isExpanded,
      [styles.disabled]: disabled,
    },
    className
  );

  const headerClasses = clsx(styles.header, {
    [styles.expandedHeader]: isExpanded,
  });

  const iconClasses = clsx(styles.icon, {
    [styles.expandedIcon]: isExpanded,
  });

  return (
    <div
      className={accordionClasses}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-expanded={isExpanded}
      aria-label={ariaLabel}
      data-qa={dataQa}
    >
      <div className={headerClasses}>
        <H5 className={styles.title}>{title}</H5>
        <div className={iconClasses}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 27.4541C21.7556 27.4541 21.5264 27.4159 21.3125 27.3396C21.0986 27.2632 20.9 27.1333 20.7167 26.95L12.2833 18.5166C11.9472 18.1805 11.7792 17.7527 11.7792 17.2333C11.7792 16.7139 11.9472 16.2861 12.2833 15.95C12.6195 15.6139 13.0472 15.4458 13.5667 15.4458C14.0861 15.4458 14.5139 15.6139 14.85 15.95L22 23.1L29.15 15.95C29.4861 15.6139 29.9139 15.4458 30.4333 15.4458C30.9528 15.4458 31.3806 15.6139 31.7167 15.95C32.0528 16.2861 32.2208 16.7139 32.2208 17.2333C32.2208 17.7527 32.0528 18.1805 31.7167 18.5166L23.2833 26.95C23.1 27.1333 22.9014 27.2632 22.6875 27.3396C22.4736 27.4159 22.2445 27.4541 22 27.4541Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {isExpanded && details && (
        <div className={styles.content}>
          <Body className={styles.details}>{details}</Body>
        </div>
      )}
    </div>
  );
}
