import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Calendar, Clock, Users } from "lucide-react";

export const ScheduleSection = () => {
  const scheduleItems = [
    {
      icon: Clock,
      title: "مدت دوره",
      value: "۲۰ ساعت",
      subtitle: "غیرحضوری"
    },
    {
      icon: Calendar,
      title: "دوشنبه‌ها",
      value: "۱۸ تا ۲۰:۳۰",
      subtitle: ""
    },
    {
      icon: Calendar,
      title: "جمعه‌ها",
      value: "۱۲ تا ۱۴:۳۰",
      subtitle: ""
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            زمان و نحوه <span className="text-primary">برگزاری</span>
          </h2>
        </AnimatedSection>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mt-12" staggerDelay={0.15}>
          {scheduleItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">{item.title}</h3>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</p>
                {item.subtitle && (
                  <p className="text-sm text-muted-foreground mt-2">{item.subtitle}</p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export const CapacitySection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            ظرفیت و <span className="text-primary">پذیرش</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-transparent via-primary to-transparent" />
              
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">ظرفیت محدود نیست</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    اما ورود به دوره نیازمند ارزیابی اولیه است. لازم است فرم ورودی را تکمیل کنید و پس از بررسی، مجوز ورود به کلاس صادر می‌شود.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-primary font-semibold">
                  ⬇️ فرم ارزیابی را در پایین صفحه تکمیل کنید
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
