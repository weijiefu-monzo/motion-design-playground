import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./NavMenu.module.css";
import { Body } from "@/components/Typography";
import { useSpringConfig } from "@/contexts/SpringConfigContext";

export interface MenuCard {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  href?: string;
}

export interface SecondaryContent {
  title: string;
  description?: string;
  cards?: MenuCard[];
  badge?: string;
}

export interface PrimaryMenuItem {
  id: string;
  title: string;
  secondaryContent?: SecondaryContent;
  onClick?: () => void;
  badge?: string;
}

export interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: "Personal" | "Business";
  inverse?: boolean;
  className?: string;
}

const personalPrimaryMenu: PrimaryMenuItem[] = [
  {
    id: "current-accounts",
    title: "Current accounts and plans",
    badge: "New",
    secondaryContent: {
      title: "Current accounts",
      description: "It all starts with our personal current account",
      cards: [
        {
          id: "personal-account",
          title: "Personal account",
          icon: "/card-1.png",
        },
        {
          id: "joint-account",
          title: "Joint account",
          icon: "/card-2.png",
        },
        {
          id: "under-16s",
          title: "Under 16s account",
          icon: "/card-3.png",
        },
        {
          id: "teen-account",
          title: "16-17s account",
          icon: "/card-1.png",
        },
        {
          id: "all-accounts",
          title: "See all current accounts",
          icon: "/card-4.png",
        },
      ],
    },
  },
  {
    id: "why-monzo",
    title: "Why Monzo",
    secondaryContent: {
      title: "Why choose Monzo",
      description: "Everything you need to manage your money better",
      cards: [
        {
          id: "features",
          title: "Features",
          description: "Smart tools to manage your money",
        },
        {
          id: "security",
          title: "Security",
          description: "Your money is protected",
        },
        {
          id: "community",
          title: "Community",
          description: "Join our community",
        },
      ],
    },
  },
  {
    id: "savings",
    title: "Savings",
    secondaryContent: {
      title: "Savings",
      description: "Start saving with Monzo",
      cards: [
        {
          id: "easy-access",
          title: "Easy Access Savings",
          description: "Save with instant access",
        },
        {
          id: "fixed-savings",
          title: "Fixed Savings",
          description: "Lock away your money for better rates",
        },
        {
          id: "pots",
          title: "Pots",
          description: "Organize your money with Pots",
        },
      ],
    },
  },
  {
    id: "investments",
    title: "Investments and Pensions",
    secondaryContent: {
      title: "Investments and Pensions",
      description: "Grow your money for the future",
      cards: [
        {
          id: "isa",
          title: "Stocks & Shares ISA",
          description: "Invest tax-free up to £20,000",
        },
        {
          id: "general-investment",
          title: "General Investment Account",
          description: "Invest without limits",
        },
        {
          id: "pension",
          title: "Pension",
          description: "Plan for your future",
        },
      ],
    },
  },
  {
    id: "credit-loans",
    title: "Credit cards and loans",
    secondaryContent: {
      title: "Credit cards and loans",
      description: "Borrowing options to suit your needs",
      cards: [
        {
          id: "credit-card",
          title: "Credit Card",
          description: "Spend with confidence",
        },
        {
          id: "personal-loan",
          title: "Personal Loan",
          description: "Borrow up to £25,000",
        },
        {
          id: "overdraft",
          title: "Overdraft",
          description: "Flexible borrowing when you need it",
        },
      ],
    },
  },
  {
    id: "insurance",
    title: "Insurance",
    badge: "New",
    secondaryContent: {
      title: "Insurance",
      description: "Protect what matters to you",
      cards: [
        {
          id: "phone-insurance",
          title: "Phone Insurance",
          description: "Protect your phone",
        },
        {
          id: "travel-insurance",
          title: "Travel Insurance",
          description: "Travel with confidence",
        },
        {
          id: "home-insurance",
          title: "Home Insurance",
          description: "Protect your home",
        },
      ],
    },
  },
  {
    id: "help-support",
    title: "Help and Support",
  },
  {
    id: "refer-friend",
    title: "Refer a friend",
  },
  {
    id: "switch",
    title: "Switch to Monzo",
  },
];

