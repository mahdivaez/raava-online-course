import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export const ParallaxImage = ({ 
  src, 
  alt, 
  className = "",
  speed = 0.5 
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};

export const ParallaxBackground = ({
  children,
  className = "",
  overlayOpacity = 0.7,
  imageSrc,
}: {
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  imageSrc: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div 
          className="absolute inset-0 bg-background"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
      {children}
    </div>
  );
};
