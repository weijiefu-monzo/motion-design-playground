import React from "react";
import { HeadingProps } from "./types";
import styles from "./Typography.module.css";

export const H1: React.FC<HeadingProps> = ({
  children,
  className = "",
  as: Component = "h1",
}) => {
  return (
    <Component className={`${styles.h1} ${className}`}>{children}</Component>
  );
};
