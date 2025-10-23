import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
  size?: "medium" | "small";
  inverse?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "data-qa"?: string;
}

export default function Button({
  className = "",
  label = "Button",
  variant = "primary",
  size = "medium",
  inverse = false,
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    inverse && styles.inverse,
    disabled && styles.disabled,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentClasses = [styles.content, styles[`${size}Content`]].join(" ");

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
      data-qa={dataQa}
      tabIndex={disabled ? -1 : 0}
    >
      {loading ? (
        <div className={styles.loadingIndicator}>
          <div className={styles.loadingSpinner} />
        </div>
      ) : (
        <div className={contentClasses}>
          <p className={styles.text}>{label}</p>
        </div>
      )}
    </button>
  );
}
