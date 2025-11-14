import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./Accordion.module.css";
import { H5, Body } from "../Typography";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (measureRef.current) {
      // Measure the content from a hidden element that's always fully rendered
      const height = measureRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [details]);

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

  const headerClasses = styles.header;

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
      <div
        className={headerClasses}
        style={{
          marginBottom: isExpanded && details ? "16px" : "0px",
        }}
      >
        <H5 className={styles.title}>{title}</H5>
        <div className={styles.icon}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 22.4625C17.8 22.4625 17.6125 22.4313 17.4375 22.3688C17.2625 22.3063 17.1 22.2 16.95 22.05L10.05 15.15C9.77501 14.875 9.63751 14.525 9.63751 14.1C9.63751 13.675 9.77501 13.325 10.05 13.05C10.325 12.775 10.675 12.6375 11.1 12.6375C11.525 12.6375 11.875 12.775 12.15 13.05L18 18.9L23.85 13.05C24.125 12.775 24.475 12.6375 24.9 12.6375C25.325 12.6375 25.675 12.775 25.95 13.05C26.225 13.325 26.3625 13.675 26.3625 14.1C26.3625 14.525 26.225 14.875 25.95 15.15L19.05 22.05C18.9 22.2 18.7375 22.3063 18.5625 22.3688C18.3875 22.4313 18.2 22.4625 18 22.4625Z"
              fill="#FF4F40"
            />
          </svg>
        </div>
      </div>

      {details && (
        <>
          {/* Hidden element for measurement */}
          <div
            ref={measureRef}
            style={{
              position: "absolute",
              visibility: "hidden",
              height: "auto",
              width: "100%",
            }}
          >
            <Body className={styles.details}>{details}</Body>
          </div>

          {/* Animated content */}
          <div
            ref={contentRef}
            className={styles.content}
            style={{
              height:
                isExpanded && contentHeight > 0 ? `${contentHeight}px` : "0px",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <Body className={styles.details}>{details}</Body>
          </div>
        </>
      )}
    </div>
  );
}
