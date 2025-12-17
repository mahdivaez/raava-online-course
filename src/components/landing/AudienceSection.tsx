import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const AudienceSection = () => {
  const audiences = [
    "بلاگرها یا کسانی که می‌خواهند در سوشال جایگاه درست بسازند و رشد کنند.",
    "کسانی که تولید محتوا می‌کنند اما مسیرشان نامنظم یا بی‌نتیجه شده.",
    "افرادی که در درآمدزایی، تبلیغات یا جهت‌گیری محتوا دچار چالش هستند.",
    "صاحبان کسب‌وکارهایی که درآمدشان به برند شخصی وابسته است و می‌خواهند مسیرشان را درست ادامه دهند."
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            این دوره برای چه کسانی <span className="text-primary">مناسب است؟</span>
          </h2>
        </AnimatedSection>
        
        <StaggerContainer className="max-w-3xl mx-auto mt-12 space-y-4" staggerDelay={0.1}>
          {audiences.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors group">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Check className="w-5 h-5 text-primary" />
                </motion.div>
                <p className="text-foreground/90 leading-relaxed pt-1">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <AnimatedSection delay={0.5}>
          <div className="max-w-3xl mx-auto mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
            <p className="text-foreground font-medium">
              این دوره فقط برای تازه‌کارها نیست. اگر در مسیر بلاگری به مشکل خورده‌اید یا حس می‌کنید نمی‌دانید کجای راه هستید، این دوره برای شما طراحی شده است.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export const RequirementsSection = () => {
  const scrollToForm = () => {
    const element = document.querySelector("#form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            ورودی <span className="text-primary">دوره</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              برای اینکه بتوانیم دقیق‌تر راهنمایی‌تان کنیم و با توجه به اینکه راوا در حوزه تبلیغات می‌تواند با بلاگرهای بالای ۵k همکاری داشته باشد، لازم است فرم ورودی را تکمیل کنید.
            </p>
            <p className="text-lg text-primary font-semibold">
              در صورت هم‌مسیر بودن، امکان همکاری تبلیغاتی هم وجود دارد.
            </p>
            
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg glow-orange-sm hover:glow-orange transition-all"
            >
              تکمیل فرم ارزیابی
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
