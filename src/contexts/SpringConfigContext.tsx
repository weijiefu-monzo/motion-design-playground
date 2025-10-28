"use client";
import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { useControls, folder } from "leva";

interface SpringConfig {
  gentle: { tension: number; friction: number };
  default: { tension: number; friction: number };
  wobbly: { tension: number; friction: number };
  stiff: { tension: number; friction: number };
  slow: { tension: number; friction: number };
  molasses: { tension: number; friction: number };
  remountKey: number;
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
    gentleTension: {
      value: 120,
      min: 5,
      max: 300,
      step: 10,
    },
    gentleFriction: {
      value: 14,
      min: 5,
      max: 300,
      step: 1,
    },
    defaultTension: {
      value: 170,
      min: 5,
      max: 300,
      step: 10,
    },
    defaultFriction: {
      value: 26,
      min: 5,
      max: 300,
      step: 1,
    },
    wobblyTension: {
      value: 180,
      min: 5,
      max: 300,
      step: 10,
    },
    wobblyFriction: {
      value: 12,
      min: 5,
      max: 300,
      step: 1,
    },
    stiffTension: {
      value: 210,
      min: 5,
      max: 300,
      step: 10,
    },
    stiffFriction: {
      value: 20,
      min: 5,
      max: 300,
      step: 1,
    },
    slowTension: {
      value: 280,
      min: 5,
      max: 300,
      step: 10,
    },
    slowFriction: {
      value: 60,
      min: 5,
      max: 300,
      step: 5,
    },
    molassesTension: {
      value: 280,
      min: 5,
      max: 300,
      step: 10,
    },
    molassesFriction: {
      value: 120,
      min: 5,
      max: 300,
      step: 10,
    },
    remountComponents: {
      value: false,
      onChange: () => {
        setRemountKey((prev) => prev + 1);
      },
    },
  }) as {
    gentleTension: number;
    gentleFriction: number;
    defaultTension: number;
    defaultFriction: number;
    wobblyTension: number;
    wobblyFriction: number;
    stiffTension: number;
    stiffFriction: number;
    slowTension: number;
    slowFriction: number;
    molassesTension: number;
    molassesFriction: number;
    remountComponents: boolean;
  };

  // Create the spring config object - this will be reactive to config changes
  const springConfig: SpringConfig = useMemo(
    () => ({
      gentle: {
        tension: config.gentleTension,
        friction: config.gentleFriction,
      },
      default: {
        tension: config.defaultTension,
        friction: config.defaultFriction,
      },
      wobbly: {
        tension: config.wobblyTension,
        friction: config.wobblyFriction,
      },
      stiff: {
        tension: config.stiffTension,
        friction: config.stiffFriction,
      },
      slow: {
        tension: config.slowTension,
        friction: config.slowFriction,
      },
      molasses: {
        tension: config.molassesTension,
        friction: config.molassesFriction,
      },
      remountKey,
    }),
    [
      config.gentleTension,
      config.gentleFriction,
      config.defaultTension,
      config.defaultFriction,
      config.wobblyTension,
      config.wobblyFriction,
      config.stiffTension,
      config.stiffFriction,
      config.slowTension,
      config.slowFriction,
      config.molassesTension,
      config.molassesFriction,
      remountKey,
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
