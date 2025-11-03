import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Header.module.css";
import { Button, IconButton } from "../../components";
import { Body } from "@/components/Typography";
import NavMenu from "./NavMenu";
import { useSpringConfig } from "@/contexts/SpringConfigContext";
export interface HeaderProps {
  className?: string;
  inverse?: boolean;
  currentTab?: "Personal" | "Business";
  onTabChange?: (tab: "Personal" | "Business") => void;
  onSignUp?: () => void;
  onLogIn?: () => void;
  onMenuToggle?: () => void;
  "data-qa"?: string;
}

export default function Header({
  className = "",
  inverse = false,
  currentTab = "Personal",
  onTabChange,
  onSignUp,
  onLogIn,
  onMenuToggle,
  "data-qa": dataQa,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const springConfig = useSpringConfig();

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const currentScrollY = target.scrollTop || 0;

      // Update visibility based on scroll direction
      if (currentScrollY === 0 || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Find the scrollable parent
    const findScrollableParent = (
      element: HTMLElement | null
    ): HTMLElement | null => {
      if (!element) return null;

      // Check if this element is scrollable
      const overflowY = window.getComputedStyle(element).overflowY;
      if (overflowY === "scroll" || overflowY === "auto") {
        return element;
      }

      // Recursively check parent
      return findScrollableParent(element.parentElement);
    };

    // Wait for the header ref to be attached
    const timeoutId = setTimeout(() => {
      if (!headerRef.current) return;

      // Start from the header wrapper's parent element (the page container)
      const scrollableParent = findScrollableParent(
        headerRef.current.parentElement?.parentElement as HTMLElement
      );

      if (scrollableParent) {
        scrollableParent.addEventListener("scroll", handleScroll, {
          passive: true,
        });
      } else {
        // Fallback to window scroll
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      // Clean up will be handled by the component unmount
    };
  }, []);

  const spring = useSpring({
    y: isVisible ? 0 : -100,
    config: { ...springConfig.default, clamp: true },
  });

  const handleTabChange = (tab: "Personal" | "Business") => {
    if (onTabChange) {
      onTabChange(tab);
    }
    // Open nav menu when tab is clicked
    setIsNavMenuOpen(true);
  };

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    }
  };

  const handleLogIn = () => {
    if (onLogIn) {
      onLogIn();
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  const handleNavMenuClose = () => {
    setIsNavMenuOpen(false);
  };

  const headerClasses = clsx(
    styles.header,
    {
      [styles.inverse]: inverse,
    },
    className
  );

  return (
    <>
      <animated.header
        className={styles.headerWrapper}
        data-qa={dataQa}
        style={{
          transform: spring.y.to((y) => `translateY(${y}%)`),
        }}
      >
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={headerClasses}
        >
          <div className={styles.container}>
            {/* Mobile Menu Button */}
            <div className={styles.mobileMenu}>
              <IconButton
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                      fill="currentColor"
                    />
                  </svg>
                }
                size="medium"
                onClick={handleMenuToggle}
                aria-label="Toggle menu"
                className={styles.menuButton}
              />
            </div>

            {/* Logo */}
            <div className={styles.logo}>
              <svg
                width="138"
                height="24"
                viewBox="0 0 138 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0789831 23.3769V0.626117H6.24562V3.66757C7.66062 1.33063 9.73947 0.196533 12.5345 0.196533C15.3296 0.196533 17.4434 1.38218 18.9457 3.8394C21.3565 1.34782 23.2082 0.196533 26.0906 0.196533C31.2965 0.196533 34.2313 3.08334 34.2313 8.37581V23.3769H27.593V11.0564C27.593 7.87749 26.9117 6.43409 24.3612 6.43409C21.8107 6.43409 20.3957 7.99778 20.3957 11.0564V23.3769H13.7224V11.0564C13.7224 7.87749 13.0412 6.43409 10.4906 6.43409C7.94014 6.43409 6.52513 7.99778 6.52513 11.0564V23.3769H0.0615234H0.0789831Z"
                  fill="currentColor"
                />
                <path
                  d="M42.0932 3.59858C44.4166 1.31319 47.4737 0.041626 50.6182 0.041626C53.9723 0.041626 56.8547 1.19291 59.1956 3.34083C61.6587 5.62622 62.9864 8.77077 62.9864 11.8466C62.9864 15.2833 61.816 18.1185 59.4926 20.4039C57.1167 22.7408 54.1994 23.9609 50.7056 23.9609C47.2117 23.9609 44.3293 22.7752 41.9709 20.318C39.7349 18.0326 38.5645 15.1114 38.5645 11.9325C38.5645 8.75359 39.8048 5.83242 42.0932 3.5814V3.59858ZM50.7405 17.6202C53.7627 17.6202 56.2084 15.1286 56.2084 12.0356C56.2084 8.9426 53.7452 6.39947 50.7405 6.39947C47.7358 6.39947 45.2726 8.89105 45.2726 12.0356C45.2726 15.1802 47.7707 17.6202 50.7405 17.6202Z"
                  fill="currentColor"
                />
                <path
                  d="M67.3008 23.3768V0.625995H73.7644L73.6771 3.66745C75.0921 1.38206 77.2582 0.196411 80.3153 0.196411C85.1019 0.196411 88.194 3.16913 88.194 8.37569V23.3768H81.3985V11.0563C81.3985 7.87737 80.7171 6.43397 78.0793 6.43397C75.4414 6.43397 73.9915 7.99765 73.9915 11.0563V23.3768H67.3183H67.3008Z"
                  fill="currentColor"
                />
                <path
                  d="M117.053 3.59858C119.377 1.31319 122.434 0.041626 125.578 0.041626C128.932 0.041626 131.815 1.19291 134.156 3.34083C136.619 5.62622 137.946 8.77077 137.946 11.8466C137.946 15.2833 136.776 18.1185 134.453 20.4039C132.077 22.7408 129.159 23.9609 125.666 23.9609C122.172 23.9609 119.289 22.7752 116.931 20.318C114.695 18.0326 113.524 15.1114 113.524 11.9325C113.524 8.75359 114.765 5.83242 117.053 3.5814V3.59858ZM125.7 17.6202C128.723 17.6202 131.168 15.1286 131.168 12.0356C131.168 8.9426 128.705 6.39947 125.7 6.39947C122.696 6.39947 120.233 8.89105 120.233 12.0356C120.233 15.1802 122.731 17.6202 125.7 17.6202Z"
                  fill="currentColor"
                />
                <path
                  d="M93.1387 23.3767V18.6341L102.659 6.51987H93.1387V0.625977H110.328V6.00437L101.926 17.4828H110.503V23.3767H93.1561H93.1387Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Desktop Navigation Tabs */}
            <div className={styles.navigation}>
              <div className={styles.tabContainer}>
                {/* Navigation Menu */}
                <NavMenu
                  isOpen={isNavMenuOpen}
                  onClose={handleNavMenuClose}
                  currentTab={currentTab}
                  inverse={inverse}
                />
                <button
                  className={clsx(styles.tab, {
                    [styles.activeTab]: currentTab === "Personal",
                    [styles.inverseTab]: inverse,
                  })}
                  onClick={() => handleTabChange("Personal")}
                  aria-label="Personal banking"
                >
                  <div className={styles.tabIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Body size="medium" weight="emphasized">
                    Personal
                  </Body>
                  <div className={styles.chevron}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={clsx(styles.tab, {
                    [styles.activeTab]: currentTab === "Business",
                    [styles.inverseTab]: inverse,
                  })}
                  onClick={() => handleTabChange("Business")}
                  aria-label="Business banking"
                >
                  <div className={styles.tabIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Body size="medium" weight="emphasized">
                    Business
                  </Body>
                  <div className={styles.chevron}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <div className={styles.buttonGroup}>
                {inverse ? (
                  <>
                    <Button
                      label="Log in"
                      variant="secondary"
                      inverse={true}
                      onClick={handleLogIn}
                      className={styles.loginButton}
                    />
                    <Button
                      label="Sign up"
                      variant="primary"
                      inverse={true}
                      onClick={handleSignUp}
                      className={styles.signupButton}
                    />
                  </>
                ) : (
                  <Button
                    label="Sign up"
                    variant="primary"
                    onClick={handleSignUp}
                    className={styles.signupButton}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </animated.header>
    </>
  );
}
