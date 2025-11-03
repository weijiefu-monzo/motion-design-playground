"use client";
import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { useControls, folder } from "leva";

interface SpringConfig {
  default: { tension: number; friction: number; clamp: boolean };
  gentle: { tension: number; friction: number; clamp: boolean };
  slow: { tension: number; friction: number; clamp: boolean };
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
    "🔵 Default": folder(
      {
        defaultTension: {
          value: 110,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        defaultFriction: {
          value: 24,
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
    "🟢 Gentle": folder(
      {
        gentleTension: {
          value: 160,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        gentleFriction: {
          value: 24,
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

    "🟣 Slow": folder(
      {
        slowTension: {
          value: 150,
          min: 5,
          max: 300,
          step: 10,
          label: "Tension",
        },
        slowFriction: {
          value: 30,
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
    slowTension: number;
    slowFriction: number;
    slowClamp: boolean;
    remountComponents: boolean;
    showHighlights: boolean;
  };

  // Create the spring config object - this will be reactive to config changes
  const springConfig: SpringConfig = useMemo(
    () => ({
      default: {
        tension: config.defaultTension,
        friction: config.defaultFriction,
        clamp: config.defaultClamp,
      },
      gentle: {
        tension: config.gentleTension,
        friction: config.gentleFriction,
        clamp: config.gentleClamp,
      },

      slow: {
        tension: config.slowTension,
        friction: config.slowFriction,
        clamp: config.slowClamp,
      },

      remountKey,
      showHighlights: config.showHighlights,
    }),
    [
      config.defaultTension,
      config.defaultFriction,
      config.defaultClamp,
      config.gentleTension,
      config.gentleFriction,
      config.gentleClamp,

      config.slowTension,
      config.slowFriction,
      config.slowClamp,

      remountKey,
      config.showHighlights,
    ]
  );

  // Debug logging to see if values are updating
  console.log("SpringConfig values:", {
    default: springConfig.default,
    gentle: springConfig.gentle,
    slow: springConfig.slow,
  });

  console.log("Raw config values:", {
    defaultTension: config.defaultTension,
    defaultFriction: config.defaultFriction,
    gentleTension: config.gentleTension,
    gentleFriction: config.gentleFriction,
  });

  // Force a re-render when config changes by logging the timestamp
  console.log("Config update timestamp:", Date.now());

  return (
    <SpringConfigContext.Provider value={springConfig}>
      {children}
    </SpringConfigContext.Provider>
  );
};
