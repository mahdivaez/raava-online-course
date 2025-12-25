import { AnimatedSection } from "./AnimatedSection";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, ChevronDown, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const VideoIntroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => console.log("Autoplay waiting for interaction"));
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const syllabus = [
    {
      title: "۰۱) پایه‌ها: هویت و جایگاه",
      items: ["پرسونال برندینگ در بلاگری و کسب‌وکار", "مخاطب‌شناسی و نقش آن در رشد", "استراتژی برند شخصی"]
    },
    {
      title: "۰۲) محتوا و سوشال",
      items: ["خلاقیت و کارگردانی در سوشال", "تحلیل فضای سوشال و الگوریتم", "نظم در انتشار و استمرار"]
    },
    {
      title: "۰۳) درآمد و همکاری",
      items: ["تبلیغات: PR، UGC و قراردادها", "نوشتن مدیاکیت و پورتفولیو حرفه‌ای", "شناخت مدل‌های درآمدی نوین"]
    },
    {
      title: "۰۴) مدیریت و اجرا",
      items: ["مدیریت بحران و پاسخ‌گویی", "اجرایی کردن روی پیج زیر نظر اساتید", "پاسخ‌گویی مستقیم منتورها"]
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#002d30] py-32 border-t border-white/5" 
      dir="rtl"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(154,203,208,0.08),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CENTERED INTRODUCTION BLOCK */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <AnimatedSection>
            <span className="text-[#9ACBD0] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Course Introduction</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-tight">
              معرفی <span className="text-[#48A6A7] italic">دوره</span>
            </h2>
            <div className="space-y-8">
              <p className="text-2xl md:text-4xl text-[#F2EFE7] leading-tight font-medium">
                این دوره برای کسانی است که در مسیر بلاگری یا برند شخصی، می‌خواهند از <span className="text-[#9ACBD0] border-b-2 border-[#9ACBD0]/30 pb-1 italic">تولید محتوای پراکنده</span> عبور کنند و به یک مسیر شفاف، حرفه‌ای و درآمدزا برسند.
              </p>
              <p className="text-lg md:text-xl text-[#F2EFE7]/60 leading-relaxed max-w-2xl mx-auto">
                در این کلاس یاد می‌گیرید چطور روایت و هویت‌تان را بسازید، محتوایتان را هدفمند کنید، و مسیر همکاری با برندها را حرفه‌ای‌تر پیش ببرید.
              </p>
            </div>
            {/* Decorative Divider */}
            <div className="mt-16 flex justify-center items-center gap-4 opacity-30">
                <div className="w-12 h-[1px] bg-[#9ACBD0]" />
                <Sparkles size={16} className="text-[#9ACBD0]" />
                <div className="w-12 h-[1px] bg-[#9ACBD0]" />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pt-12">
          
          {/* CURRICULUM SIDE (Now slightly more balanced) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="text-right space-y-10">
              <div className="space-y-4">
                <span className="text-[#48A6A7] font-bold tracking-widest block uppercase text-sm">Mastery Curriculum</span>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  سرفصل‌های <span className="text-[#9ACBD0] italic">جامع</span>
                </h3>
              </div>

              <div className="space-y-4">
                {syllabus.map((section, idx) => {
                  const isOpen = activeIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`transition-all duration-500 rounded-[2.5rem] border ${
                        isOpen ? 'bg-white/10 border-[#9ACBD0]/40 shadow-2xl' : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <button 
                        onClick={() => setActiveIndex(isOpen ? null : idx)}
                        className="w-full p-6 md:p-8 flex items-center justify-between text-right outline-none"
                      >
                        <span className={`text-lg md:text-2xl font-bold transition-colors ${isOpen ? 'text-[#9ACBD0]' : 'text-white'}`}>
                          {section.title}
                        </span>
                        <ChevronDown className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#9ACBD0]' : 'text-white/40'}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 pt-2 border-t border-white/5">
                              <ul className="grid grid-cols-1 gap-4">
                                {section.items.map((item, i) => (
                                  <li key={i} className="flex items-center gap-4 text-white/90 group">
                                    <div className="w-6 h-6 rounded-full bg-[#48A6A7]/20 flex items-center justify-center border border-[#48A6A7]/30 group-hover:bg-[#9ACBD0] transition-colors">
                                      <Check size={12} className="text-[#9ACBD0] group-hover:text-[#002d30]" />
                                    </div>
                                    <span className="text-lg group-hover:text-[#9ACBD0] transition-colors">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* VIDEO SIDE (Sticky and Vertical) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-24">
              <div className="relative group">
                <div className="relative bg-white/5 backdrop-blur-3xl rounded-[4rem] p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                  <div className="aspect-[9/16] rounded-[3.2rem] overflow-hidden bg-[#001f21] relative border border-white/10">
                    <video
                      ref={videoRef}
                      src="https://www.w3schools.com/html/mov_bbb.mp4" 
                      poster="/video-sample.jpg"
                      className="w-full h-full object-cover"
                      muted={isMuted}
                      loop
                      playsInline
                    />
                    
                    <div className="absolute bottom-10 inset-x-8 flex justify-between items-center z-20">
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-[#9ACBD0] hover:text-[#002d30] transition-all"
                      >
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                      </button>
                      
                      <div className="bg-[#48A6A7] px-5 py-2.5 rounded-full text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Sparkles size={14} /> Course Preview
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                {/* Visual Flair */}
                <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-[#9ACBD0]/10 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};