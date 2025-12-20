import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/magicui/morphing-text";
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

  const stats = [
    { icon: Users, value: "500+", label: "دانشجو" },
    { icon: TrendingUp, value: "95%", label: "رضایت" },
    { icon: Sparkles, value: "50+", label: "پروژه موفق" }
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/90 to-background" />
      </motion.div>
      
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Spinning text decoration */}
      <div className="absolute top-20 left-10 opacity-30 hidden lg:block">
        <SpinningText radius={70} fontSize={16} duration={15}>
          Rava • اینفلوئنسر • Rava • برندسازی •
        </SpinningText>
      </div>
      
      <div className="absolute bottom-40 right-10 opacity-30 hidden lg:block">
        <SpinningText radius={60} fontSize={16} duration={20}>
          محتوا • Content • ایده • Creative •
        </SpinningText>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 text-center relative z-10 py-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <div className="glass rounded-full px-6 py-3 border border-primary/30 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              دوره جامع اینفلوئنسر مارکتینگ
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-foreground block mb-2">دوره بلاگری و</span>
            <span className="text-gradient text-6xl md:text-7xl lg:text-9xl block relative">
              برند شخصی
              <motion.div
                className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-6 font-medium flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>از تولید محتوای پراکنده به</span>
            <MorphingText 
              texts={morphingTexts} 
              className="text-primary font-bold inline-block min-w-[140px] align-middle" 
              interval={2500} 
            />
            <span>حرفه‌ای</span>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            مسیرتان را شفاف کنید • محتوایتان را هدفمند کنید • برندتان را بسازید
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="text-xl px-12 py-8 glow-primary elegant-border bg-primary hover:bg-primary/90 text-primary-foreground font-bold group relative overflow-hidden"
            >
              <span className="relative z-10">ثبت‌نام کنید</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </Button>
            
            <Button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              بیشتر بدانید
            </Button>
          </motion.div>

          {/* Stats Section */}
         
        </motion.div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            ادامه مطالب
          </span>
          <ChevronDown className="w-8 h-8 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(var(--primary-rgb), 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        :root {
          --primary-rgb: 147, 51, 234;
        }
      `}</style>
    </section>
  );
};