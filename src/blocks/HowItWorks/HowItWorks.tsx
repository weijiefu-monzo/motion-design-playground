import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./HowItWorks.module.css";
import { Carousel } from "../../components";
import { H2 } from "../../components/Typography";
import Card from "../../components/Card/Card";
import { useSpringConfig } from "@/contexts/SpringConfigContext";

export interface HowItWorksProps {
  className?: string;
  title?: string;
  cards?: Array<{
    title: string;
    description: string;
    buttonLabel?: string;
    caption?: string;
    inverse?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    onButtonClick?: () => void;
  }>;
  onCardButtonClick?: (index: number) => void;
  "data-qa"?: string;
}

export default function HowItWorks({
  className = "",
  title = "How it works",
  cards = [
    {
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Button",
      caption: "Lorem ipsum dolor sit amet.",
      inverse: false,
    },
    {
      title: "Card 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonLabel: "Button",
      caption: "Duis aute irure dolor in reprehenderit.",
      inverse: true,
    },
    {
      title: "Card 3",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      buttonLabel: "Button",
      caption: "Sed ut perspiciatis unde omnis.",
      inverse: false,
    },
    {
      title: "Card 4",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
      buttonLabel: "Button",
      caption: "Et harum quidem rerum facilis est.",
      inverse: true,
    },
    {
      title: "Card 5",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
      buttonLabel: "Button",
      caption: "Temporibus autem quibusdam et aut officiis.",
      inverse: false,
    },
  ],
  onCardButtonClick,
  "data-qa": dataQa,
}: HowItWorksProps) {
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
  const titleSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 0,
  });

  const carouselSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 1,
  });

  const handleCardButtonClick = (index: number) => {
    if (onCardButtonClick) {
      onCardButtonClick(index);
    }
  };

  const sectionClasses = clsx(styles.section, className);

  const titleClasses = clsx(styles.title);

  // Render cards with responsive layout
  const renderCards = () => {
    const carouselItems = cards.map((card, index) => (
      <div
        key={index}
        style={{
          width: `clamp(80vw, 80vw, calc(1440px / ${cards.length}))`,
          height: "auto",
        }}
      >
        <Card
          key={index}
          title={card.title}
          description={card.description}
          direction="horizontal"
          inverse={card.inverse}
          contained={true}
          caption={card.caption}
          buttonLabel={card.buttonLabel}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          onButtonClick={() => handleCardButtonClick(index)}
        />
      </div>
    ));

    return (
      <>
        {/* Desktop/Tablet Landscape - Carousel */}
        <div className={styles.carouselContainer}>
          <Carousel
            children={carouselItems}
            autoplay={true}
            autoplayInterval={4000}
            showControls={true}
            showDots={true}
            showAutoplayToggle={true}
            className={styles.carousel}
          />
        </div>

        {/* Mobile/Tablet Portrait - Stack */}
        <div className={styles.cardsStack}>
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              direction="vertical"
              inverse={card.inverse}
              contained={true}
              caption={card.caption}
              buttonLabel={card.buttonLabel}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              onButtonClick={() => handleCardButtonClick(index)}
              className={styles.card}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <animated.section
      ref={ref as React.RefObject<HTMLElement>}
      className={sectionClasses}
      data-qa={dataQa}
    >
      <animated.div
        style={{
          opacity: titleSpring.opacity,
          transform: titleSpring.y.to((y) => `translateY(${y}px)`),
        }}
      >
        <H2 className={titleClasses}>{title}</H2>
      </animated.div>

      <animated.div
        style={{
          opacity: carouselSpring.opacity,
          transform: carouselSpring.y.to((y) => `translateY(${y}px)`),
        }}
      >
        {renderCards()}
      </animated.div>
    </animated.section>
  );
}
