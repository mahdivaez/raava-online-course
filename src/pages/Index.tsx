import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { ScheduleSection, CapacitySection } from "@/components/landing/ScheduleSection";
import { StructureSection } from "@/components/landing/StructureSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { AudienceSection, RequirementsSection } from "@/components/landing/AudienceSection";
import { SyllabusSection } from "@/components/landing/SyllabusSection";
import { MentorsSection } from "@/components/landing/MentorsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { EvaluationForm } from "@/components/landing/EvaluationForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ScheduleSection />
        <CapacitySection />
        <StructureSection />
        <BenefitsSection />
        <AudienceSection />
        <RequirementsSection />
        <SyllabusSection />
        <MentorsSection />
        <PricingSection />
        <EvaluationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
