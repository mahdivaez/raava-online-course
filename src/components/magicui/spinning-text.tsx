"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpinningTextProps {
  children: string;
  className?: string;
  radius?: number;
  fontSize?: number;
  duration?: number;
}

export function SpinningText({
  children,
  className,
  radius = 100,
  fontSize = 14,
  duration = 20,
}: SpinningTextProps) {
  const characters = children.split("");
  const totalCharacters = characters.length;
  const angleStep = 360 / totalCharacters;

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {characters.map((char, i) => {
        const angle = i * angleStep;
        const x = radius + radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius + radius * Math.sin((angle - 90) * (Math.PI / 180));

        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              fontSize: `${fontSize}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}
