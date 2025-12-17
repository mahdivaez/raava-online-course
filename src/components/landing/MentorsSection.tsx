import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { TiltCard } from "./TiltCard";

export const MentorsSection = () => {
  const mentors = [
    {
      name: "دکتر پارمیدا حسین‌پور",
      role: "اینفلوئنسر و مدل",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      description: "با سال‌ها تجربه در حوزه بلاگری و مدلینگ"
    },
    {
      name: "آفرین بنائی",
      role: "صاحب برند راوا، مدیر روابط عمومی اینفلوئنسرها و نویسنده تبلیغات",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      description: "متخصص در استراتژی برند و همکاری با برندها"
    }
  ];

  const mentorTeam = [
    "کوثر سهندی",
    "زینب سمامی",
    "آیدا پالیزگر",
    "مهسا سلیمانی",
    "مینا داوودی"
  ];

  return (
    <section id="mentors" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            مربیان <span className="text-primary">دوره</span>
          </h2>
        </AnimatedSection>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12" staggerDelay={0.2}>
          {mentors.map((mentor) => (
            <StaggerItem key={mentor.name}>
              <TiltCard className="h-full">
                <div className="glass rounded-3xl p-8 h-full text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-full border-4 border-primary/30 group-hover:border-primary transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                  <p className="text-primary text-sm mb-4">{mentor.role}</p>
                  <p className="text-muted-foreground text-sm">{mentor.description}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Mentor Team */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">منتورها</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {mentorTeam.map((name, index) => (
                <span 
                  key={name}
                  className="px-6 py-3 rounded-full glass text-foreground/90 hover:border-primary/50 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
