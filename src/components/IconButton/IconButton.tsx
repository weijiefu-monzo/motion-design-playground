import React from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps {
  className?: string;
  icon?: React.ReactNode;
  size?: "medium" | "small";
  inverse?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "data-qa"?: string;
}

export default function IconButton({
  className = "",
  icon,
  size = "medium",
  inverse = false,
  outlined = true,
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  "data-qa": dataQa,
}: IconButtonProps) {
  const buttonClasses = [
    styles.iconButton,
    styles[size],
    outlined ? styles.outlined : styles.filled,
    inverse && styles.inverse,
    disabled && styles.disabled,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(" ");

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
        <div className={styles.iconContainer}>
          {icon || <div className={styles.defaultIcon} />}
        </div>
      )}
    </button>
  );
}
