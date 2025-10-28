"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useControls } from "leva";

export default function TestSpringConfig() {
  const config = useControls("Test Spring Config", {
    tension: { value: 170, min: 50, max: 300, step: 10 },
    friction: { value: 26, min: 5, max: 50, step: 1 },
  });

  const [spring, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
    to: { x: 100, opacity: 1 },
    config: { tension: config.tension, friction: config.friction },
    loop: { reverse: true },
  }));

  // Restart animation when config changes
  React.useEffect(() => {
    api.start({
      from: { x: 0, opacity: 0 },
      to: { x: 100, opacity: 1 },
      config: { tension: config.tension, friction: config.friction },
      loop: { reverse: true },
    });
  }, [config.tension, config.friction, api]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "20px" }}>
      <h3>Test Spring Config</h3>
      <p>
        Tension: {config.tension}, Friction: {config.friction}
      </p>
      <animated.div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          borderRadius: "50%",
          ...spring,
        }}
      />
    </div>
  );
}
