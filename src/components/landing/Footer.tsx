import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToForm = () => {
    document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden z-40">
        <Button onClick={scrollToForm} className="w-full py-6 glow-orange bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
          ثبت‌نام در دوره
        </Button>
      </div>

      <footer className="py-12 px-4 border-t border-border mb-20 md:mb-0">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold text-primary">راوا</div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Telegram"><Send className="w-5 h-5" /></a>
            </div>
            <p className="text-muted-foreground text-sm">© ۲۰۲۵ راوا - تمامی حقوق محفوظ است</p>
          </div>
        </div>
      </footer>
    </>
  );
};
