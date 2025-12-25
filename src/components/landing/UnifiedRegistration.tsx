import { useState, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  BookOpen, 
  Users, 
  ArrowLeft, 
  ChevronRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Award
} from "lucide-react";

interface UnifiedRegistrationProps {
  onChoose: (type: "course-only" | "work-with-rava") => void;
}

export const UnifiedRegistrationSection = ({ onChoose }: UnifiedRegistrationProps) => {
  const [step, setStep] = useState<"pricing" | "choice">("pricing");

  const timeline = [
    { label: "ثبت‌نام نهایی", date: "تا ۱۰ دی", icon: <Calendar /> },
    { label: "ارزیابی و گزینش", date: "تا ۱۵ دی", icon: <CheckCircle2 /> },
    { label: "آغاز سفر آموزشی", date: "۲۰ دی", icon: <Sparkles /> },
    { label: "اختتامیه دوره", date: "۲۰ بهمن", icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <section className="py-32 bg-[hsl(var(--nude))] text-[#006A71] relative overflow-hidden font-persian-badkh" id="registration-choice" dir="rtl">
      {/* Oceanic Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#9ACBD0]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#48A6A7]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {step === "pricing" ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* 1. LEFT SIDE: LUXURY PRICING CARD */}
                <div className="lg:w-1/2 w-full order-2 lg:order-1">
                  <div className="bg-white/70 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] border border-[#9ACBD0]/40 shadow-2xl shadow-[#006A71]/5 relative group">
                    <div className="absolute top-8 left-8 text-[#9ACBD0]/20 pointer-events-none">
                        <DollarSign size={120} strokeWidth={1} />
                    </div>

                    <span className="inline-block px-4 py-1 rounded-full bg-[#006A71]/10 text-[#006A71] text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                      Investment / شهریه دوره
                    </span>

                    <div className="space-y-12 mb-16">
                      <div className="relative">
                        <p className="text-sm font-bold text-[#48A6A7] mb-2 tracking-widest uppercase">تومان / IRR</p>
                        <div className="flex items-baseline gap-4">
                          <span className="text-8xl font-black text-[#006A71] tracking-tighter">۶.۷</span>
                          <span className="text-3xl font-bold text-[#48A6A7]">میلیون</span>
                        </div>
                      </div>

                      <div className="h-px w-full bg-gradient-to-r from-[#9ACBD0] via-transparent to-transparent" />

                      <div>
                        <p className="text-sm font-bold text-[#48A6A7] mb-2 tracking-widest uppercase">International</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-black text-[#006A71]">$135</span>
                          <span className="text-lg font-medium text-[#48A6A7] italic">USD</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-12 max-w-sm italic">
                      ثبت‌نام نهایی پس از طی کردن <span className="text-[#006A71] font-bold border-b border-[#48A6A7]">مرحله ارزیابی</span> و تایید توسط مربیان انجام می‌شود.
                    </p>

                    <button 
                      onClick={() => setStep("choice")}
                      className="w-full bg-[#006A71] text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-[#005a61] shadow-lg shadow-[#006A71]/20 transition-all duration-500 group"
                    >
                      <span>انتخاب مسیر ثبت‌نام</span>
                      <ChevronRight className="rotate-180 group-hover:-translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* 2. RIGHT SIDE: CONTENT & TIMELINE */}
                <div className="lg:w-1/2 w-full order-1 lg:order-2 space-y-12">
                  <div className="max-w-md">
                    <h2 className="text-5xl md:text-7xl font-black text-[#006A71] leading-none mb-6">
                      سرمایه‌گذاری روی <span className="text-[#48A6A7] italic">برند شخصی</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      این هزینه فراتر از یک کلاس آموزشی است؛ این ورودی شما به جامعه حرفه‌ای‌ها و شروع همکاری با آژانس راوا است.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {timeline.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-center gap-6 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#48A6A7] shadow-sm border border-[#9ACBD0]/30 group-hover:scale-110 transition-transform">
                          {cloneElement(item.icon, { size: 20 })}
                        </div>
                        <div className="flex-grow flex justify-between border-b border-[#9ACBD0]/20 pb-4">
                            <span className="font-bold text-[#006A71]">{item.label}</span>
                            <span className="text-[#48A6A7] font-medium">{item.date}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-5xl font-black text-[#006A71]">انتخاب مسیر صعود</h2>
                  <p className="text-[#48A6A7] font-medium mt-2 uppercase tracking-widest text-sm">Choose Your Career Path</p>
                </div>
                <button 
                  onClick={() => setStep("pricing")}
                  className="flex items-center gap-2 text-[#48A6A7] hover:text-[#006A71] transition-colors font-bold px-6 py-3 bg-white/50 rounded-full border border-[#9ACBD0]/30"
                >
                  <ArrowLeft size={18} className="rotate-180" />
                  <span>بازگشت</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                
                {/* TRACK 01: MINIMALIST LIGHT */}
                <div 
                  onClick={() => onChoose("course-only")}
                  className="bg-white/60 border border-[#9ACBD0]/40 rounded-[3.5rem] p-12 flex flex-col justify-between hover:border-[#48A6A7] hover:shadow-2xl hover:shadow-[#006A71]/5 transition-all duration-500 group cursor-pointer"
                >
                  <div>
                    <div className="w-16 h-16 rounded-[1.5rem] bg-[#F2EFE7] flex items-center justify-center text-[#006A71] mb-10 group-hover:bg-[#006A71] group-hover:text-white transition-colors duration-500">
                      <BookOpen size={28} />
                    </div>
                    <h3 className="text-3xl font-black mb-6 italic text-[#006A71]">فقط شرکت در دوره</h3>
                    <p className="text-slate-600 leading-relaxed text-lg italic">
                      یادگیری عمیق مهارت‌های بلاگری، تولید محتوا و استراتژی‌های برند شخصی زیر نظر اساتید.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#48A6A7] font-bold mt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm tracking-widest uppercase">Select Track</span>
                    <ChevronRight className="rotate-180" size={16} />
                  </div>
                </div>

                {/* TRACK 02: DARK TEAL (FEATURED) */}
                <div 
                  onClick={() => onChoose("work-with-rava")}
                  className="bg-[#006A71] rounded-[3.5rem] p-12 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl shadow-[#006A71]/20"
                >
                  {/* Luxury Texture Gradient using Cream/Light Teal */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                  <TrendingUp className="absolute -bottom-10 -left-10 w-64 h-64 text-white/5 -rotate-12 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-[#9ACBD0] flex items-center justify-center text-[#006A71] shadow-lg">
                        <Users size={28} />
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 text-[#9ACBD0] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#9ACBD0]/20">
                        <Sparkles size={12} /> Featured Track
                      </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 italic text-white">همکاری با راوا</h3>
                    <p className="text-white/80 text-lg leading-relaxed font-light">
                      علاوه بر آموزش کامل، پیج شما برای ورود مستقیم به لیست اینفلوئنسرهای آژانس <span className="text-[#9ACBD0] font-bold">راوا</span> و دریافت پروژه‌های تبلیغاتی ارزیابی می‌شود.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-white border-t border-white/10 pt-8 mt-12">
                    <span className="font-bold text-xl font-persian-badkh">ورود به مرحله گزینش</span>
                    <div className="w-14 h-14 bg-[#9ACBD0] text-[#006A71] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <ChevronRight className="rotate-180" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};