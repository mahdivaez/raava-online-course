"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "hsl(var(--primary))",
  colorTo = "hsl(var(--accent))",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "[background:padding-box_transparent,border-box_linear-gradient(to_right,var(--color-from),var(--color-to))]",
        "[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]",
        "[mask-composite:xor]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to_right,var(--color-from),var(--color-to))]",
        "after:[offset-anchor:calc(var(--size)*1px)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
}
