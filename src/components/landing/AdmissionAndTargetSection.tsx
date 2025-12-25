import { AnimatedSection } from "./AnimatedSection";
import { 
  Users2, 
  Target, 
  BarChart3, 
  Gem, 
  ClipboardCheck, 
  ArrowDownCircle,
  AlertCircle,
  Zap
} from "lucide-react";

export const AdmissionAndTargetSection = () => {
  const targetAudience = [
    {
      title: "بلاگرها و نوآوران",
      desc: "کسانی که می‌خواهند در فضای شلوغ سوشال مدیا، جایگاه منحصربه‌فرد و برند شخصی قدرتمند بسازند.",
      icon: <Users2 className="w-6 h-6" />,
    },
    {
      title: "محتواسازان سردرگم",
      desc: "افرادی که تولید محتوا می‌کنند اما مسیرشان نامنظم شده و خروجی ملموسی دریافت نمی‌کنند.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "استراتژیست‌های درآمد",
      desc: "کسانی که در مدل‌های درآمدی، جذب تبلیغات یا جهت‌گیری محتوایی دچار چالش‌های جدی هستند.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "صاحبان کسب‌وکار",
      desc: "مدیرانی که درآمدشان گره خورده به برند شخصی‌شان است و نیاز به یک نقشه راه اصولی دارند.",
      icon: <Gem className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-[hsl(var(--nude))] text-[hsl(var(--foreground))] relative overflow-hidden" dir="rtl">
      {/* Background Glows using Light Teal (#9ACBD0) */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#9ACBD0]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#48A6A7]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION 1: TARGET AUDIENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 text-[#006A71]">
                این دوره برای <br />
                <span className="text-[#48A6A7] italic">شما</span> طراحی شده؟
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                این دوره فقط برای تازه‌کارها نیست. اگر در مسیر بلاگری به بن‌بست خورده‌اید یا حس می‌کنید مسیرتان جهت درستی ندارد، ما کنار شما هستیم.
              </p>
              
              <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/60 border border-[#9ACBD0]/30 text-sm shadow-sm">
                <AlertCircle className="text-[#006A71]" size={20} />
                <span className="text-slate-700">محدودیت فالوور نداریم؛ معیار ما پتانسیل رشد شماست.</span>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {targetAudience.map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-sm border border-[#9ACBD0]/20 hover:border-[#48A6A7] hover:bg-white/60 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#006A71]/10 flex items-center justify-center text-[#006A71] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#006A71]">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: ADMISSION & RAVA (THE BENTO BOX) */}
        <div className="relative rounded-[3rem] overflow-hidden border border-[#9ACBD0]/30 bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Admission Info */}
            <div className="lg:col-span-7 p-10 md:p-16 border-b lg:border-b-0 lg:border-l border-[#9ACBD0]/20 bg-[#F2EFE7]/30">
              <div className="flex items-center gap-2 text-[#48A6A7] font-mono text-xs tracking-widest uppercase mb-6">
                <ClipboardCheck size={16} />
                <span>Admission Process</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#006A71]">ظرفیت و نحوه پذیرش</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
              ظرفیت محدود نیست، اما ورود به دوره نیازمند ارزیابی اولیه است. لازم است فرم ورودی را تکمیل کنید و پس از بررسی، مجوز ورود به کلاس صادر می‌شود.               
                است. 
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#006A71]/10 text-[#006A71] flex items-center justify-center shrink-0 mt-1">
                    <Target size={14} />
                  </div>
                  <p className="text-slate-700 font-medium">تکمیل فرم ورودی اولین قدم شماست.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#006A71]/10 text-[#006A71] flex items-center justify-center shrink-0 mt-1">
                    <Target size={14} />
                  </div>
                  <p className="text-slate-700 font-medium">بررسی توسط تیم منتورینگ و صدور مجوز ورود.</p>
                </div>
              </div>
            </div>

            {/* Rava Collaboration Highlight - Updated to Dark Teal (#006A71) */}
            <div className="lg:col-span-5 p-10 md:p-16 bg-[#006A71] text-white flex flex-col justify-center relative group overflow-hidden">
               {/* Decorative Circles in Cream */}
               <div className="absolute -bottom-10 -left-10 w-40 h-40 border-[20px] border-[#F2EFE7]/10 rounded-full" />
               
               <div className="relative z-10">
                  <h4 className="text-[#9ACBD0] text-sm font-black uppercase tracking-widest mb-4 opacity-70">Rava Partnership</h4>
                  <h3 className="text-3xl font-black mb-6 leading-tight">فرصت همکاری با راوا</h3>
                  <p className="text-[#F2EFE7]/90 font-medium leading-relaxed mb-8">
                    با توجه به اینکه آژانس راوا می‌تواند با بلاگرهای بالای <span className="underline decoration-[#9ACBD0] decoration-2 font-black italic">5k فالوور</span> همکاری مستقیم داشته باشد، ارزیابی دقیق شما به ما کمک می‌کند تا بلافاصله پس از دوره، مسیر همکاری تبلیغاتی را برایتان هموار کنیم.
                  </p>
                  
                  <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all text-[#9ACBD0]">
                    <span>هم‌مسیر شدن با برندهای بزرگ</span>
                    <Zap size={20} fill="currentColor" />
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-20 text-center animate-bounce">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#48A6A7] font-medium">فرم ارزیابی را در پایین صفحه تکمیل کنید</span>
            <ArrowDownCircle size={40} className="text-[#006A71]" />
          </div>
        </div>

      </div>
    </section>
  );
};