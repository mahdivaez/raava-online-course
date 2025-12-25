import { motion } from "framer-motion";
import { ArrowUpLeft, Sparkles, Calendar, Clock, CreditCard, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/magicui/morphing-text";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const morphingTexts = ["روایت‌سازی", "هویت‌سازی", "درآمدزایی", "برندسازی"];

  return (
    <section 
      className="relative h-screen min-h-[650px] flex flex-col items-center justify-center bg-[#F2EFE7] px-6 overflow-hidden" 
      dir="rtl"
    >
      {/* 1. STRENGTHENED GRID BACKGROUND */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          // غلظت رنگ گرید از 08 به 15 افزایش یافت برای وضوح بیشتر
          "[background-image:linear-gradient(to_right,#006A7115_1px,transparent_1px),linear-gradient(to_bottom,#006A7115_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial fade - Adjusted to let more grid show through */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F2EFE7_95%)]" />

      {/* 2. CENTER GLOW */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#006A71]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center mt-[-10px]">
        
        {/* 3. MINI BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6 bg-white/60 px-4 py-1.5 rounded-full border border-[#006A71]/20 backdrop-blur-md shadow-sm"
        >
          <Sparkles size={14} className="text-[#006A71]" />
          <span className="text-[#006A71] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
            دوره جامع اینفلوئنسر مارکتینگ
          </span>
        </motion.div>

        {/* 4. COMPACT HEADLINE */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-[76px] font-black text-[#002d30] leading-[1.1] mb-6 tracking-tight"
        >
          از محتوای پراکنده <br />
          <span className="text-[#006A71]">تا مسیر حرفه‌ای</span>
        </motion.h1>

        {/* 5. SUBTITLE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-lg text-slate-500 max-w-2xl mb-10 flex flex-wrap justify-center items-center gap-x-2"
        >
          <span>یاد بگیرید چطور برای خودتان</span>
          <div className="inline-flex bg-[#006A71] text-white px-2.5 py-0.5 rounded-lg shadow-lg shadow-[#006A71]/20 font-bold">
            <MorphingText texts={morphingTexts} className="text-sm md:text-lg" />
          </div>
          <span>خلق کنید و به درآمدزایی برسید.</span>
        </motion.div>

        {/* 6. CTA & RAWA INFO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <Button 
            size="lg" 
            className="h-16 px-14 bg-[#002d30] hover:bg-[#004d52] text-white rounded-2xl text-lg md:text-xl font-black group transition-all shadow-xl shadow-[#002d30]/20"
          >
            تکمیل فرم ورودی و ثبت‌نام
            <ArrowUpLeft className="mr-2 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" size={20} />
          </Button>
          
          <div className="flex items-center gap-3 text-right bg-white/50 px-4 py-2 rounded-xl border border-[#006A71]/10 backdrop-blur-sm">
            <Zap size={16} className="text-[#48A6A7] fill-current" />
            <p className="text-xs font-black text-[#002d30]">
              همکاری با آژانس راوا 
            </p>
          </div>
        </motion.div>

        {/* 7. DATA DOCK - High Contrast */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-3xl grid grid-cols-3 gap-0 border border-[#006A71]/20 rounded-2xl bg-white/80 backdrop-blur-md divide-x divide-x-reverse divide-[#006A71]/20 overflow-hidden shadow-md"
        >
          {[
            { icon: Clock, label: "Duration", value: "۲۰ ساعت آموزش" },
            { icon: Calendar, label: "Timeline", value: "ثبت‌نام تا ۱۰ دی" },
            { icon: CreditCard, label: "Investment", value: "۶.۷ میلیون" }
          ].map((item, index) => (
            <div key={index} className="py-6 flex flex-col items-center gap-1.5 hover:bg-[#006A71]/5 transition-colors">
              <item.icon size={18} className="text-[#006A71]" />
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
              <p className="text-[11px] md:text-sm font-black text-[#002d30]">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};