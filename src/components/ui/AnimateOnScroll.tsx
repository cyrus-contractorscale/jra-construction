"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export type AnimateVariant = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "stamp";

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: AnimateVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const hiddenStyles: Record<AnimateVariant, CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(36px)" },
  "fade-left":  { opacity: 0, transform: "translateX(-40px)" },
  "fade-right": { opacity: 0, transform: "translateX(40px)" },
  "scale-in":   { opacity: 0, transform: "scale(0.78)" },
  "stamp":      { opacity: 0, transform: "scale(0.5) rotate(-14deg)" },
};

const visibleStyle: CSSProperties = { opacity: 1, transform: "none" };

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const easing = variant === "stamp" ? "cubic-bezier(0.175,0.885,0.32,1.275)" : "ease";

  const style: CSSProperties = {
    ...(visible ? visibleStyle : hiddenStyles[variant]),
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
