import { useControls, folder } from "leva";

export const useSpringConfig = () => {
  const {
    gentle,
    default: defaultSpring,
    wobbly,
    stiff,
    slow,
    molasses,
  } = useControls({
    Gentle: folder({
      tension: { value: 120, min: 50, max: 300, step: 10 },
      friction: { value: 14, min: 5, max: 50, step: 1 },
    }),
    Default: folder({
      tension: { value: 170, min: 50, max: 300, step: 10 },
      friction: { value: 26, min: 5, max: 50, step: 1 },
    }),
    Wobbly: folder({
      tension: { value: 180, min: 50, max: 300, step: 10 },
      friction: { value: 12, min: 5, max: 50, step: 1 },
    }),
    Stiff: folder({
      tension: { value: 210, min: 50, max: 300, step: 10 },
      friction: { value: 20, min: 5, max: 50, step: 1 },
    }),
    Slow: folder({
      tension: { value: 280, min: 50, max: 300, step: 10 },
      friction: { value: 60, min: 5, max: 100, step: 5 },
    }),
    Molasses: folder({
      tension: { value: 280, min: 50, max: 300, step: 10 },
      friction: { value: 120, min: 5, max: 200, step: 10 },
    }),
  });

  const springConfig = {
    gentle,
    default: defaultSpring,
    wobbly,
    stiff,
    slow,
    molasses,
  };

  return springConfig;
};

// Fallback static config for when Leva is not available
export const SPRING_CONFIG = {
  gentle: { tension: 120, friction: 14 },
  default: { tension: 170, friction: 26 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 },
};
