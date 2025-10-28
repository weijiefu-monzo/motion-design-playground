import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./GettingStarted.module.css";
import { Button } from "../../components";
import { H2, Body } from "../../components/Typography";
import Step from "./Step";
import StepCard from "./StepCard";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
export interface GettingStartedProps {
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

export default function GettingStarted({
  className = "",
  title = "Title",
  description,
  buttonLabel,
  steps = [],
  image = true,
  onButtonClick,
  onStepClick,
  "data-qa": dataQa,
}: GettingStartedProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const springConfig = useSpringConfig();

  const ANIMATION_DELAY_BASE = 100;

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
  const [headerSpring] = useSpring(() => ({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 0,
  }));

  // Individual step animations for stagger effect
  const getStepSpring = (index: number) => {
    const [spring] = useSpring(() => ({
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : -20,
      config: springConfig.gentle,
      delay: ANIMATION_DELAY_BASE * 2 + index * 100,
    }));
    return spring;
  };

  // Image transition when step changes - creates new animation when key changes
  const [imageSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0.75, x: isInView ? 0 : 30 },
    config: springConfig.gentle,
    reset: true,
  }));

  // Dot animations
  const getDotSpring = (index: number) => {
    const [spring] = useSpring(() => ({
      height: index === currentStep ? 32 : 8,
      backgroundColor:
        index === currentStep
          ? "var(--neutral-darkest)"
          : "var(--neutral-dark)",
      config: springConfig.slow,
    }));
    return spring;
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  const [currentStep, setCurrentStep] = useState(0);
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
              {steps.map((step, index) => {
                const stepSpring = getStepSpring(index);
                return (
                  <animated.div
                    key={index}
                    style={{
                      opacity: stepSpring.opacity,
                      transform: stepSpring.x.to((x) => `translateX(${x}px)`),
                    }}
                  >
                    <Step
                      title={step.title}
                      description={step.description}
                      index={step.index}
                      current={index === currentStep}
                      onClick={() => handleStepClick(index)}
                      className={styles.step}
                    />
                  </animated.div>
                );
              })}
            </div>
            {image && (
              <animated.div
                className={styles.stepImage}
                key={currentStep}
                style={{
                  opacity: imageSpring.opacity,
                }}
              >
                <img src={steps[currentStep].imageSrc} alt="Step image" />
              </animated.div>
            )}
            <div className={styles.pageControl}>
              <div className={styles.dots}>
                {steps.map((_, index) => {
                  const dotSpring = getDotSpring(index);
                  return (
                    <animated.button
                      key={index}
                      className={styles.dot}
                      style={{
                        height: dotSpring.height.to((h) => `${h}px`),
                        backgroundColor: dotSpring.backgroundColor,
                      }}
                      onClick={() => handleStepClick(index)}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Portrait - Vertical Cards */}
          <div className={styles.stepsVertical}>
            {steps.map((step, index) => {
              const stepSpring = getStepSpring(index);
              return (
                <animated.div
                  key={index}
                  style={{
                    opacity: stepSpring.opacity,
                    transform: stepSpring.x.to((x) => `translateX(${x}px)`),
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
