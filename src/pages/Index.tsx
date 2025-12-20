import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { MentorZigzag } from "@/components/landing/MentorZigzag";
import { IntroSection } from "@/components/landing/IntroSection";
import { VideoIntroSection } from "@/components/landing/VideoIntroSection";
import { ScheduleSection, CapacitySection } from "@/components/landing/ScheduleSection";
import { StructureSection } from "@/components/landing/StructureSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { AudienceSection, RequirementsSection } from "@/components/landing/AudienceSection";
import { SyllabusSection } from "@/components/landing/SyllabusSection";
import { MentorsSection } from "@/components/landing/MentorsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { RegistrationChoice } from "@/components/landing/RegistrationChoice";
import { EvaluationForm } from "@/components/landing/EvaluationForm";
import { Footer } from "@/components/landing/Footer";
import { ScrollVelocityRow } from "@/components/magicui/scroll-velocity";

const Index = () => {
  const [registrationStep, setRegistrationStep] = useState<"choice" | "form">("choice");
  const [formType, setFormType] = useState<"course-only" | "work-with-rava">("course-only");

  const handleChoose = (type: "course-only" | "work-with-rava") => {
    setFormType(type);
    setRegistrationStep("form");
    setTimeout(() => {
      document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <MentorZigzag />
        
        {/* Scroll velocity text */}
        <div className="py-12 bg-background overflow-hidden">
          <ScrollVelocityRow velocity={3} className="text-4xl md:text-6xl font-black text-primary/20">
            <span className="mx-8">بلاگری</span>
            <span className="mx-8">•</span>
            <span className="mx-8">برند شخصی</span>
            <span className="mx-8">•</span>
            <span className="mx-8">درآمدزایی</span>
            <span className="mx-8">•</span>       <span className="mx-8">بلاگری</span>
            <span className="mx-8">•</span>
            <span className="mx-8">برند شخصی</span>
            <span className="mx-8">•</span>
            <span className="mx-8">درآمدزایی</span>
            <span className="mx-8">•</span>
          </ScrollVelocityRow>
        </div>
        
        <IntroSection />
        <VideoIntroSection />
        <ScheduleSection />
        <CapacitySection />
        <StructureSection />
        <BenefitsSection />
        <AudienceSection />
        <RequirementsSection />
        <SyllabusSection />
        <MentorsSection />
        <PricingSection />
        
        {registrationStep === "choice" ? (
          <RegistrationChoice onChoose={handleChoose} />
        ) : (
          <EvaluationForm 
            formType={formType} 
            onBack={() => setRegistrationStep("choice")} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
