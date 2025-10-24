import React from "react";
import clsx from "clsx";
import styles from "./GettingStarted.module.css";
import { Button } from "../../components";
import { H2, Body } from "../../components/Typography";
import Step from "./Step";
import StepCard from "./StepCard";
import { useState } from "react";
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
    <section className={sectionClasses} data-qa={dataQa}>
      <div className={styles.container}>
        {/* Header Content */}
        <div className={styles.content}>
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
        </div>

        {/* Steps Section */}
        <div className={styles.steps}>
          {/* Desktop/Tablet Landscape - Horizontal Steps */}
          <div className={styles.stepsHorizontal}>
            <div className={styles.stepLabels}>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  title={step.title}
                  description={step.description}
                  index={step.index}
                  current={index === currentStep}
                  onClick={() => handleStepClick(index)}
                  className={styles.step}
                />
              ))}
            </div>
            {image && (
              <div className={styles.stepImage}>
                <img src={steps[currentStep].imageSrc} alt="Step image" />
              </div>
            )}
            <div className={styles.pageControl}>
              <div className={styles.dots}>
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={clsx(styles.dot, {
                      [styles.activeDot]: index === currentStep,
                    })}
                    onClick={() => handleStepClick(index)}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Portrait - Vertical Cards */}
          <div className={styles.stepsVertical}>
            {steps.map((step, index) => (
              <StepCard
                key={index}
                index={step.index}
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
                imageAlt={step.imageAlt}
                className={styles.stepCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
