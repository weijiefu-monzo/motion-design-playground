import React from "react";
import Cell from "./Cell";
import { H3, Body } from "../Typography";

export default function CellDemo() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginBottom: "var(--spacing-large)",
      }}
    >
      <Cell>This a cell</Cell>
    </div>
  );
}
