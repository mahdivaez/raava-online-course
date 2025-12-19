import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const mentors = [
  {
    name: "دکتر پارمیدا حسین‌پور",
    role: "اینفلوئنسر و مدل",
    description: "با سال‌ها تجربه در مسیر بلاگری و مدلینگ، تجربیات واقعی و چالش‌های مسیر را با شما به اشتراک می‌گذارد.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    align: "right" as const,
  },
  {
    name: "آفرین بنائی",
    role: "صاحب برند راوا، مدیر روابط عمومی اینفلوئنسرها و نویسنده تبلیغات",
    description: "نگاه حرفه‌ای از سمت برندها و تبلیغات. یاد می‌گیرید چطور با برندها همکاری کنید و از خطاهای رایج دور بمانید.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    align: "left" as const,
  },
];

export const MentorZigzag = () => {
  return (
    <section className="relative overflow-hidden">
      {mentors.map((mentor, index) => (
        <MentorBlock key={mentor.name} mentor={mentor} index={index} />
      ))}
    </section>
  );
};

interface MentorBlockProps {
  mentor: typeof mentors[0];
  index: number;
}

const MentorBlock = ({ mentor, index }: MentorBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  
  const isRight = mentor.align === "right";

  return (
    <div 
      ref={ref}
      className={`relative min-h-[80vh] md:min-h-screen flex items-center ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
    >
      {/* Flickering grid background */}
      <FlickeringGrid 
        className="absolute inset-0 opacity-30" 
        squareSize={3} 
        gridGap={8} 
        flickerChance={0.2}
        color={index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
        maxOpacity={0.15}
      />
      
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
          {/* Image side */}
          <motion.div 
            className={`relative ${isRight ? 'md:order-2' : 'md:order-1'}`}
            style={{ y }}
          >
            <BlurFade delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] md:aspect-[4/5]">
                <motion.img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                  style={{ scale: imageScale }}
                />
                <div className={`absolute inset-0 bg-gradient-to-${isRight ? 'l' : 'r'} from-transparent via-transparent to-background/50`} />
              </div>
            </BlurFade>
            
            {/* Decorative elements */}
            <motion.div 
              className={`absolute ${isRight ? '-left-8' : '-right-8'} -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Content side */}
          <div className={`relative z-10 ${isRight ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}>
            <BlurFade delay={0.4}>
              <span className="text-primary text-sm font-medium mb-2 block">مربی دوره</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
                {mentor.name}
              </h2>
              <p className="text-accent text-lg md:text-xl font-medium mb-6">
                {mentor.role}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {mentor.description}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};
