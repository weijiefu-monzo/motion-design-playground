import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useSpring, animated, useTrail } from "@react-spring/web";
import styles from "./FAQ.module.css";
import { Accordion } from "../../components";
import { H2 } from "../../components/Typography";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
export interface FAQProps {
  className?: string;
  title?: string;
  questions?: Array<{
    question: string;
    answer: string;
    expanded?: boolean;
  }>;
  onToggle?: (index: number, expanded: boolean) => void;
  "data-qa"?: string;
}

export default function FAQ({
  className = "",
  title = "Questions?Answers.",
  questions = [],
  onToggle,
  "data-qa": dataQa,
}: FAQProps) {
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

  const titleSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 0,
  });

  // Animation trail for staggered accordions
  const accordionTrail = useTrail(questions.length, {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 30,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 1,
  }) as any;

  const handleToggle = (index: number, expanded: boolean) => {
    if (onToggle) {
      onToggle(index, expanded);
    }
  };

  const sectionClasses = clsx(styles.section, className);

  return (
    <animated.section
      ref={ref as React.RefObject<HTMLElement>}
      className={sectionClasses}
      data-qa={dataQa}
    >
      <div className={styles.container}>
        <animated.div
          style={{
            opacity: titleSpring.opacity,
            transform: titleSpring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <H2 className={styles.title}>{title}</H2>
        </animated.div>
        <div className={styles.content}>
          {questions.map((item, index) => {
            const accordionSpring = accordionTrail[index];
            return (
              <animated.div
                key={index}
                style={{
                  opacity: accordionSpring.opacity,
                  transform: accordionSpring.y.to(
                    (y: number) => `translateY(${y}px)`
                  ),
                }}
              >
                <Accordion
                  title={item.question}
                  details={item.answer}
                  expanded={item.expanded}
                  onToggle={(expanded) => handleToggle(index, expanded)}
                  data-qa={`faq-accordion-${index}`}
                />
              </animated.div>
            );
          })}
        </div>
      </div>
    </animated.section>
  );
}
