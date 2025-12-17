import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { BookOpen, Users2, MessageSquare } from "lucide-react";

export const StructureSection = () => {
  const structureItems = [
    {
      icon: BookOpen,
      title: "۴ جلسه اول",
      description: "تدریس خانم آفرین بنائی و شنیدن تجربه‌های خانم دکتر پارمیدا حسین‌پور",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Users2,
      title: "۳ جلسه منتورینگ",
      description: "بر اساس تمرین‌ها و تجربه شما، برای حل چالش‌های واقعی، باز کردن گره‌ها و ساختن راه‌حل‌های تازه متناسب با مسیرتان",
      color: "from-orange-glow/20 to-orange-glow/5"
    },
    {
      icon: MessageSquare,
      title: "جلسه آخر",
      description: "جمع‌بندی کارها و توضیحات اختتامیه کلاس",
      color: "from-secondary to-secondary/50"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            ساختار <span className="text-primary">دوره</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mt-4 mb-12">
            این دوره ترکیبی از آموزش، کارگاه و پروژه است
          </p>
        </AnimatedSection>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {structureItems.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className={`relative rounded-3xl p-8 bg-gradient-to-b ${item.color} border border-border/50 h-full group hover:border-primary/30 transition-all duration-300`}>
                <div className="absolute -top-4 right-8 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
