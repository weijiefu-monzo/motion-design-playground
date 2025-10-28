import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "./Accordion.module.css";
import { H5, Body } from "../Typography";
import { AiOutlineDown } from "react-icons/ai";
import { SPRING_CONFIG } from "@/styles/springConfig";
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

  // Icon rotation animation
  const iconSpring = useSpring({
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
    config: SPRING_CONFIG.gentle,
  });

  // Content animation
  const contentSpring = useSpring({
    height: isExpanded && details && contentHeight > 0 ? contentHeight : 0,
    opacity: isExpanded ? 1 : 0,
    marginBottom: isExpanded ? "16px" : "0px",
    config: SPRING_CONFIG.default,
  });

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
      <animated.div
        className={headerClasses}
        style={{
          marginBottom: contentSpring.marginBottom,
        }}
      >
        <H5 className={styles.title}>{title}</H5>
        <animated.div
          className={styles.icon}
          style={{
            transform: iconSpring.transform,
          }}
        >
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
        </animated.div>
      </animated.div>

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
          <animated.div
            ref={contentRef}
            className={styles.content}
            style={{
              height: contentSpring.height.to((h) => `${h}px`),
              opacity: contentSpring.opacity,
            }}
          >
            <Body className={styles.details}>{details}</Body>
          </animated.div>
        </>
      )}
    </div>
  );
}
