import React from "react";
import { HeadingProps } from "./types";
import styles from "./Typography.module.css";

export const Billboard: React.FC<HeadingProps> = ({
  children,
  className = "",
  as: Component = "h1",
}) => {
  return (
    <Component className={`${styles.billboard} ${className}`}>
      {children}
    </Component>
  );
};
