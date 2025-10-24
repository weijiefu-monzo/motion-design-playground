import React from "react";
import clsx from "clsx";
import styles from "./IconButton.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

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
  const buttonClasses = clsx(
    styles.iconButton,
    styles[size],
    {
      [styles.outlined]: outlined,
      [styles.filled]: !outlined,
      [styles.inverse]: inverse,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className
  );

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
          {icon ? (
            React.cloneElement(icon as React.ReactElement<any>, {
              size: size === "medium" ? 24 : 16,
            })
          ) : (
            <AiOutlineArrowRight size={size === "medium" ? 24 : 16} />
          )}
        </div>
      )}
    </button>
  );
}
