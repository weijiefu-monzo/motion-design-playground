import React, { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import styles from "./Carousel.module.css";
import IconButton from "../IconButton/IconButton";
import {
  AiOutlinePause,
  AiOutlineArrowRight,
  AiFillCaretRight,
} from "react-icons/ai";

export interface CarouselProps {
  className?: string;
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
  showAutoplayToggle?: boolean;
  onSlideChange?: (index: number) => void;
  "data-qa"?: string;
}

export default function Carousel({
  className = "",
  children,
  autoplay = true,
  autoplayInterval = 3000,
  showControls = true,
  showDots = true,
  showAutoplayToggle = true,
  onSlideChange,
  "data-qa": dataQa,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(autoplay);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = children.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentIndex(index);
        onSlideChange?.(index);
      }
    },
    [totalSlides, onSlideChange]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }, [currentIndex, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, totalSlides, goToSlide]);

  const toggleAutoplay = useCallback(() => {
    setIsAutoplayActive((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          prevSlide();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextSlide();
          break;
        case " ":
          event.preventDefault();
          toggleAutoplay();
          break;
      }
    },
    [prevSlide, nextSlide, toggleAutoplay]
  );

  // Autoplay effect
  useEffect(() => {
    if (isAutoplayActive && !isHovered && totalSlides > 1) {
      autoplayRef.current = setInterval(nextSlide, autoplayInterval);
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplayActive, isHovered, nextSlide, autoplayInterval, totalSlides]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const carouselClasses = clsx(styles.carousel, className);
  const rowClasses = clsx(styles.row);
  const controlsClasses = clsx(styles.controls);

  return (
    <div
      ref={carouselRef}
      className={carouselClasses}
      data-qa={dataQa}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
    >
      {/* Content Row */}
      <div className={rowClasses}>
        <div
          className={styles.slidesContainer}
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / children.length
            }%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={clsx(styles.slot, {
                [styles.active]: index === currentIndex,
              })}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className={controlsClasses}>
          {/* Autoplay Toggle */}
          {showAutoplayToggle && (
            <div className={styles.autoplayControl}>
              <IconButton
                icon={
                  isAutoplayActive ? <AiOutlinePause /> : <AiFillCaretRight />
                }
                onClick={toggleAutoplay}
                aria-label={
                  isAutoplayActive ? "Pause autoplay" : "Start autoplay"
                }
                size="medium"
              />
            </div>
          )}

          {/* Pagination Dots */}
          {showDots && totalSlides > 1 && (
            <div
              className={styles.dots}
              role="tablist"
              aria-label="Carousel pagination"
            >
              {children.map((_, index) => (
                <button
                  key={index}
                  className={clsx(styles.dot, {
                    [styles.active]: index === currentIndex,
                  })}
                  onClick={() => goToSlide(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goToSlide(index);
                    }
                  }}
                  role="tab"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentIndex}
                  tabIndex={index === currentIndex ? 0 : -1}
                />
              ))}
            </div>
          )}

          {/* Next Button */}
          <div className={styles.nextControl}>
            <IconButton
              icon={<AiOutlineArrowRight />}
              onClick={nextSlide}
              aria-label="Next slide"
              size="medium"
            />
          </div>
        </div>
      )}
    </div>
  );
}
