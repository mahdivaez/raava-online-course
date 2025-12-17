import { AnimatedSection } from "./AnimatedSection";

export const IntroSection = () => {
  return (
    <section id="intro" className="section-padding relative overflow-hidden">
      {/* Collage background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            معرفی <span className="text-primary">دوره</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                این دوره برای کسانی است که در مسیر بلاگری یا برند شخصی، می‌خواهند از تولید محتوای پراکنده عبور کنند و به یک مسیر شفاف، حرفه‌ای و درآمدزا برسند.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                در این کلاس یاد می‌گیرید چطور روایت و هویت‌تان را بسازید، محتوایتان را هدفمند کنید، و مسیر همکاری با برندها را حرفه‌ای‌تر پیش ببرید.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Collage Images */}
          <AnimatedSection direction="left" delay={0.4}>
            <div className="relative h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80"
                alt="Social media content"
                className="absolute top-0 right-0 w-48 md:w-56 h-48 md:h-56 object-cover rounded-2xl shadow-xl border-2 border-border rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80"
                alt="Creative workspace"
                className="absolute bottom-0 left-0 w-44 md:w-52 h-44 md:h-52 object-cover rounded-2xl shadow-xl border-2 border-border -rotate-6 hover:rotate-0 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
                alt="Content creation"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 h-40 md:h-48 object-cover rounded-2xl shadow-2xl border-2 border-primary/50 z-10"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
