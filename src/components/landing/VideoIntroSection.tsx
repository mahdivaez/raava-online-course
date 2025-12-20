import { AnimatedSection } from "./AnimatedSection";

export const VideoIntroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            ویدیو <span className="text-primary">معرفی دوره</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video - replace with actual course intro video
                title="معرفی دوره بلاگری و برند شخصی"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};