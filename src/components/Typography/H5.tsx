import React from "react";
import { HeadingProps } from "./types";
import styles from "./Typography.module.css";

export const H5: React.FC<HeadingProps> = ({
  children,
  className = "",
  as: Component = "h5",
}) => {
  return (
    <Component className={`${styles.h5} ${className}`}>{children}</Component>
  );
};
