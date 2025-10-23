import React, { ReactNode } from "react";

export type BodySize = "large" | "medium" | "small" | "xsmall";
export type BodyWeight = "regular" | "emphasized";

export interface BaseTypographyProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export interface BodyProps extends BaseTypographyProps {
  size?: BodySize;
  weight?: BodyWeight;
  as?: keyof React.JSX.IntrinsicElements;
}

export interface HeadingProps extends BaseTypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
}
