"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function FadeUp({ children, className = "", style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
