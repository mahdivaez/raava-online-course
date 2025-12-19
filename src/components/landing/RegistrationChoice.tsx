import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { DotPattern } from "@/components/magicui/dot-pattern";

interface RegistrationChoiceProps {
  onChoose: (type: "course-only" | "work-with-rava") => void;
}

export const RegistrationChoice = ({ onChoose }: RegistrationChoiceProps) => {
  return (
    <section id="registration-choice" className="section-padding relative overflow-hidden">
      <DotPattern className="opacity-30" width={24} height={24} cr={1.5} />
      
      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            چطور می‌خواهید <span className="text-gradient">ثبت‌نام</span> کنید؟
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            مسیر مناسب خود را انتخاب کنید
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Course Only Option */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-card border border-border h-full flex flex-col overflow-hidden group cursor-pointer"
              onClick={() => onChoose("course-only")}
            >
              <BorderBeam size={150} duration={10} delay={0} />
              
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">فقط شرکت در دوره</h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                می‌خواهم در دوره شرکت کنم و مهارت‌های بلاگری و برند شخصی را یاد بگیرم.
              </p>
              
              <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  فرم کوتاه با اطلاعات پایه
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  دسترسی به تمام محتوای دوره
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  شرکت در جلسات منتورینگ
                </li>
              </ul>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6">
                انتخاب این مسیر
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Work with Rava Option */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/30 h-full flex flex-col overflow-hidden group cursor-pointer"
              onClick={() => onChoose("work-with-rava")}
            >
              <BorderBeam size={150} duration={10} delay={5} colorFrom="hsl(var(--accent))" colorTo="hsl(var(--primary))" />
              
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                پیشنهاد ویژه
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">همکاری با راوا</h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                علاوه بر شرکت در دوره، می‌خواهم امکان همکاری تبلیغاتی با راوا را هم داشته باشم.
              </p>
              
              <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  فرم ارزیابی کامل
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  امکان همکاری تبلیغاتی با راوا
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  بررسی و ارزیابی حرفه‌ای پیج
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  اولویت در پروژه‌های PR
                </li>
              </ul>
              
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6">
                انتخاب این مسیر
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
