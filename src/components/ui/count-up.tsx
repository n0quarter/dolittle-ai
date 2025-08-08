import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  startOnView?: boolean;
}

export default function CountUp({
  end,
  start = 0,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  startOnView = true,
}: CountUpProps) {
  const [value, setValue] = useState(startOnView ? start : end);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      setValue(end);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();
      const from = start;
      const to = end;
      const d = Math.max(0.2, duration) * 1000;

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / d);
        const eased = easeOutCubic(progress);
        const current = from + (to - from) * eased;
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(to);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [startOnView, start, end, duration]);

  const display = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(decimals ? value : Math.round(value));

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${display}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
