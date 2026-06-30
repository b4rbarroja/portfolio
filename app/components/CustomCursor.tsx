"use client";
import { useEffect, useState } from "react";
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]
                 transition-transform duration-[30ms] ease-linear will-change-transform
                 -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 2 L18 17 L2 17 Z" fill="white" />
      </svg>
    </div>
  );
}
