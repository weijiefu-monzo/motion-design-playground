export type AnimationType = "gentle" | "default" | "slow";

const HIGHLIGHT_COLORS: Record<AnimationType, string> = {
  gentle: "#10B981", // Green 500 - smooth and calm
  default: "#3B82F6", // Blue 500 - standard
  slow: "#8B5CF6", // Violet 500 - leisurely
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
