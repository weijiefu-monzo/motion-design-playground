import React from "react";
import clsx from "clsx";
import styles from "./FAQ.module.css";
import { Accordion } from "../../components";
import { H2 } from "../../components/Typography";

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
  const handleToggle = (index: number, expanded: boolean) => {
    if (onToggle) {
      onToggle(index, expanded);
    }
  };

  const sectionClasses = clsx(styles.section, className);

  return (
    <section className={sectionClasses} data-qa={dataQa}>
      <div className={styles.container}>
        <H2 className={styles.title}>{title}</H2>
        <div className={styles.content}>
          {questions.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              details={item.answer}
              expanded={item.expanded}
              onToggle={(expanded) => handleToggle(index, expanded)}
              data-qa={`faq-accordion-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
