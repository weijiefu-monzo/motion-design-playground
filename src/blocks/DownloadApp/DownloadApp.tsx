import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./DownloadApp.module.css";
import { Button } from "../../components";
import { H2, Body } from "../../components/Typography";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
export interface DownloadAppProps {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  customerCount?: string;
  appStoreRating?: string;
  googlePlayRating?: string;
  onButtonClick?: () => void;
  "data-qa"?: string;
}

export default function DownloadApp({
  className = "",
  title = "Open a free Monzo account and see if you are eligible",
  description = "Body copy in a couple of sentences.",
  buttonLabel = "Open a free Monzo account",
  customerCount = "13 million customers",
  appStoreRating = "4.9",
  googlePlayRating = "4.9",
  onButtonClick,
  "data-qa": dataQa,
}: DownloadAppProps) {
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
  const contentSpring = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 0,
  });

  const mediaSpring = useSpring({
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : 30,
    config: springConfig.gentle,
    delay: ANIMATION_DELAY_BASE * 1,
  });

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
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
          className={styles.content}
          style={{
            opacity: contentSpring.opacity,
            transform: contentSpring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <div className={styles.text}>
            <H2 className={styles.title}>{title}</H2>
            {description && (
              <Body className={styles.description} size="large">
                {description}
              </Body>
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

        <animated.div
          className={styles.media}
          style={{
            opacity: mediaSpring.opacity,
            transform: mediaSpring.x.to((x) => `translateX(${x}px)`),
          }}
        >
          <div className={styles.videoContainer}>
            <img src="/download.png" alt="Video placeholder" />
          </div>

          <div className={styles.socialProof}>
            <div className={styles.ratingItem}>
              <div className={styles.appIcon}>
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.03704 0C11.5532 4.97765 7.7508 7.43872 6.31047 8.16016C6.38139 8.82912 6.46944 9.49811 6.57708 10.165C7.37457 7.9086 9.99232 7.09878 9.99309 7.08301C11.8504 11.3442 8.58407 13.2147 7.34954 13.75C7.56994 14.5579 7.82246 15.3567 8.10637 16.1436C8.69925 14.0694 10.748 12.9004 10.748 12.9004C13.3981 16.5129 11.105 19.0453 9.85442 20.0527C10.075 20.4574 10.3064 20.8566 10.5488 21.249C10.8046 21.6638 11.0717 22.0661 11.3466 22.457C11.0874 19.7764 13.4139 17.7419 13.456 17.7188C17.068 21.0529 14.9739 24.2624 13.8906 25.5039C14.5813 26.2028 15.2973 26.8394 16.0263 27.4102C14.9042 24.819 17.0527 22.3145 17.0527 22.3145C20.6237 24.7462 19.3219 27.789 18.5175 29.0811C20.6014 30.258 22.6679 30.8867 24.4306 30.8867C25.1411 30.9533 25.1411 32.0637 24.4306 31.9971C20.3362 31.5539 19.1475 30.9066 16.0077 28.6318C11.2081 32.3489 7.94915 27.1992 7.94915 27.1992C9.82548 25.6812 11.472 25.5247 12.789 25.9053C11.8553 24.9471 11.0108 23.9104 10.2548 22.8105C5.62066 24.5425 4.13079 19.6943 4.13079 19.6943C6.02267 18.863 7.42091 19.1 8.42766 19.708C7.9733 18.8033 7.56578 17.8729 7.20696 16.9229C2.66878 18.1054 1.52302 13.3897 1.53313 13.3447C3.79361 12.5254 5.29422 13.1023 6.26458 13.9951C6.24196 13.9114 6.21817 13.828 6.19622 13.7441C5.99137 12.9609 5.80472 12.1608 5.64055 11.3516C-0.182882 11.4161 -0.00068481 5.46671 0.00090411 5.41797C2.65446 5.1999 4.18336 6.1504 5.06536 7.34863C5.027 6.85292 5.00067 6.35768 4.99114 5.86426C4.51897 1.69472 8.98778 0.0183417 9.03704 0Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
              <div className={styles.ratingContent}>
                <div className={styles.ratingScore}>
                  <div className={styles.starIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <Body
                    size="large"
                    weight="emphasized"
                    className={styles.scoreText}
                  >
                    {appStoreRating}
                  </Body>
                </div>
                <Body
                  size="medium"
                  weight="regular"
                  className={styles.platformText}
                >
                  App Store
                </Body>
              </div>
              <div className={styles.appIcon}>
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9264 0C13.4103 4.97765 17.2127 7.43872 18.653 8.16016C18.5821 8.82912 18.494 9.49811 18.3864 10.165C17.5889 7.9086 14.9712 7.09878 14.9704 7.08301C13.1131 11.3442 16.3794 13.2147 17.6139 13.75C17.3935 14.5579 17.141 15.3567 16.8571 16.1436C16.2642 14.0694 14.2155 12.9004 14.2155 12.9004C11.5654 16.5129 13.8585 19.0453 15.1091 20.0527C14.8884 20.4574 14.657 20.8566 14.4147 21.249C14.1589 21.6638 13.8917 22.0661 13.6169 22.457C13.8761 19.7764 11.5495 17.7419 11.5075 17.7188C7.89551 21.0529 9.98962 24.2624 11.0729 25.5039C10.3822 26.2028 9.66614 26.8394 8.93718 27.4102C10.0593 24.819 7.91082 22.3145 7.91082 22.3145C4.33974 24.7462 5.64158 27.789 6.44597 29.0811C4.36211 30.258 2.29557 30.8867 0.532887 30.8867C-0.177629 30.9533 -0.177629 32.0637 0.532887 31.9971C4.6273 31.5539 5.816 30.9066 8.95574 28.6318C13.7554 32.3489 17.0143 27.1992 17.0143 27.1992C15.138 25.6812 13.4915 25.5247 12.1745 25.9053C13.1082 24.9471 13.9527 23.9104 14.7087 22.8105C19.3428 24.5425 20.8327 19.6943 20.8327 19.6943C18.9408 18.863 17.5426 19.1 16.5358 19.708C16.9902 18.8033 17.3977 17.8729 17.7565 16.9229C22.2947 18.1054 23.4405 13.3897 23.4303 13.3447C21.1699 12.5254 19.6693 13.1023 18.6989 13.9951C18.7215 13.9114 18.7453 13.828 18.7673 13.7441C18.9721 12.9609 19.1588 12.1608 19.3229 11.3516C25.1464 11.4161 24.9642 5.46671 24.9626 5.41797C22.309 5.1999 20.7801 6.1504 19.8981 7.34863C19.9365 6.85292 19.9628 6.35768 19.9723 5.86426C20.4445 1.69472 15.9757 0.0183417 15.9264 0Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.customerCount}>
              <div className={styles.row}>
                <div className={styles.heartIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <Body
                  size="medium"
                  weight="regular"
                  className={styles.joinText}
                >
                  Join
                </Body>
              </div>

              <div className={styles.customerText}>
                <Body
                  size="large"
                  weight="emphasized"
                  className={styles.countText}
                >
                  {customerCount}
                </Body>
              </div>
            </div>

            <div className={styles.ratingItem}>
              <div className={styles.appIcon}>
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.03704 0C11.5532 4.97765 7.7508 7.43872 6.31047 8.16016C6.38139 8.82912 6.46944 9.49811 6.57708 10.165C7.37457 7.9086 9.99232 7.09878 9.99309 7.08301C11.8504 11.3442 8.58407 13.2147 7.34954 13.75C7.56994 14.5579 7.82246 15.3567 8.10637 16.1436C8.69925 14.0694 10.748 12.9004 10.748 12.9004C13.3981 16.5129 11.105 19.0453 9.85442 20.0527C10.075 20.4574 10.3064 20.8566 10.5488 21.249C10.8046 21.6638 11.0717 22.0661 11.3466 22.457C11.0874 19.7764 13.4139 17.7419 13.456 17.7188C17.068 21.0529 14.9739 24.2624 13.8906 25.5039C14.5813 26.2028 15.2973 26.8394 16.0263 27.4102C14.9042 24.819 17.0527 22.3145 17.0527 22.3145C20.6237 24.7462 19.3219 27.789 18.5175 29.0811C20.6014 30.258 22.6679 30.8867 24.4306 30.8867C25.1411 30.9533 25.1411 32.0637 24.4306 31.9971C20.3362 31.5539 19.1475 30.9066 16.0077 28.6318C11.2081 32.3489 7.94915 27.1992 7.94915 27.1992C9.82548 25.6812 11.472 25.5247 12.789 25.9053C11.8553 24.9471 11.0108 23.9104 10.2548 22.8105C5.62066 24.5425 4.13079 19.6943 4.13079 19.6943C6.02267 18.863 7.42091 19.1 8.42766 19.708C7.9733 18.8033 7.56578 17.8729 7.20696 16.9229C2.66878 18.1054 1.52302 13.3897 1.53313 13.3447C3.79361 12.5254 5.29422 13.1023 6.26458 13.9951C6.24196 13.9114 6.21817 13.828 6.19622 13.7441C5.99137 12.9609 5.80472 12.1608 5.64055 11.3516C-0.182882 11.4161 -0.00068481 5.46671 0.00090411 5.41797C2.65446 5.1999 4.18336 6.1504 5.06536 7.34863C5.027 6.85292 5.00067 6.35768 4.99114 5.86426C4.51897 1.69472 8.98778 0.0183417 9.03704 0Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
              <div className={styles.ratingContent}>
                <div className={styles.ratingScore}>
                  <div className={styles.starIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <Body
                    size="large"
                    weight="emphasized"
                    className={styles.scoreText}
                  >
                    {googlePlayRating}
                  </Body>
                </div>
                <Body
                  size="medium"
                  weight="regular"
                  className={styles.platformText}
                >
                  Google Play
                </Body>
              </div>
              <div className={styles.appIcon}>
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9264 0C13.4103 4.97765 17.2127 7.43872 18.653 8.16016C18.5821 8.82912 18.494 9.49811 18.3864 10.165C17.5889 7.9086 14.9712 7.09878 14.9704 7.08301C13.1131 11.3442 16.3794 13.2147 17.6139 13.75C17.3935 14.5579 17.141 15.3567 16.8571 16.1436C16.2642 14.0694 14.2155 12.9004 14.2155 12.9004C11.5654 16.5129 13.8585 19.0453 15.1091 20.0527C14.8884 20.4574 14.657 20.8566 14.4147 21.249C14.1589 21.6638 13.8917 22.0661 13.6169 22.457C13.8761 19.7764 11.5495 17.7419 11.5075 17.7188C7.89551 21.0529 9.98962 24.2624 11.0729 25.5039C10.3822 26.2028 9.66614 26.8394 8.93718 27.4102C10.0593 24.819 7.91082 22.3145 7.91082 22.3145C4.33974 24.7462 5.64158 27.789 6.44597 29.0811C4.36211 30.258 2.29557 30.8867 0.532887 30.8867C-0.177629 30.9533 -0.177629 32.0637 0.532887 31.9971C4.6273 31.5539 5.816 30.9066 8.95574 28.6318C13.7554 32.3489 17.0143 27.1992 17.0143 27.1992C15.138 25.6812 13.4915 25.5247 12.1745 25.9053C13.1082 24.9471 13.9527 23.9104 14.7087 22.8105C19.3428 24.5425 20.8327 19.6943 20.8327 19.6943C18.9408 18.863 17.5426 19.1 16.5358 19.708C16.9902 18.8033 17.3977 17.8729 17.7565 16.9229C22.2947 18.1054 23.4405 13.3897 23.4303 13.3447C21.1699 12.5254 19.6693 13.1023 18.6989 13.9951C18.7215 13.9114 18.7453 13.828 18.7673 13.7441C18.9721 12.9609 19.1588 12.1608 19.3229 11.3516C25.1464 11.4161 24.9642 5.46671 24.9626 5.41797C22.309 5.1999 20.7801 6.1504 19.8981 7.34863C19.9365 6.85292 19.9628 6.35768 19.9723 5.86426C20.4445 1.69472 15.9757 0.0183417 15.9264 0Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </animated.section>
  );
}
