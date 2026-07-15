"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsTouch(!mq.matches);
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    if (mq.matches) {
      window.addEventListener("mousemove", mouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full
      pointer-events-none z-[9999] mix-blend-difference
      transition-transform duration-[30ms]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
}
