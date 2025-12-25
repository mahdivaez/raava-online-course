import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Instagram, Linkedin, Globe, Users, ArrowDown } from "lucide-react";

const coaches = [
  {
    name: "دکتر پارمیدا حسین‌پور",
    role: "اینفلوئنسر و مدل",
    description: "تجربیات واقعی مسیر بلاگری و استانداردهای برندینگ شخصی. تمرکز بر هویت بصری و چالش‌های مسیر حرفه‌ای.",
    mainImage: "/parmida.jpg",
    circleImage: "/parmida.jpg",
    socials: { instagram: "#", linkedin: "#" },
    align: "right" as const,
  },
  {
    name: "آفرین بنائی",
    role: "صاحب برند راوا و استراتژیست تبلیغات",
    description: "استراتژی همکاری با برندها و مدیریت روابط عمومی. یادگیری اصول بیزنس بلاگری و دوری از خطاهای رایج.",
    mainImage: "/afarin.jpg",
    circleImage: "/afarin.jpg",
    socials: { instagram: "#", web: "#" },
    align: "left" as const,
  },
];

const mentorTeam = [
  { name: "کوثر سهندی", image: "/mahsa-soleymani.JPG" },
  { name: "زینب سمامی", image: "/zeynab-samay.JPG" },
  { name: "آیدا پالیزگر", image: "/ayda.jpg" },
  { name: "مهسا سلیمانی", image: "/mahsa.jpg" },
  { name: "مینا داوودی", image: "/mina.jpg" },
];

export const FullMentorshipSection = () => {
  return (
    <section className="bg-[hsl(var(--nude))] text-[#006A71] overflow-hidden" dir="rtl">
      {/* 1. COACHES (LEADERS) - SCROLL DRIVEN */}
      <div className="relative bg-[#002d30] py-24 text-[#F2EFE7]">
        <div className="pb-12 text-center container mx-auto">
          <BlurFade>
            <span className="text-[#9ACBD0] tracking-widest uppercase text-sm font-bold">The Faculty</span>
            <h2 className="text-5xl md:text-7xl font-black mt-4">مربیان دوره</h2>
          </BlurFade>
        </div>

        {coaches.map((coach, index) => (
          <CoachBlock key={coach.name} coach={coach} index={index} />
        ))}
      </div>

      {/* 2. MENTORS TEAM - BENTO GRID */}
      <div className="py-32 container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-[#9ACBD0]/30 pb-12">
          <div>
            <h3 className="text-4xl font-bold mb-4 flex items-center gap-3 text-[#006A71]">
              <Users className="text-[#48A6A7]" />
              تیم منتورینگ
            </h3>
            <p className="text-slate-600 max-w-md">
              حرفه‌ای‌هایی که در طول مسیر، گام به گام در کنار شما هستند تا تمرین‌ها و چالش‌هایتان را تحلیل کنند.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-12 h-12 rounded-full border border-[#006A71]/20 flex items-center justify-center animate-bounce text-[#006A71]">
              <ArrowDown size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mentorTeam.map((mentor, i) => (
            <BlurFade key={mentor.name} delay={0.1 * i}>
              <div className="group relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-[#9ACBD0]/30 bg-white relative shadow-sm">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Oceanic Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002d30] via-transparent to-transparent opacity-80" />
                  
                  {/* Name on hover */}
                  <div className="absolute bottom-6 right-6 left-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[#9ACBD0] text-[10px] font-bold uppercase tracking-widest mb-1">Mentor</p>
                    <p className="text-[#F2EFE7] font-bold text-lg">{mentor.name}</p>
                  </div>
                </div>
                {/* Decorative glow behind using Teal */}
                <div className="absolute inset-0 -z-10 bg-[#48A6A7]/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoachBlock = ({ coach, index }: { coach: typeof coaches[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [40, -160]);
  const isRight = coach.align === "right";

  return (
    <div ref={containerRef} className="relative min-h-[80vh] flex items-center py-20 px-6">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <FlickeringGrid color={index % 2 === 0 ? "#48A6A7" : "#F2EFE7"} />
      </div>

      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-12 gap-16 items-center ${isRight ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* IMAGE SIDE */}
          <div className="lg:col-span-7 relative flex justify-center order-1">
            <motion.div style={{ y: yImage }} className="relative w-full max-w-sm group">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-[#9ACBD0]/30 ring-1 ring-white/10 shadow-2xl">
                <img src={coach.mainImage} className="w-full h-full object-cover" alt={coach.name} />
              </div>
            </motion.div>

            <motion.div 
              style={{ y: yCircle }}
              className={`absolute -bottom-10 ${isRight ? 'lg:-left-12' : 'lg:-right-12'} hidden lg:block`}
            >
              <div className="w-44 h-44 rounded-full p-1.5 bg-[#001f21] border border-[#9ACBD0]/40 overflow-hidden shadow-2xl">
                <img src={coach.circleImage} className="w-full h-full object-cover rounded-full" alt={`${coach.name} profile`} />
              </div>
            </motion.div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-5 space-y-6 order-2">
            <span className="text-[#9ACBD0] font-bold italic tracking-wider text-xl">{coach.role}</span>
            <h3 className="text-5xl font-black text-white">{coach.name}</h3>
            <p className="text-[#F2EFE7]/80 text-lg leading-relaxed">{coach.description}</p>
            
            <div className="flex gap-4 pt-4">
              {Object.entries(coach.socials).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url} 
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-[#9ACBD0] hover:text-[#002d30] transition-all group text-white"
                >
                   {platform === 'instagram' && <Instagram size={20} />}
                   {platform === 'linkedin' && <Linkedin size={20} />}
                   {platform === 'web' && <Globe size={20} />}
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};