import { useEffect, useState } from "react";
import "./LightSource.css";

export default function LightSource({
  size,
  coords,
}: {
  size: number;
  coords: { x: number; y: number };
}) {
  return (
    <div
      className="light-source"
      style={{
        top: coords?.y,
        left: coords?.x,
        width: size + "px",
        height: size + "px",
      }}
    ></div>
  );
}
