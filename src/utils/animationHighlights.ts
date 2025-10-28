export type AnimationType =
  | "gentle"
  | "default"
  | "wobbly"
  | "stiff"
  | "slow"
  | "molasses";

const HIGHLIGHT_COLORS: Record<AnimationType, string> = {
  gentle: "#10B981", // Green 500 - smooth and calm
  default: "#3B82F6", // Blue 500 - standard
  wobbly: "#F59E0B", // Amber 500 - bouncy energy
  stiff: "#EF4444", // Red 500 - quick and sharp
  slow: "#8B5CF6", // Violet 500 - leisurely
  molasses: "#6B7280", // Gray 500 - very slow
};

export const getAnimationHighlightStyle = (
  animationType: AnimationType,
  showHighlights: boolean
): React.CSSProperties => {
  if (!showHighlights) {
    return {};
  }

  return {
    outline: `2px solid ${HIGHLIGHT_COLORS[animationType]}`,
    outlineOffset: "2px",
  };
};
