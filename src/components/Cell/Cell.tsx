import React from "react";
import clsx from "clsx";
import styles from "./Cell.module.css";

export interface CellProps {
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
  "data-qa"?: string;
  style?: React.CSSProperties;
}

export default function Cell({
  className = "",
  children,
  "aria-label": ariaLabel,
  "data-qa": dataQa,
  style = {},
}: CellProps) {
  const cellClasses = clsx(styles.cell, className);

  return (
    <div
      className={cellClasses}
      aria-label={ariaLabel}
      data-qa={dataQa}
      style={style}
    >
      {children}
    </div>
  );
}
