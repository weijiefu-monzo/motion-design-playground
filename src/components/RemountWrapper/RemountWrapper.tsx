"use client";
import React from "react";
import { useSpringConfig } from "@/contexts/SpringConfigContext";

interface RemountWrapperProps {
  children: React.ReactNode;
}

export default function RemountWrapper({ children }: RemountWrapperProps) {
  const springConfig = useSpringConfig();

  return <div key={springConfig.remountKey}>{children}</div>;
}