const businessPrimaryMenu: PrimaryMenuItem[] = [
  {
    id: "business-accounts",
    title: "Business accounts",
    secondaryContent: {
      title: "Business accounts",
      description: "Banking designed for businesses",
      cards: [
        {
          id: "current-account",
          title: "Business Current Account",
          description: "Everything you need to run your business",
        },
        {
          id: "savings",
          title: "Business Savings",
          description: "Save for your business goals",
        },
        {
          id: "loans",
          title: "Business Loans",
          description: "Funding to grow your business",
        },
      ],
    },
  },
  {
    id: "features",
    title: "Features",
    secondaryContent: {
      title: "Features",
      description: "Everything your business needs",
      cards: [
        {
          id: "invoicing",
          title: "Invoicing",
          description: "Create and send invoices",
        },
        {
          id: "expenses",
          title: "Expense Tracking",
          description: "Track business expenses",
        },
        {
          id: "team-cards",
          title: "Team Cards",
          description: "Give your team spending power",
        },
      ],
    },
  },
  {
    id: "get-paid",
    title: "Get paid",
    secondaryContent: {
      title: "Get paid",
      description: "Accept payments from anywhere",
      cards: [
        {
          id: "card-reader",
          title: "Card Reader",
          description: "Accept card payments in person",
        },
        {
          id: "online-payments",
          title: "Online Payments",
          description: "Accept payments online",
        },
      ],
    },
  },
  {
    id: "make-payments",
    title: "Make payments",
    secondaryContent: {
      title: "Make payments",
      description: "Manage your business payments",
      cards: [
        {
          id: "bills",
          title: "Bills",
          description: "Pay your business bills",
        },
        {
          id: "suppliers",
          title: "Suppliers",
          description: "Pay suppliers easily",
        },
      ],
    },
  },
  {
    id: "tax-accounting",
    title: "Sort tax & accounting",
    secondaryContent: {
      title: "Sort tax & accounting",
      description: "Keep your books in order",
      cards: [
        {
          id: "tax-prep",
          title: "Tax Preparation",
          description: "Prepare for tax season",
        },
        {
          id: "accounting-software",
          title: "Accounting Software",
          description: "Keep your books in order",
        },
      ],
    },
  },
  {
    id: "borrow",
    title: "Borrow money",
    secondaryContent: {
      title: "Borrow money",
      description: "Funding for growth",
      cards: [
        {
          id: "business-loan",
          title: "Business Loan",
          description: "Funding for growth",
        },
        {
          id: "overdraft",
          title: "Business Overdraft",
          description: "Flexible borrowing",
        },
      ],
    },
  },
  {
    id: "manage-spending",
    title: "Manage spending",
    secondaryContent: {
      title: "Manage spending",
      description: "Control your business expenses",
      cards: [
        {
          id: "budgets",
          title: "Budgets",
          description: "Set and track budgets",
        },
        {
          id: "analytics",
          title: "Analytics",
          description: "Understand your spending",
        },
      ],
    },
  },
  {
    id: "business-help",
    title: "Help and support",
  },
];

export default function NavMenu({
  isOpen,
  onClose,
  currentTab,
  inverse = false,
  className = "",
}: NavMenuProps) {
  const [activePrimaryItem, setActivePrimaryItem] = useState<string | null>(
    null
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const springConfig = useSpringConfig();

  const primaryMenu =
    currentTab === "Personal" ? personalPrimaryMenu : businessPrimaryMenu;
  const activeItem = primaryMenu.find((item) => item.id === activePrimaryItem);

  // Set first item with secondary content as default
  useEffect(() => {
    const firstWithSecondary = primaryMenu.find(
      (item) => item.secondaryContent
    );
    if (firstWithSecondary) {
      setActivePrimaryItem(firstWithSecondary.id);
    }
  }, [currentTab, primaryMenu]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const menuSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    y: isOpen ? 0 : -20,
    config: springConfig.default,
  });

  const handlePrimaryItemClick = (item: PrimaryMenuItem) => {
    setActivePrimaryItem(item.id);
    if (item.onClick) {
      item.onClick();
    }
  };

  const menuClasses = clsx(
    styles.navMenu,
    {
      [styles.inverse]: inverse,
    },
    className
  );

  return (
    <>
      {/* Menu */}
      <animated.div
        ref={menuRef}
        className={menuClasses}
        style={{
          opacity: menuSpring.opacity,
          transform: menuSpring.y.to((y) => `translateY(${y}px)`),
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className={styles.menuContainer}>
          <div className={styles.menuContent}>
            {/* Left Side - Primary Menu Items */}
            <div className={styles.primaryMenu}>
              {primaryMenu.map((item) => (
                <button
                  key={item.id}
                  className={clsx(styles.primaryMenuItem, {
                    [styles.activePrimaryMenuItem]:
                      activePrimaryItem === item.id,
                  })}
                  onClick={() => handlePrimaryItemClick(item)}
                >
                  <div className={styles.primaryMenuItemContent}>
                    <div className={styles.primaryMenuItemLabel}>
                      <Body size="large" weight="emphasized">
                        {item.title}
                      </Body>
                    </div>
                    {item.secondaryContent && (
                      <div className={styles.primaryMenuItemChevron}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {item.badge && (
                    <div className={styles.badge}>
                      <Body size="small" weight="emphasized">
                        {item.badge}
                      </Body>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Right Side - Secondary Content */}
            {activeItem?.secondaryContent && (
              <div className={styles.secondaryContent}>
                <div className={styles.secondaryContentHeader}>
                  <div className={styles.secondaryContentTitleGroup}>
                    <Body size="large" weight="emphasized">
                      {activeItem.secondaryContent.title}
                    </Body>
                    {activeItem.secondaryContent.badge && (
                      <div className={styles.badge}>
                        <Body size="small" weight="emphasized">
                          {activeItem.secondaryContent.badge}
                        </Body>
                      </div>
                    )}
                  </div>
                  {activeItem.secondaryContent.description && (
                    <Body size="medium" weight="regular">
                      {activeItem.secondaryContent.description}
                    </Body>
                  )}
                </div>

                {activeItem.secondaryContent.cards && (
                  <div className={styles.cardsContainer}>
                    {activeItem.secondaryContent.cards.map((card) => (
                      <button
                        key={card.id}
                        className={styles.menuCard}
                        onClick={() => onClose()}
                      >
                        {card.icon ? (
                          <>
                            <div className={styles.cardImage}>
                              {/* This would be replaced with actual card images */}
                              <div className={styles.cardPlaceholder}>
                                {card.title.slice(0, 1)}
                              </div>
                            </div>
                            <div className={styles.cardLabel}>
                              <Body size="medium" weight="emphasized">
                                {card.title}
                              </Body>
                            </div>
                          </>
                        ) : (
                          <div className={styles.cardText}>
                            <div className={styles.cardTitle}>
                              <Body size="medium" weight="emphasized">
                                {card.title}
                              </Body>
                            </div>
                            {card.description && (
                              <div className={styles.cardDescription}>
                                <Body size="small" weight="regular">
                                  {card.description}
                                </Body>
                              </div>
                            )}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </>
  );
}
