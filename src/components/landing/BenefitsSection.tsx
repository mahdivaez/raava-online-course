import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { TrendingUp, Eye } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      number: "۱",
      title: "همکاری تبلیغاتی با راوا",
      description: "بعد از کلاس بلاگرهایی که آینده کاری دارن حتی با تعداد فالوورهای کم توسط تیم راوا تبلیغات می‌گیرن و راوا به صورت ادامه‌دار با این عزیزان همکاری می‌کند."
    },
    {
      icon: Eye,
      number: "۲",
      title: "تجربه از دو نگاه متفاوت",
      description: "در این کلاس تجربه را از دو نگاه متفاوت می‌بینید: تجربه یک بلاگر/مدل با سابقه چندساله و تجربه یک مدیر روابط عمومی اینفلوئنسرها و نویسنده تبلیغات. این ترکیب باعث می‌شود علاوه بر یادگیری مباحث جدید، از تکرار خطاهای رایج در مسیر بلاگری دور بمانید."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Collage art background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-primary/20 rotate-45" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-24 bg-orange-glow/20 -rotate-45" />
      </div>
      
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            امتیاز این <span className="text-primary">دوره</span>
          </h2>
        </AnimatedSection>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.2}>
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.number}>
              <div className="glass rounded-3xl p-8 h-full relative group hover:border-primary/40 transition-all duration-300">
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black rotate-12 group-hover:rotate-0 transition-transform">
                  {benefit.number}
                </div>
                
                <div className="pt-4">
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
