import { useLayoutEffect, useRef, useState } from "react";

export function useFitWidth(text: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [scaleX, setScaleX] = useState(1);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const el = textRef.current;
      if (!container || !el) return;

      const containerWidth = container.getBoundingClientRect().width;
      const textWidth = el.scrollWidth;

      if (textWidth > 0) {
        setScaleX(containerWidth / textWidth);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  return { containerRef, textRef, scaleX };
}
