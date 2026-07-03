import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const withinX = Math.abs(distX) < rect.width / 2 + padding;
      const withinY = Math.abs(distY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        setActive(true);
        setOffset({ x: distX / strength, y: distY / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  const style: CSSProperties = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: active ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
