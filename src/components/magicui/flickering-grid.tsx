"use client";

import { cn } from "@/lib/utils";
import { useEffect, useId, useRef, useState } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  className?: string;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "hsl(var(--primary))",
  maxOpacity = 0.3,
  className,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / (squareSize + gridGap));
      const rows = Math.ceil(canvas.height / (squareSize + gridGap));

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < flickerChance) {
            ctx.fillStyle = color;
            ctx.globalAlpha = Math.random() * maxOpacity;
            ctx.fillRect(
              i * (squareSize + gridGap),
              j * (squareSize + gridGap),
              squareSize,
              squareSize
            );
          }
        }
      }
    };

    const interval = setInterval(draw, 100);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [isInView, squareSize, gridGap, flickerChance, color, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
