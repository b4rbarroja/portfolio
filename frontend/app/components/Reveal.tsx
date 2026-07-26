"use client";

import { Children } from "react";
import { useReveal } from "@/app/lib/useReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  once = true,
  style,
}: RevealProps) {
  const { ref, isVisible } = useReveal({ once });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(24px) scale(0.98)",
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 80,
  duration = 700,
  once = true,
}: StaggerRevealProps) {
  const items = Children.toArray(children);
  return (
    <>
      {items.map((child, index) => (
        <Reveal
          key={index}
          className={className}
          delay={index * staggerDelay}
          duration={duration}
          once={once}
        >
          {child}
        </Reveal>
      ))}
    </>
  );
}
