"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Highlighter({ children, className, delay = 0 }: HighlighterProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
