"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function FadeUp({ children, className = "", style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible " : ""}${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
