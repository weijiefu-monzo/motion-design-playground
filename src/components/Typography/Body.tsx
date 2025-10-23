import React from "react";
import { BodyProps } from "./types";
import styles from "./Typography.module.css";

export const Body: React.FC<BodyProps> = ({
  children,
  className = "",
  style,
  size = "medium",
  weight = "regular",
  as: Component = "p",
}) => {
  const ComponentElement = Component as React.ElementType;
  const getBodyClass = () => {
    switch (size) {
      case "large":
        return weight === "emphasized"
          ? styles.bodyLargeEmphasized
          : styles.bodyLargeRegular;
      case "medium":
        return weight === "emphasized"
          ? styles.bodyMediumEmphasized
          : styles.bodyMediumRegular;
      case "small":
        return weight === "emphasized"
          ? styles.bodySmallEmphasized
          : styles.bodySmallRegular;
      case "xsmall":
        return weight === "emphasized"
          ? styles.bodyXSmallEmphasized
          : styles.bodyXSmallRegular;
      default:
        return styles.bodyMediumRegular;
    }
  };

  return (
    <ComponentElement
      className={`${getBodyClass()} ${className}`}
      style={style}
    >
      {children}
    </ComponentElement>
  );
};
