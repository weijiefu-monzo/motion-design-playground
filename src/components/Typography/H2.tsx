import React from "react";
import { HeadingProps } from "./types";
import styles from "./Typography.module.css";

export const H2: React.FC<HeadingProps> = ({
  children,
  className = "",
  as: Component = "h2",
}) => {
  return (
    <Component className={`${styles.h2} ${className}`}>{children}</Component>
  );
};
