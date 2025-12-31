import { useState, useRef } from "react";
import { Volume2, VolumeX, ChevronDown, Check, Sparkles, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const VideoIntroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const handlePlay = (index: number) => {
    const refs = [videoRef1, videoRef2];
    refs.forEach((ref, i) => {
      if (i === index) {
        ref.current?.play().catch(error => console.log("Video play failed:", error));
        setActiveVideo(index);
      } else {
        ref.current?.pause();
      }
    });
  };

  const handlePause = (index: number) => {
    const refs = [videoRef1, videoRef2];
    refs[index].current?.pause();
    setActiveVideo(null);
  };

  const videos = [
    { name: "پارمیدا", src: "/parmida.mp4", poster: "/parmjida.jpg", ref: videoRef1 },
    { name: "آفرین", src: "/afarin.mp4", poster: "/afarin.jpg", ref: videoRef2 }
  ];

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
    <section className="relative overflow-hidden bg-[#001a1c] py-24 lg:py-40" dir="rtl">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(72,166,167,0.1),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CENTERED INTRODUCTION BLOCK */}
        <div className="max-w-5xl mx-auto text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#9ACBD0] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Course Introduction</span>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 leading-tight">
              معرفی <span className="text-[#48A6A7] italic">دوره</span>
            </h2>
            <div className="space-y-8">
              <p className="text-2xl md:text-4xl text-[#F2EFE7] leading-tight font-medium max-w-4xl mx-auto">
                این دوره برای کسانی است که در مسیر بلاگری یا برند شخصی، می‌خواهند از <span className="text-[#9ACBD0] border-b-2 border-[#9ACBD0]/30 pb-1 italic">تولید محتوای پراکنده</span> عبور کنند و به یک مسیر شفاف، حرفه‌ای و درآمدزا برسند.
              </p>
              <p className="text-lg md:text-xl text-[#F2EFE7]/60 leading-relaxed max-w-2xl mx-auto">
                در این کلاس یاد می‌گیرید چطور روایت و هویت‌تان را بسازید، محتوایتان را هدفمند کنید، و مسیر همکاری با برندها را حرفه‌ای‌تر پیش ببرید.
              </p>
            </div>
            <div className="mt-16 flex justify-center items-center gap-4 opacity-30">
                <div className="w-12 h-[1px] bg-[#9ACBD0]" />
                <Sparkles size={16} className="text-[#9ACBD0]" />
                <div className="w-12 h-[1px] bg-[#9ACBD0]" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* VIDEO SIDE */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              {videos.map((video, index) => {
                const isPlaying = activeVideo === index;
                return (
                  <div key={index} className={`relative w-full ${index === 1 ? 'md:mt-32' : ''}`}>
                    <div 
                      onClick={() => isPlaying ? handlePause(index) : handlePlay(index)}
                      className="relative aspect-[9/16] rounded-[4rem] overflow-hidden group cursor-pointer shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 transition-transform duration-700 hover:scale-[1.02]"
                    >
                      <video
                        ref={video.ref}
                        src={video.src}
                        poster={video.poster}
                        className="w-full h-full object-cover"
                        muted={isMuted}
                        playsInline
                        loop
                        preload="metadata"
                      />

                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />

                      {/* CENTERED PLAY BUTTON */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
                        <div className="relative">
                            <div className="absolute inset-[-20px] border border-[#48A6A7]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse" />
                            <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#001a1c] shadow-2xl transition-transform group-hover:scale-110">
                                {isPlaying ? <Pause fill="currentColor" size={32} /> : <Play fill="currentColor" size={32} className="ml-1" />}
                            </div>
                        </div>
                      </div>

                      {/* Mute Button */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                        className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-20"
                      >
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SYLLABUS SIDE */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="mb-12">
              <span className="text-[#48A6A7] font-bold tracking-widest block uppercase text-sm mb-4">Mastery Curriculum</span>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                سرفصل‌های <span className="text-[#9ACBD0] italic">جامع</span>
              </h3>
            </div>

            <div className="space-y-6">
              {syllabus.map((section, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className={`transition-all duration-500 rounded-[2.5rem] border ${
                      isOpen ? 'bg-white/10 border-[#9ACBD0]/40' : 'bg-transparent border-white/5 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <button 
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="w-full p-8 flex items-center justify-between text-right"
                    >
                      <span className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-[#9ACBD0]' : 'text-white'}`}>
                        {section.title}
                      </span>
                      <ChevronDown className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#9ACBD0]' : 'text-white/20'}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 space-y-4">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-4 text-white/90">
                                <div className="w-6 h-6 rounded-full bg-[#48A6A7]/20 flex items-center justify-center border border-[#48A6A7]/30">
                                  <Check size={12} className="text-[#9ACBD0]" />
                                </div>
                                <span className="text-lg">{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <button className="w-full mt-12 py-7 bg-[#48A6A7] hover:bg-[#9ACBD0] text-[#001a1c] font-black text-2xl rounded-[2.5rem] transition-all shadow-[0_20px_50px_rgba(72,166,167,0.3)] flex items-center justify-center gap-4 group">
                <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                ثبت‌نام و شروع دوره
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};