import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SyllabusSection = () => {
  const syllabus = [
    {
      title: "پایه‌ها: هویت و جایگاه",
      items: [
        "پرسونال برندینگ در بلاگری و کسب‌وکار",
        "مخاطب‌شناسی و نقش آن در رشد",
        "استراتژی برند شخصی (شناخت، تحلیل مسیر، برنامه‌ریزی آینده)"
      ]
    },
    {
      title: "محتوا و سوشال",
      items: [
        "چه محتوایی باید تولید شود؟",
        "خلاقیت و تحلیل فضای سوشال",
        "مسیر محتوایی و نظم انتشار"
      ]
    },
    {
      title: "درآمد و همکاری با برندها",
      items: [
        "کسب درآمد از تبلیغات: PR، UGC، قراردادهای شراکتی",
        "نوشتن مدیاکیت، CV و چارت تبلیغات (برای همکاری با برندهای ایرانی و خارجی)",
        "شناخت مدل‌های درآمدی مختلف در بلاگری"
      ]
    },
    {
      title: "مدیریت و اجرا",
      items: [
        "مدیریت بحران و پاسخ‌گویی در موج‌های مخالف",
        "اجرایی کردن آموزش‌ها روی پیج شما و پاسخ‌گویی منتورها"
      ]
    }
  ];

  return (
    <section id="syllabus" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            سرفصل‌های <span className="text-primary">دوره</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {syllabus.map((section, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass rounded-2xl border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-lg font-bold hover:no-underline hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">
                        {index + 1}
                      </span>
                      {section.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <ul className="space-y-3 mr-11">
                      {section.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
