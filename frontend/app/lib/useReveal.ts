"use client";
import { useEffect, useRef, useState } from "react";

interface UseRevealOptions {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  once = true,
  rootMargin = "0px 0px -40px 0px",
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, isVisible };
}
