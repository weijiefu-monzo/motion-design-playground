"use client";
import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { useControls, folder } from "leva";

interface SpringConfig {
  gentle: { tension: number; friction: number; clamp: boolean };
  default: { tension: number; friction: number; clamp: boolean };
  wobbly: { tension: number; friction: number; clamp: boolean };
  stiff: { tension: number; friction: number; clamp: boolean };
  slow: { tension: number; friction: number; clamp: boolean };
  molasses: { tension: number; friction: number; clamp: boolean };
  remountKey: number;
  showHighlights: boolean;
}

const SpringConfigContext = createContext<SpringConfig | null>(null);

export const useSpringConfig = () => {
  const context = useContext(SpringConfigContext);
  if (!context) {
    throw new Error(
      "useSpringConfig must be used within a SpringConfigProvider"
    );
  }
  return context;
};

interface SpringConfigProviderProps {
  children: ReactNode;
}

export const SpringConfigProvider = ({
  children,
}: SpringConfigProviderProps) => {
  const [remountKey, setRemountKey] = useState(0);

  const config = useControls("Spring Config", {
    "🟢 Gentle": folder(
      {
        gentleTension: {
          value: 120,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        gentleFriction: {
          value: 14,
          min: 5,
          max: 300,
          step: 1,
          label: "Friction",
        },
        gentleClamp: {
          value: true,
          label: "Clamp",
        },
      },
      { color: "#10B981" }
    ),
    "🔵 Default": folder(
      {
        defaultTension: {
          value: 170,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        defaultFriction: {
          value: 26,
          min: 5,
          max: 300,
          step: 1,
          label: "Friction",
        },
        defaultClamp: {
          value: true,
          label: "Clamp",
        },
      },
      { color: "#3B82F6" }
    ),
    "🟡 Wobbly": folder(
      {
        wobblyTension: {
          value: 180,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        wobblyFriction: {
          value: 12,
          min: 5,
          max: 300,
          step: 1,
          label: "Friction",
        },
        wobblyClamp: {
          value: false,
          label: "Clamp",
        },
      },
      { color: "#F59E0B" }
    ),
    "🔴 Stiff": folder(
      {
        stiffTension: {
          value: 210,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        stiffFriction: {
          value: 20,
          min: 5,
          max: 300,
          step: 1,
          label: "Friction",
        },
        stiffClamp: {
          value: true,
          label: "Clamp",
        },
      },
      { color: "#EF4444" }
    ),
    "🟣 Slow": folder(
      {
        slowTension: {
          value: 280,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        slowFriction: {
          value: 60,
          min: 5,
          max: 300,
          step: 5,
          label: "Friction",
        },
        slowClamp: {
          value: true,
          label: "Clamp",
        },
      },
      { color: "#8B5CF6" }
    ),
    "⚫ Molasses": folder(
      {
        molassesTension: {
          value: 280,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        molassesFriction: {
          value: 120,
          min: 5,
          max: 300,
          step: 10,
          label: "Friction",
        },
        molassesClamp: {
          value: true,
          label: "Clamp",
        },
      },
      { color: "#6B7280" }
    ),
    Controls: folder({
      remountComponents: {
        value: false,
        onChange: () => {
          setRemountKey((prev) => prev + 1);
        },
      },
      showHighlights: {
        value: false,
      },
    }),
  }) as {
    gentleTension: number;
    gentleFriction: number;
    gentleClamp: boolean;
    defaultTension: number;
    defaultFriction: number;
    defaultClamp: boolean;
    wobblyTension: number;
    wobblyFriction: number;
    wobblyClamp: boolean;
    stiffTension: number;
    stiffFriction: number;
    stiffClamp: boolean;
    slowTension: number;
    slowFriction: number;
    slowClamp: boolean;
    molassesTension: number;
    molassesFriction: number;
    molassesClamp: boolean;
    remountComponents: boolean;
    showHighlights: boolean;
  };

  // Create the spring config object - this will be reactive to config changes
  const springConfig: SpringConfig = useMemo(
    () => ({
      gentle: {
        tension: config.gentleTension,
        friction: config.gentleFriction,
        clamp: config.gentleClamp,
      },
      default: {
        tension: config.defaultTension,
        friction: config.defaultFriction,
        clamp: config.defaultClamp,
      },
      wobbly: {
        tension: config.wobblyTension,
        friction: config.wobblyFriction,
        clamp: config.wobblyClamp,
      },
      stiff: {
        tension: config.stiffTension,
        friction: config.stiffFriction,
        clamp: config.stiffClamp,
      },
      slow: {
        tension: config.slowTension,
        friction: config.slowFriction,
        clamp: config.slowClamp,
      },
      molasses: {
        tension: config.molassesTension,
        friction: config.molassesFriction,
        clamp: config.molassesClamp,
      },
      remountKey,
      showHighlights: config.showHighlights,
    }),
    [
      config.gentleTension,
      config.gentleFriction,
      config.gentleClamp,
      config.defaultTension,
      config.defaultFriction,
      config.defaultClamp,
      config.wobblyTension,
      config.wobblyFriction,
      config.wobblyClamp,
      config.stiffTension,
      config.stiffFriction,
      config.stiffClamp,
      config.slowTension,
      config.slowFriction,
      config.slowClamp,
      config.molassesTension,
      config.molassesFriction,
      config.molassesClamp,
      remountKey,
      config.showHighlights,
    ]
  );

  // Debug logging to see if values are updating
  console.log("SpringConfig values:", {
    gentle: springConfig.gentle,
    default: springConfig.default,
    wobbly: springConfig.wobbly,
    stiff: springConfig.stiff,
    slow: springConfig.slow,
    molasses: springConfig.molasses,
  });

  console.log("Raw config values:", {
    gentleTension: config.gentleTension,
    gentleFriction: config.gentleFriction,
    defaultTension: config.defaultTension,
    defaultFriction: config.defaultFriction,
  });

  // Force a re-render when config changes by logging the timestamp
  console.log("Config update timestamp:", Date.now());

  return (
    <SpringConfigContext.Provider value={springConfig}>
      {children}
    </SpringConfigContext.Provider>
  );
};
