import React from "react";
import { HeadingProps } from "./types";
import styles from "./Typography.module.css";

export const H3: React.FC<HeadingProps> = ({
  children,
  className = "",
  as: Component = "h3",
}) => {
  return (
    <Component className={`${styles.h3} ${className}`}>{children}</Component>
  );
};
