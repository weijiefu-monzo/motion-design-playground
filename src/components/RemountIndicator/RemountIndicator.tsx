"use client";
import React from "react";
import { useSpringConfig } from "@/contexts/SpringConfigContext";

export default function RemountIndicator() {
  const springConfig = useSpringConfig();

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "8px 12px",
        borderRadius: "4px",
        fontSize: "12px",
        zIndex: 1000,
        fontFamily: "monospace",
      }}
    >
      Remount Key: {springConfig.remountKey}
    </div>
  );
}
