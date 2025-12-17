import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Calendar, CreditCard, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const PricingSection = () => {
  const timeline = [
    { label: "ثبت‌نام", date: "تا ۱۰ دی" },
    { label: "ارزیابی", date: "تا ۱۵ دی" },
    { label: "شروع کلاس", date: "۲۰ دی" },
    { label: "پایان کلاس", date: "۲۰ بهمن" }
  ];

  const scrollToForm = () => {
    const element = document.querySelector("#form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            زمان‌بندی ثبت‌نام و <span className="text-primary">هزینه</span>
          </h2>
        </AnimatedSection>
        
        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mt-12 mb-16">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 hidden md:block" />
              
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0" staggerDelay={0.1}>
                {timeline.map((item, index) => (
                  <StaggerItem key={item.label}>
                    <div className="relative text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3 relative z-10">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-foreground">{item.label}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Pricing Cards */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-transparent via-primary to-transparent" />
              
              <h3 className="text-2xl font-bold text-center mb-8">هزینه و شرایط پرداخت</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Iranian Price */}
                <motion.div 
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">داخل ایران</p>
                  <p className="text-3xl md:text-4xl font-black text-foreground">۶,۷۰۰,۰۰۰</p>
                  <p className="text-muted-foreground mt-1">تومان</p>
                </motion.div>
                
                {/* International Price */}
                <motion.div 
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <DollarSign className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">خارج از کشور</p>
                  <p className="text-3xl md:text-4xl font-black text-foreground">۱۳۵</p>
                  <p className="text-muted-foreground mt-1">دلار</p>
                </motion.div>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-muted-foreground">نوع پرداخت: <span className="text-foreground font-semibold">نقدی</span></p>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={scrollToForm}
                  size="lg"
                  className="text-lg px-12 py-7 glow-orange animate-pulse-glow pixel-border bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  پرداخت و ثبت‌نام
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
