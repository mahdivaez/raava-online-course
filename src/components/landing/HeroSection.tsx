import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Ripple } from "@/components/magicui/ripple";
import { SpinningText } from "@/components/magicui/spinning-text";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const scrollToForm = () => {
    const element = document.querySelector("#registration-choice");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const morphingTexts = [
    "روایت‌سازی",
    "هویت‌سازی", 
    "درآمدزایی",
    "برندسازی",
    "تأثیرگذاری"
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </motion.div>
      
      {/* Ripple effect */}
      <Ripple className="opacity-20" mainCircleSize={300} numCircles={6} />
      
      {/* Spinning text decoration */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <SpinningText radius={60} fontSize={10} duration={15}>
          بلاگری • برند شخصی • محتوا • درآمد •
        </SpinningText>
      </div>
      
      <div className="absolute bottom-40 right-10 opacity-20 hidden lg:block">
        <SpinningText radius={50} fontSize={9} duration={20}>
          راوا • آموزش • رشد • موفقیت •
        </SpinningText>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-foreground">دوره بلاگری و</span>
            <br />
            <span className="text-gradient">برند شخصی</span>
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            از تولید محتوای پراکنده به{" "}
            <MorphingText texts={morphingTexts} className="text-primary font-bold inline-block min-w-[120px]" interval={2500} />
            {" "}حرفه‌ای
          </motion.div>
          
          <motion.p
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            مسیرتان را شفاف کنید، محتوایتان را هدفمند کنید
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="text-lg px-10 py-7 glow-primary animate-pulse-glow elegant-border bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              ثبت‌نام کنید
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="animate-scroll-hint text-muted-foreground"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};
