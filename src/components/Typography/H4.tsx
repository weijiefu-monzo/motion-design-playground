import React from "react";
import { HeadingProps } from "./types";
import styles from "./Typography.module.css";

export const H4: React.FC<HeadingProps> = ({
  children,
  className = "",
  as: Component = "h4",
}) => {
  return (
    <Component className={`${styles.h4} ${className}`}>{children}</Component>
  );
};
