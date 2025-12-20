import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { TiltCard } from "./TiltCard";

export const MentorsSection = () => {
  const mentors = [
    {
      name: "دکتر پارمیدا حسین‌پور",
      role: "اینفلوئنسر و مدل",
      image: "/parmida.jpg",
      description: "با سال‌ها تجربه در حوزه بلاگری و مدلینگ"
    },
    {
      name: "آفرین بنائی",
      role: "صاحب برند راوا، مدیر روابط عمومی اینفلوئنسرها و نویسنده تبلیغات",
      image: "/afarin.jpg",
      description: "متخصص در استراتژی برند و همکاری با برندها"
    }
  ];

  const mentorTeam = [
    {
      name: "کوثر سهندی",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      name: "زینب سمامی",
      image: "/zeynab-samay.JPG"
    },
    {
      name: "آیدا پالیزگر",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
    },
    {
      name: "مهسا سلیمانی",
      image: "/mahsa-soleymani.JPG"
    },
    {
      name: "مینا داوودی",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80"
    }
  ];

  return (
    <section id="mentors" className="section-padding bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-block px-6 py-2 rounded-full glass border border-primary/30 mb-4">
              <span className="text-primary text-sm font-semibold">تیم حرفه‌ای ما</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              مربیان <span className="text-primary">دوره</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              با بهترین متخصصان حوزه اینفلوئنسر مارکتینگ آشنا شوید
            </p>
          </div>
        </AnimatedSection>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16" staggerDelay={0.2}>
          {mentors.map((mentor) => (
            <StaggerItem key={mentor.name}>
              <TiltCard className="h-full min-h-[400px]">
                <div className="glass rounded-3xl p-8 h-full text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 border-transparent hover:border-primary/30">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 group-hover:border-primary group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{mentor.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-4">{mentor.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mentor.description}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Mentor Team - Premium Card Design */}
        <AnimatedSection delay={0.4}>
          <div className="mt-24 text-center">
            <div className="inline-block px-6 py-2 rounded-full glass border border-primary/30 mb-6">
              <span className="text-primary text-sm font-semibold">منتورهای دوره</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              منتورها
            </h3>
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {mentorTeam.map((mentor, index) => (
                <div
                  key={mentor.name}
                  className="group cursor-pointer"
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Card */}
                    <div className="glass rounded-3xl p-6 border-2 border-primary/20 group-hover:border-primary transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                      <div className="relative w-36 h-60 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-transparent">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Overlay content on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                        </div>
                      </div>
                      
                      <h4 className="text-base font-bold text-center mb-1 group-hover:text-primary transition-colors">
                        {mentor.name}
                      </h4>
                      <p className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        منتور دوره
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}