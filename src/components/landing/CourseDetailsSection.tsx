import { 
  Calendar, 
  Layout, 
  Award, 
  Users, 
  Sparkles,
  CheckCircle,
  Clock,
  ChevronLeft,
  Timer,
  Star,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

export const CourseDetailsSection = () => {
  const schedule = [
    { date: "تا ۱۰ دی", event: "مهلت ثبت‌نام", icon: Calendar, color: "from-[#006A71] to-[#48A6A7]" },
    { date: "تا ۱۵ دی", event: "ارزیابی و گزینش", icon: CheckCircle, color: "from-[#48A6A7] to-[#9ACBD0]" },
    { date: "۲۰ دی", event: "شروع اولین جلسه", icon: Clock, color: "from-[#006A71] to-[#9ACBD0]" },
    { date: "۲۰ بهمن", event: "پایان دوره", icon: Award, color: "from-[#48A6A7] to-[#006A71]" },
  ];

  const structure = [
    {
      step: "01",
      title: "تدریس و تجربه",
      desc: "۴ جلسه اول: تدریس خانم آفرین بنائی در کنار تجربه‌های واقعی خانم دکتر پارمیدا حسین‌پور.",
      icon: Layout,
      accent: "dark"
    },
    {
      step: "02",
      title: "منتورینگ اختصاصی",
      desc: "۳ جلسه تمرکز بر تمرین‌های شخصی و حل چالش‌های واقعی پیج شما برای ساختن راه‌حل‌های اختصاصی.",
      icon: Users,
      accent: "medium"
    },
    {
      step: "03",
      title: "اختتامیه و نقشه راه",
      desc: "جلسه آخر: جمع‌بندی نهایی پروژه‌ها و ارائه نقشه راه اختصاصی برای ادامه مسیر حرفه‌ای.",
      icon: Sparkles,
      accent: "light"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F2EFE7] text-[#002d30] overflow-hidden relative" dir="rtl">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#9ACBD0]/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#48A6A7]/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 1. TIMELINE SECTION */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#006A71] text-sm font-semibold tracking-wider mb-3 px-4 py-1 bg-[#006A71]/10 rounded-full">
              مراحل شرکت در دوره
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#006A71]">زمان‌بندی ثبت‌نام</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#9ACBD0] to-transparent"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schedule.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="group relative"
                  >
                    <div className="bg-white/80 backdrop-blur-sm border border-[#9ACBD0]/30 rounded-2xl p-6 hover:border-[#48A6A7] transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-5`}>
                        <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                          <Icon className="text-[#006A71]" size={24} />
                        </div>
                      </div>
                      <div className="text-slate-500 text-xs font-medium mb-2">{item.date}</div>
                      <div className="text-lg font-bold text-[#006A71]">{item.event}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. LOGISTICS SECTION */}
        <div className="max-w-5xl mx-auto mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#006A71] rounded-[2rem] p-8 text-white flex items-center gap-6 shadow-xl shadow-[#006A71]/20 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <Timer size={32} className="text-[#9ACBD0]" />
              </div>
              <div>
                <h4 className="text-[#9ACBD0] text-sm font-bold mb-1 font-persian-badkh">زمان و نحوه برگزاری</h4>
                <p className="text-2xl font-black">۲۰ ساعت <span className="text-lg font-light opacity-70">(غیرحضوری)</span></p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-[#9ACBD0]/30 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-[#006A71]">
                <Clock size={20} />
                <span className="font-bold">زمان کلاس‌ها:</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-center px-4">
                  <p className="text-slate-400 text-xs mb-1">دوشنبه‌ها</p>
                  <p className="text-lg font-black text-[#006A71]">۱۸ تا ۲۰:۳۰</p>
                </div>
                <div className="w-[1px] h-10 bg-[#9ACBD0]/30" />
                <div className="text-center px-4">
                  <p className="text-slate-400 text-xs mb-1">جمعه‌ها</p>
                  <p className="text-lg font-black text-[#006A71]">۱۲ تا ۱۴:۳۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. STRUCTURE SECTION */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#48A6A7] text-sm font-semibold tracking-wider mb-3 px-4 py-1 bg-[#48A6A7]/10 rounded-full">
              برنامه دوره
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#006A71]">ساختار دوره</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {structure.map((item, idx) => {
              const Icon = item.icon;
              const accentColors = {
                dark: "from-[#006A71] to-[#48A6A7]",
                medium: "from-[#48A6A7] to-[#9ACBD0]",
                light: "from-[#9ACBD0] to-[#F2EFE7]"
              };
              
              return (
                <div key={idx} className="group relative">
                  <div className="relative bg-white/80 backdrop-blur-sm border border-[#9ACBD0]/30 rounded-3xl p-8 hover:border-[#48A6A7] transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentColors[item.accent as keyof typeof accentColors]} p-0.5`}>
                        <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                          <Icon className="text-[#006A71]" size={20} />
                        </div>
                      </div>
                      <span className="text-5xl font-black text-[#006A71]/10">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#006A71]">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. EXPANDED BENEFITS SECTION (The " امتیاز این دوره" Part) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#006A71] text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Star size={16} className="fill-current" />
              <span>امتیاز اختصاصی این دوره</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#002d30]">چرا این دوره متفاوت است؟</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Benefit 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-[#9ACBD0]/30 shadow-sm hover:shadow-2xl hover:border-[#006A71]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#006A71] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#006A71]/20">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-[#006A71] mb-6 font-persian-badkh">۱. همکاری تبلیغاتی با راوا</h3>
              <p className="text-[#002d30]/80 leading-[1.8] text-lg">
                بعد از کلاس بلاگر‌هایی که <span className="font-bold text-[#006A71]">آینده کاری</span> دارند، حتی با تعداد فالوورهای کم توسط تیم <span className="text-[#48A6A7] font-bold">راوا</span> تبلیغات می‌گیرند و راوا به صورت ادامه‌دار با این عزیزان همکاری می‌کند.
              </p>
              <div className="mt-8 flex items-center gap-2 text-[#48A6A7] font-bold text-sm">
                <span>تضمین ورود به بازار تبلیغات</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-[#006A71] rounded-[2.5rem] p-10 border border-white/10 shadow-xl shadow-[#006A71]/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#9ACBD0] rounded-2xl flex items-center justify-center mb-8">
                <Star className="text-[#006A71]" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 font-persian-badkh">۲. تلفیق دو دیدگاه تخصصی</h3>
              <div className="space-y-4">
                <p className="text-white/90 leading-[1.8] text-lg">
                  در این کلاس تجربه را از دو نگاه متفاوت می‌بینید: ترکیب <span className="font-bold text-[#9ACBD0]">بلاگر/مدل با سابقه</span> و <span className="font-bold text-[#9ACBD0]">مدیر روابط عمومی و نویسنده تبلیغات</span>.
                </p>
                <p className="text-white/70 italic text-sm border-r-2 border-[#9ACBD0] pr-4">
                  این ترکیب باعث می‌شود علاوه بر یادگیری مباحث جدید، از تکرار خطاهای رایج در مسیر بلاگری دور بمانید.
                </p>
              </div>
            </motion.div>
          </div>

          {/* FINAL CALL TO ACTION */}
          <div className="flex flex-col items-center">
            <button className="group relative w-full max-w-2xl overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#006A71] via-[#48A6A7] to-[#006A71] bg-[length:200%_100%] animate-[shimmer_3s_infinite_linear]" />
              <div className="relative bg-[#006A71] hover:bg-transparent text-white py-7 rounded-[2rem] font-black text-xl md:text-2xl transition-all duration-300 flex items-center justify-center gap-4 border-2 border-transparent">
                <span>ثبت‌نام و شروع سفر حرفه‌ای</span>
                <ChevronLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
              </div>
            </button>
            <p className="mt-6 text-[#006A71]/60 font-medium flex items-center gap-2 text-sm">
              <Zap size={14} className="fill-[#006A71]" />
              ظرفیت دوره به دلیل نظارت مستقیم بر پروژه‌ها محدود است
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          from { background-position: 100% 0; }
          to { background-position: -100% 0; }
        }
      `}</style>
    </section>
  );
};