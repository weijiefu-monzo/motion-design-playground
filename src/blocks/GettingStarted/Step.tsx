import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./GettingStarted.module.css";
import { H4, Body, Billboard } from "../../components/Typography";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
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

  // Measure description height
  const descriptionRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const springConfig = useSpringConfig();

  useEffect(() => {
    const measure = () => {
      if (measureRef.current && descriptionRef.current?.parentElement) {
        const parentWidth = descriptionRef.current.parentElement.offsetWidth;
        measureRef.current.style.width = `${parentWidth}px`;

        // Force a reflow
        measureRef.current.offsetHeight;

        setDescriptionHeight(measureRef.current.scrollHeight);
      }
    };

    measure();

    // Re-measure when window resizes or description changes
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [description]);

  // Animation spring for description transition
  const descriptionSpring = useSpring({
    opacity: current ? 1 : 0,
    height: current && descriptionHeight > 0 ? descriptionHeight : 0,
    y: current ? 0 : 20,
    config: springConfig.default,
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
        {description && (
          <>
            {/* Hidden element for measurement */}
            <div
              ref={measureRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                height: "auto",
                top: 0,
                left: 0,
              }}
            >
              <Body className={styles.stepDescription}>{description}</Body>
            </div>

            {/* Animated description */}
            <animated.div
              ref={descriptionRef}
              style={{
                opacity: descriptionSpring.opacity,
                height: descriptionSpring.height.to((h: number) => `${h}px`),
                transform: descriptionSpring.y.to(
                  (y: number) => `translateY(${y}px)`
                ),
                overflow: "hidden",
              }}
            >
              <Body className={styles.stepDescription}>{description}</Body>
            </animated.div>
          </>
        )}
      </div>
    </div>
  );
}
