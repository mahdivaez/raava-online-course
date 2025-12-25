import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { CourseDetailsSection } from "@/components/landing/CourseDetailsSection";
import { VideoIntroSection } from "@/components/landing/VideoIntroSection";
import { AdmissionAndTargetSection } from "@/components/landing/AdmissionAndTargetSection";
import { FullMentorshipSection } from "@/components/landing/FullMentorshipSection";
import { RegistrationChoice } from "@/components/landing/RegistrationChoice";
import { EvaluationForm } from "@/components/landing/EvaluationForm";
import { Footer } from "@/components/landing/Footer";
import { UnifiedRegistrationSection } from "@/components/landing/UnifiedRegistration";

const Index = () => {
  const [registrationStep, setRegistrationStep] = useState<"choice" | "form">(
    "choice"
  );
  const [formType, setFormType] = useState<"course-only" | "work-with-rava">(
    "course-only"
  );

  const handleChoose = (type: "course-only" | "work-with-rava") => {
    setFormType(type);
    setRegistrationStep("form");
    // Added a slight delay to ensure the form is rendered before scrolling
    setTimeout(() => {
      document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    /* Updated the wrapper with a subtle radial gradient using your palette colors:
       Background: Cream (#F2EFE7)
       Subtle Glow: Light Teal (#9ACBD0)
    */
    <div className="min-h-screen bg-background text-foreground selection:bg-teal-light/30 selection:text-teal-dark">
      <Header />
      
      <main className="relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teal-light/10 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] rounded-full bg-teal-medium/5 blur-[100px]" />
        </div>

        <HeroSection />
        
        <div className="space-y-0">
          <VideoIntroSection />
          
          <div className="bg-gradient-to-b from-transparent via-teal-light/5 to-transparent">
            <CourseDetailsSection />
          </div>

          <AdmissionAndTargetSection />
          
          <div className="bg-teal-dark/5">
             <FullMentorshipSection />
          </div>

          <UnifiedRegistrationSection onChoose={handleChoose} />

          {registrationStep === "form" && (
            <section id="form" className="py-12 md:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <EvaluationForm
                formType={formType}
                onBack={() => setRegistrationStep("choice")}
              />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;