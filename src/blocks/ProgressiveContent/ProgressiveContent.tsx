import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import {
  useSpring,
  useTrail,
  useTransition,
  useSprings,
  animated,
} from "@react-spring/web";
import styles from "./ProgressiveContent.module.css";
import { Button } from "../../components";
import { H2, Body } from "../../components/Typography";
import Step from "./Step";
import StepCard from "./StepCard";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
import { getAnimationHighlightStyle } from "@/utils/animationHighlights";
export interface ProgressiveContentProps {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  image: boolean;
  steps?: Array<{
    index: string;
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
  }>;
  onButtonClick?: () => void;
  onStepClick?: (index: number) => void;
  "data-qa"?: string;
}

export default function ProgressiveContent({
  className = "",
  title = "Title",
  description,
  buttonLabel,
  steps = [],
  image = true,
  onButtonClick,
  onStepClick,
  "data-qa": dataQa,
}: ProgressiveContentProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const springConfig = useSpringConfig();

  const ANIMATION_DELAY_BASE = 150;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Animation springs for staggered effect
  const headerSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 0,
  });

  // Individual step animations for stagger effect using useTrail
  const stepTrail = useTrail(steps.length, {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 1,
  });

  // Image transition when step changes - fade out then fade in
  const imageTransitions = useTransition(currentStep, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: springConfig.gentle,
  });

  // Dot animations - create springs for each dot that react to currentStep
  const dotSprings = useSprings(
    steps.length,
    steps.map((_, index) => ({
      height: index === currentStep ? 32 : 8,
      backgroundColor:
        index === currentStep
          ? "var(--neutral-darkest)"
          : "var(--neutral-dark)",
      config: springConfig.slow,
    }))
  );

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  const sectionClasses = clsx(styles.section, className);

  return (
    <animated.section
      ref={ref as React.RefObject<HTMLElement>}
      className={sectionClasses}
      data-qa={dataQa}
    >
      <div className={styles.container}>
        {/* Header Content */}
        <animated.div
          className={styles.content}
          style={{
            ...getAnimationHighlightStyle(
              "gentle",
              springConfig.showHighlights && isInView
            ),
            opacity: headerSpring.opacity,
            transform: headerSpring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <div className={styles.text}>
            <H2 className={styles.title}>{title}</H2>
            {description && (
              <Body className={styles.description}>{description}</Body>
            )}
          </div>
          {buttonLabel && (
            <Button
              label={buttonLabel}
              variant="primary"
              size="medium"
              onClick={handleButtonClick}
              className={styles.button}
            />
          )}
        </animated.div>

        {/* Steps Section */}
        <div className={styles.steps}>
          {/* Desktop/Tablet Landscape - Horizontal Steps */}
          <div className={styles.stepsHorizontal}>
            <div className={styles.stepLabels}>
              {stepTrail.map((stepSpring, index) => {
                const step = steps[index];
                return (
                  <animated.div
                    key={index}
                    style={{
                      opacity: stepSpring.opacity,
                      transform: stepSpring.y.to((y) => `translateY(${y}px)`),
                    }}
                  >
                    <Step
                      title={step.title}
                      description={step.description}
                      index={step.index}
                      current={index === currentStep}
                      onClick={() => handleStepClick(index)}
                      className={styles.step}
                      isInView={isInView}
                    />
                  </animated.div>
                );
              })}
            </div>
            {image && (
              <div
                className={styles.stepImage}
                style={{ position: "relative" }}
              >
                {imageTransitions((style, stepIndex) => (
                  <animated.div
                    style={{
                      ...style,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      ...getAnimationHighlightStyle(
                        "gentle",
                        springConfig.showHighlights && isInView
                      ),
                    }}
                  >
                    <img
                      src={steps[stepIndex].imageSrc}
                      alt="Step image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "var(--corner-radius-large)",
                      }}
                    />
                  </animated.div>
                ))}
              </div>
            )}
            <div className={styles.pageControl}>
              <div className={styles.dots}>
                {dotSprings.map((style, index) => (
                  <animated.button
                    key={index}
                    className={styles.dot}
                    style={{
                      height: style.height.to((h) => `${h}px`),
                      backgroundColor: style.backgroundColor,
                    }}
                    onClick={() => handleStepClick(index)}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Portrait - Vertical Cards */}
          <div className={styles.stepsVertical}>
            {stepTrail.map((stepSpring, index) => {
              const step = steps[index];
              return (
                <animated.div
                  key={index}
                  style={{
                    opacity: stepSpring.opacity,
                    transform: stepSpring.y.to((y) => `translateY(${y}px)`),
                  }}
                >
                  <StepCard
                    index={step.index}
                    title={step.title}
                    description={step.description}
                    imageSrc={step.imageSrc}
                    imageAlt={step.imageAlt}
                    className={styles.stepCard}
                  />
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
    </animated.section>
  );
}
